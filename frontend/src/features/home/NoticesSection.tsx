import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { FiBell, FiClipboard } from 'react-icons/fi'
import { ArrowLink, AutoScrollArea, NoticeItem, Section } from '@/components/ui'
import { cn } from '@/lib'
import type { LinkItem } from '@/types/common'
import type { Notice, NoticesContent } from '@/types/home'

interface NoticesSectionProps {
  content: NoticesContent
}

/** Two side-by-side containers: announcements, and a noticeboard split into categories. Both scroll by themselves. */
export function NoticesSection({ content }: NoticesSectionProps) {
  const { newLabel, emptyLabel, announcements, noticeboard } = content

  return (
    <Section id="notices" tone="muted">
      <div className="grid gap-8 lg:grid-cols-2">
        <Panel icon={FiBell} title={announcements.title} action={announcements.action}>
          <NoticeList label={announcements.title} items={announcements.items} newLabel={newLabel} emptyLabel={emptyLabel} />
        </Panel>

        <Noticeboard content={noticeboard} newLabel={newLabel} emptyLabel={emptyLabel} />
      </div>
    </Section>
  )
}

interface PanelProps {
  icon: IconType
  title: string
  /** Extra header content below the title, e.g. category tabs. */
  tabs?: ReactNode
  /** "View all" link shown under the list. */
  action?: LinkItem
  children: ReactNode
}

/** The card shared by both containers: a coloured header, the scrolling list, and a "view all" link. */
function Panel({ icon: Icon, title, tabs, action, children }: PanelProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="bg-primary px-6 py-5 text-white">
        <h2 className="flex items-center gap-3 text-xl text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <Icon aria-hidden />
          </span>
          {title}
        </h2>
        {tabs}
      </div>

      {children}

      {action && (
        <div className="border-t border-line px-6 py-3">
          <ArrowLink href={action.href}>{action.label}</ArrowLink>
        </div>
      )}
    </div>
  )
}

interface NoticeListProps {
  label: string
  items: Notice[]
  newLabel: string
  emptyLabel: string
}

function NoticeList({ label, items, newLabel, emptyLabel }: NoticeListProps) {
  if (items.length === 0) {
    return <p className="flex h-96 items-center justify-center px-6 text-sm">{emptyLabel}</p>
  }

  return (
    <AutoScrollArea label={label} className="h-96">
      <ul>
        {items.map((notice) => (
          <li key={notice.id}>
            <NoticeItem notice={notice} newLabel={newLabel} />
          </li>
        ))}
      </ul>
    </AutoScrollArea>
  )
}

interface NoticeboardProps {
  content: NoticesContent['noticeboard']
  newLabel: string
  emptyLabel: string
}

function Noticeboard({ content, newLabel, emptyLabel }: NoticeboardProps) {
  const { title, action, categories } = content
  const baseId = useId()
  const [activeId, setActiveId] = useState(categories[0]?.id)
  const active = categories.find((category) => category.id === activeId) ?? categories[0]

  if (!active) return null

  const tabs = (
    <div role="tablist" aria-label={title} className="mt-4 flex flex-wrap gap-2">
      {categories.map((category) => {
        const selected = category.id === active.id
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            id={`${baseId}-${category.id}-tab`}
            aria-selected={selected}
            aria-controls={`${baseId}-panel`}
            onClick={() => setActiveId(category.id)}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              selected ? 'bg-white text-primary' : 'bg-white/15 text-white hover:bg-white/25',
            )}
          >
            {category.label}
            <span
              className={cn(
                'rounded-full px-1.5 py-0.5 text-[0.65rem] font-semibold leading-none',
                selected ? 'bg-primary/10' : 'bg-white/20',
              )}
            >
              {category.items.length}
            </span>
          </button>
        )
      })}
    </div>
  )

  return (
    <Panel icon={FiClipboard} title={title} tabs={tabs} action={action}>
      <div role="tabpanel" id={`${baseId}-panel`} aria-labelledby={`${baseId}-${active.id}-tab`}>
        {/* The key restarts the list at the top whenever the category changes. */}
        <NoticeList
          key={active.id}
          label={`${title}: ${active.label}`}
          items={active.items}
          newLabel={newLabel}
          emptyLabel={emptyLabel}
        />
      </div>
    </Panel>
  )
}

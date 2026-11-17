import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { Link } from 'react-router'
import type { ScrollState } from '@/components/layout'
import { cn } from '@/lib'

export interface SideNavItem {
  /** Last part of the address, e.g. "faculty" in /academics/departments/commerce/faculty */
  id: string
  label: string
  icon: IconType
}

interface SideNavLayoutProps {
  /** Name of the side menu for screen readers, e.g. "Department sections". */
  label: string
  /** Address of the first item; the other items add their id to it. */
  basePath: string
  items: SideNavItem[]
  activeId: string
  /** Content of the active item. */
  children: ReactNode
}

/**
 * Side buttons on the left and the active section's content on the right. On phones the buttons
 * become a row of pills you can swipe through, above the content.
 */
export function SideNavLayout({ label, basePath, items, activeId, children }: SideNavLayoutProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const keepScroll: ScrollState = { keepScroll: true }

  // Switching sections keeps the scroll position, but if the top of the content is above the window, bring it back into view.
  useEffect(() => {
    const panel = panelRef.current
    if (panel && panel.getBoundingClientRect().top < 0) panel.scrollIntoView({ block: 'start' })
  }, [activeId])

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12">
      {/* min-w-0 lets the row of pills scroll instead of widening the page on phones. */}
      <aside className="min-w-0">
        <nav aria-label={label} className="lg:sticky lg:top-20">
          <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:rounded-2xl lg:border lg:border-line lg:bg-white lg:p-3 lg:shadow-sm">
            {items.map(({ id, label: itemLabel, icon: Icon }, index) => {
              const active = id === activeId
              const href = index === 0 ? basePath : `${basePath}/${id}`

              return (
                <li key={id} className="shrink-0">
                  <Link
                    to={href}
                    state={keepScroll}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex items-center gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium transition-colors lg:whitespace-normal',
                      active
                        ? 'bg-linear-to-r from-primary to-secondary text-white shadow-md'
                        : 'border border-line bg-white text-heading hover:border-primary hover:text-primary lg:border-transparent lg:hover:bg-primary/5',
                    )}
                  >
                    <Icon aria-hidden className="shrink-0 text-lg" />
                    {itemLabel}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      <div ref={panelRef} className="min-w-0 scroll-mt-20">
        {children}
      </div>
    </div>
  )
}

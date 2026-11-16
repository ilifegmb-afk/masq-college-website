import { useId, useState } from 'react'
import { Section, SectionHeading } from '@/components/ui'
import { cn } from '@/lib'
import type { VisionContent } from '@/types/home'

export function VisionSection({ content }: { content: VisionContent }) {
  const baseId = useId()
  const [activeId, setActiveId] = useState(content.tabs[0]?.id)
  const active = content.tabs.find((tab) => tab.id === activeId) ?? content.tabs[0]

  if (!active) return null

  return (
    <Section id="vision">
      <SectionHeading intro={content.intro} align="center" />

      <div className="grid gap-8 lg:grid-cols-12">
        <div
          role="tablist"
          aria-orientation="vertical"
          className="order-2 flex flex-col gap-3 lg:order-1 lg:col-span-4"
        >
          {content.tabs.map((tab) => {
            const selected = tab.id === active.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${baseId}-${tab.id}-tab`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                onClick={() => setActiveId(tab.id)}
                className={cn(
                  'rounded-xl border p-5 text-left transition-colors',
                  selected ? 'border-primary bg-primary/5' : 'border-line hover:border-primary/50',
                )}
              >
                <span className={cn('block text-lg font-semibold', selected ? 'text-primary' : 'text-heading')}>
                  {tab.title}
                </span>
                <span className="mt-1 block text-sm">{tab.summary}</span>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-${active.id}-tab`}
          className="order-1 lg:order-2 lg:col-span-8"
        >
          <img src={active.imageUrl} alt="" loading="lazy" className="aspect-16/10 w-full rounded-2xl object-cover" />
        </div>
      </div>
    </Section>
  )
}

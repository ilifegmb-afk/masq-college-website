import type { ReactNode } from 'react'
import { cn } from '@/lib'
import type { SectionIntro } from '@/types/common'
import { Section } from './Section'
import { SectionHeading } from './SectionHeading'

interface CardGridSectionProps<T extends { id: string }> {
  id?: string
  intro: SectionIntro
  items: T[]
  /** Tailwind grid-column classes, e.g. "sm:grid-cols-2 lg:grid-cols-3". */
  columns: string
  renderItem: (item: T) => ReactNode
  tone?: 'default' | 'muted'
}

/** A heading followed by a responsive grid of cards. */
export function CardGridSection<T extends { id: string }>({
  id,
  intro,
  items,
  columns,
  renderItem,
  tone,
}: CardGridSectionProps<T>) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading intro={intro} />
      <ul className={cn('grid gap-8', columns)}>
        {items.map((item) => (
          <li key={item.id}>{renderItem(item)}</li>
        ))}
      </ul>
    </Section>
  )
}

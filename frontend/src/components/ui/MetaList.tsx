import type { IconType } from 'react-icons'
import { cn } from '@/lib'

export interface MetaItem {
  icon: IconType
  label: string
}

interface MetaListProps {
  items: MetaItem[]
  className?: string
}

/** Inline list of icon + label pairs (lessons, location, date...). */
export function MetaList({ items, className }: MetaListProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-x-5 gap-y-1 text-sm', className)}>
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-1.5">
          <Icon aria-hidden className="text-primary" />
          {label}
        </li>
      ))}
    </ul>
  )
}

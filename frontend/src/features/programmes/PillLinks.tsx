import { Link } from 'react-router'
import type { ScrollState } from '@/components/layout'
import { cn } from '@/lib'

export interface PillLink {
  id: string
  label: string
  to: string
  active: boolean
}

interface PillLinksProps {
  /** Name of the group for screen readers, e.g. "Degree". */
  label: string
  links: PillLink[]
  /** "strong" for the main choice (degree), "subtle" for a filter (category). */
  variant?: 'strong' | 'subtle'
}

/** A row of rounded buttons; the active one is highlighted. Switching keeps the scroll position. */
export function PillLinks({ label, links, variant = 'strong' }: PillLinksProps) {
  const keepScroll: ScrollState = { keepScroll: true }

  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.to}
              state={keepScroll}
              aria-current={link.active ? 'page' : undefined}
              className={cn(
                'inline-flex rounded-full font-medium transition-colors',
                variant === 'strong' ? 'px-5 py-2.5 text-sm' : 'px-4 py-2 text-xs',
                link.active && variant === 'strong' && 'bg-linear-to-r from-primary to-secondary text-white shadow-md',
                link.active && variant === 'subtle' && 'bg-heading text-white',
                !link.active && 'border border-line bg-white text-heading hover:border-primary hover:text-primary',
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

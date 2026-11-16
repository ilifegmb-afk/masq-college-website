import { useState } from 'react'
import type { FocusEvent } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { cn } from '@/lib'
import type { NavItem } from '@/types/navigation'
import { NavBadge } from './NavBadge'

interface DesktopNavProps {
  items: NavItem[]
}

export function DesktopNav({ items }: DesktopNavProps) {
  return (
    // 11 top-level entries only fit in one row from the xl breakpoint (1280px); below it the header shows the menu button.
    <nav aria-label="Main" className="hidden self-stretch xl:block">
      <ul className="flex h-full items-center">
        {items.map((item) => (
          <DesktopNavItem key={item.id} item={item} level={0} />
        ))}
      </ul>
    </nav>
  )
}

interface DesktopNavItemProps {
  item: NavItem
  level: number
  /** Position inside its dropdown, used to stagger the items as the dropdown opens. */
  index?: number
  /** Whether the dropdown this item sits in is open. Top-level items are always shown. */
  parentOpen?: boolean
}

/**
 * Renders one menu entry; entries with children open a dropdown (or a flyout when nested).
 * Dropdowns stay mounted so they can fade and slide both in and out; while closed they are
 * `invisible`, which also keeps their links out of the tab order and away from screen readers.
 */
function DesktopNavItem({ item, level, index = 0, parentOpen = true }: DesktopNavItemProps) {
  const [open, setOpen] = useState(false)
  const children = item.children ?? []
  const hasChildren = children.length > 0
  const isRoot = level === 0

  const handleBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
  }

  const linkClass = isRoot
    ? 'flex items-center gap-1 whitespace-nowrap px-1.5 py-2 text-sm font-medium text-heading transition-colors hover:text-primary'
    : 'flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm text-body transition-colors hover:bg-primary/5 hover:text-primary'

  return (
    <li
      className={cn(
        'relative',
        isRoot && 'flex h-full items-center',
        // Items inside a dropdown fade and slide in one after another.
        !isRoot && 'transition-[opacity,translate] duration-300 ease-smooth motion-reduce:transition-none',
        !isRoot && (parentOpen ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'),
      )}
      style={!isRoot && parentOpen ? { transitionDelay: `${40 + index * 35}ms` } : undefined}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={handleBlur}
    >
      {hasChildren ? (
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((value) => !value)}
          className={linkClass}
        >
          <span>{item.label}</span>
          {isRoot ? (
            <FiChevronDown
              aria-hidden
              className={cn('transition-transform duration-300 ease-smooth motion-reduce:transition-none', open && 'rotate-180')}
            />
          ) : (
            <FiChevronRight aria-hidden />
          )}
        </button>
      ) : (
        <a href={item.href ?? '#'} className={linkClass}>
          <span>{item.label}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </a>
      )}

      {hasChildren && (
        <ul
          className={cn(
            'absolute z-50 min-w-56 rounded-xl border border-line bg-white p-2 shadow-xl',
            'transition-[opacity,translate,visibility] duration-250 ease-smooth motion-reduce:transition-none',
            isRoot ? 'left-0 top-full' : 'left-full top-0 -mt-2',
            open
              ? 'visible translate-x-0 translate-y-0 opacity-100'
              : cn('invisible opacity-0', isRoot ? 'translate-y-2' : '-translate-x-2'),
          )}
        >
          {children.map((child, childIndex) => (
            <DesktopNavItem key={child.id} item={child} level={level + 1} index={childIndex} parentOpen={open} />
          ))}
        </ul>
      )}
    </li>
  )
}

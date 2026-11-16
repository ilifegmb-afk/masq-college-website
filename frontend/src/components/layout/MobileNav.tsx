import { useEffect, useState } from 'react'
import { FiChevronDown, FiX } from 'react-icons/fi'
import { ButtonLink, SocialLinks } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { cn } from '@/lib'
import type { NavItem } from '@/types/navigation'
import { Logo } from './Logo'
import { NavBadge } from './NavBadge'

interface MobileNavProps {
  items: NavItem[]
  open: boolean
  onClose: () => void
}

/**
 * Slide-over menu for screens below the desktop breakpoint. It stays mounted so it can animate both ways:
 * the backdrop fades, the panel slides in from the right and the entries follow one after another.
 * While closed the whole thing is `invisible`, so nothing inside can be focused or read out.
 */
export function MobileNav({ items, open, onClose }: MobileNavProps) {
  const { institute, navigation } = useSite()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  return (
    <div
      className={cn(
        // visibility switches off only after the closing animation has finished
        'fixed inset-0 z-50 transition-[visibility] duration-500 motion-reduce:transition-none xl:hidden',
        open ? 'visible' : 'invisible',
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div
        className={cn(
          'absolute inset-0 bg-heading/50 transition-opacity duration-500 ease-smooth motion-reduce:transition-none',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          'absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-500 ease-smooth motion-reduce:transition-none',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-xl text-heading transition-colors hover:border-primary hover:text-primary"
          >
            <FiX aria-hidden />
          </button>
        </div>

        <p className="mt-4 text-sm">{institute.tagline}</p>

        <nav aria-label="Mobile" className="mt-6">
          <ul>
            {items.map((item, index) => (
              <MobileNavItem key={item.id} item={item} onNavigate={onClose} index={index} menuOpen={open} />
            ))}
          </ul>
        </nav>

        <div className="mt-auto space-y-6 pt-8">
          <ButtonLink href={navigation.cta.href} onClick={onClose} className="w-full">
            {navigation.cta.label}
          </ButtonLink>
          <SocialLinks links={institute.socials} variant="outline" />
        </div>
      </div>
    </div>
  )
}

interface MobileNavItemProps {
  item: NavItem
  onNavigate: () => void
  /** Top-level position, used to stagger the entries as the menu opens. Omitted for nested entries. */
  index?: number
  menuOpen?: boolean
}

function MobileNavItem({ item, onNavigate, index, menuOpen }: MobileNavItemProps) {
  const [expanded, setExpanded] = useState(false)
  const children = item.children ?? []
  const staggered = index !== undefined

  const itemClass = cn(
    'border-b border-line',
    staggered && 'transition-[opacity,translate] duration-500 ease-smooth motion-reduce:transition-none',
    staggered && (menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'),
  )
  const itemStyle = staggered && menuOpen ? { transitionDelay: `${150 + index * 35}ms` } : undefined
  const rowClass =
    'flex w-full items-center justify-between py-3 text-left font-medium text-heading transition-colors hover:text-primary'

  if (children.length === 0) {
    return (
      <li className={itemClass} style={itemStyle}>
        <a href={item.href ?? '#'} onClick={onNavigate} className={rowClass}>
          <span>{item.label}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </a>
      </li>
    )
  }

  return (
    <li className={itemClass} style={itemStyle}>
      <button type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)} className={rowClass}>
        <span>{item.label}</span>
        <FiChevronDown
          aria-hidden
          className={cn('transition-transform duration-300 ease-smooth motion-reduce:transition-none', expanded && 'rotate-180')}
        />
      </button>

      {/* Animating grid rows from 0fr to 1fr opens the sub-menu to its natural height. */}
      <div
        className={cn(
          'grid transition-[grid-template-rows,visibility] duration-400 ease-smooth motion-reduce:transition-none',
          expanded ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="mb-2 ml-2 border-l border-line pl-4">
            {children.map((child) => (
              <MobileNavItem key={child.id} item={child} onNavigate={onNavigate} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

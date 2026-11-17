import type { ReactNode } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { cn } from '@/lib'
import { AppLink } from './AppLink'

interface ArrowLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function ArrowLink({ href, children, className }: ArrowLinkProps) {
  return (
    <AppLink
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary',
        className,
      )}
    >
      {children}
      <FiArrowRight aria-hidden className="transition-transform group-hover:translate-x-1" />
    </AppLink>
  )
}

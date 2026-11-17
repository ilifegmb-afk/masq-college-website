import type { ReactNode } from 'react'
import { cn } from '@/lib'

interface FullPageMessageProps {
  title: string
  description?: string
  /** "screen" fills the window (before the site loads); "section" fills the space between header and footer. */
  fill?: 'screen' | 'section'
  /** Optional action, e.g. a link back home. */
  children?: ReactNode
}

/** Centered message for loading, error and not-found states. */
export function FullPageMessage({ title, description, fill = 'screen', children }: FullPageMessageProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2 px-4 text-center',
        fill === 'screen' ? 'min-h-screen' : 'min-h-[60vh] py-16',
      )}
    >
      <p className="text-xl font-semibold text-heading">{title}</p>
      {description && <p>{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

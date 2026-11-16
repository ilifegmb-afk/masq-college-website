import { cn } from '@/lib'
import type { SectionIntro } from '@/types/common'
import { ArrowLink } from './ArrowLink'

interface SectionHeadingProps {
  intro: SectionIntro
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ intro, align = 'left', className }: SectionHeadingProps) {
  const { title, description, action } = intro

  if (align === 'center') {
    return (
      <div className={cn('mx-auto mb-12 max-w-2xl text-center', className)}>
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        {description && <p className="mt-4">{description}</p>}
      </div>
    )
  }

  return (
    <div className={cn('mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between', className)}>
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl">{title}</h2>
        {description && <p className="mt-4">{description}</p>}
      </div>
      {action && <ArrowLink href={action.href}>{action.label}</ArrowLink>}
    </div>
  )
}

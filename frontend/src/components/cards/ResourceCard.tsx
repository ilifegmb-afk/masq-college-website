import { FiExternalLink } from 'react-icons/fi'
import { cn, eLearningTypes } from '@/lib'
import type { ELearningResource } from '@/types/academics'

/** An online resource (course, video lectures, digital library, e-journals...) that opens in a new tab. */
export function ResourceCard({ resource }: { resource: ELearningResource }) {
  const { label, icon: Icon, className } = eLearningTypes[resource.type]

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-primary hover:shadow-lg"
    >
      <span className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl', className)}>
        <Icon aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">{label}</span>
        <span className="mt-0.5 flex items-center gap-2 text-base font-semibold text-heading transition-colors group-hover:text-primary">
          {resource.title}
          <FiExternalLink aria-hidden className="shrink-0 text-sm" />
        </span>
        <span className="mt-1 block text-sm">{resource.description}</span>
      </span>
    </a>
  )
}

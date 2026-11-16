import { useFormatters } from '@/hooks'
import { attachmentTypes, cn } from '@/lib'
import type { Attachment } from '@/types/common'

/** Download links for a content item's attached files: a coloured type icon, the name, and the type and size. */
export function AttachmentList({ attachments }: { attachments: Attachment[] }) {
  const { fileSize } = useFormatters()

  if (attachments.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-2">
      {attachments.map(({ id, name, url, type, sizeBytes }) => {
        const { label, icon: Icon, className } = attachmentTypes[type]
        const details = [label, sizeBytes ? fileSize(sizeBytes) : null].filter(Boolean).join(' · ')

        return (
          <li key={id} className="max-w-full">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex max-w-full items-center gap-2.5 rounded-lg border border-line bg-white py-1.5 pl-1.5 pr-3.5 transition-colors hover:border-primary hover:shadow-sm"
            >
              <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-lg', className)}>
                <Icon aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block truncate text-xs font-medium text-heading transition-colors group-hover:text-primary">
                  {name}
                </span>
                <span className="block text-[0.7rem] leading-tight text-body">{details}</span>
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

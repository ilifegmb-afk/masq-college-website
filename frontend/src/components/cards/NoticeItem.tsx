import { AttachmentList } from '@/components/ui'
import { useFormatters } from '@/hooks'
import type { Notice } from '@/types/home'

interface NoticeItemProps {
  notice: Notice
  /** Text of the badge shown on new notices. */
  newLabel: string
}

/** One row of the announcements / noticeboard lists: calendar date, title and attached files. */
export function NoticeItem({ notice, newLabel }: NoticeItemProps) {
  const { date, dateParts } = useFormatters()
  const { day, month } = dateParts(notice.date)

  return (
    <div className="flex gap-4 border-b border-line px-6 py-4 transition-colors hover:bg-surface/60">
      <time
        dateTime={notice.date}
        className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 text-primary"
      >
        <span className="sr-only">{date(notice.date)}</span>
        <span aria-hidden className="text-xl font-bold leading-none">
          {day}
        </span>
        <span aria-hidden className="mt-1 text-[0.7rem] font-semibold uppercase leading-none">
          {month}
        </span>
      </time>

      <div className="min-w-0 flex-1">
        <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-medium leading-snug">
          <span>
            {notice.href ? (
              <a href={notice.href} className="transition-colors hover:text-primary">
                {notice.title}
              </a>
            ) : (
              notice.title
            )}
          </span>
          {notice.isNew && (
            <span className="rounded-full bg-rose-600 px-2 py-0.5 text-[0.65rem] font-semibold uppercase leading-none tracking-wide text-white">
              {newLabel}
            </span>
          )}
        </h3>

        {notice.attachments && (
          <div className="mt-2.5">
            <AttachmentList attachments={notice.attachments} />
          </div>
        )}
      </div>
    </div>
  )
}

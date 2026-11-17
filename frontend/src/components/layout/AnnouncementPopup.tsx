import { useEffect, useState } from 'react'
import { FiBell, FiExternalLink, FiX } from 'react-icons/fi'
import { Button, ButtonLink, Modal } from '@/components/ui'
import type { AnnouncementPopupContent } from '@/types/announcement'

/**
 * Shows the latest announcement a few seconds after the website opens (`delaySeconds`). It closes by
 * itself after `autoCloseSeconds` (a bar at the bottom shows the time left), or straight away with ✕,
 * Close, Esc or a click outside.
 */
export function AnnouncementPopup({ announcement }: { announcement: AnnouncementPopupContent }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const { delaySeconds, autoCloseSeconds: seconds } = announcement

  // Appear once, `delaySeconds` after the page opens.
  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), delaySeconds * 1000)
    return () => window.clearTimeout(timer)
  }, [delaySeconds])

  // Once open, close by itself after `seconds`.
  useEffect(() => {
    if (!open) return
    const timer = window.setTimeout(() => setOpen(false), seconds * 1000)
    return () => window.clearTimeout(timer)
  }, [open, seconds])

  const actionIsExternal = announcement.action?.href.startsWith('http') ?? false

  return (
    <Modal open={open} onClose={close} labelledBy="announcement-title" size="lg">
      <div className="relative">
        {announcement.imageUrl && (
          <img src={announcement.imageUrl} alt="" className="aspect-[2/1] w-full object-cover" />
        )}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-heading shadow-md transition-colors hover:text-primary"
        >
          <FiX aria-hidden />
        </button>
      </div>

      <div className="p-6 sm:p-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
          <FiBell aria-hidden />
          New announcement
        </span>
        <h2 id="announcement-title" className="mt-3 text-2xl">
          {announcement.title}
        </h2>
        <p className="mt-2">{announcement.message}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {announcement.action && (
            <ButtonLink
              href={announcement.action.href}
              target={actionIsExternal ? '_blank' : undefined}
              rel={actionIsExternal ? 'noopener noreferrer' : undefined}
              onClick={close}
            >
              {announcement.action.label}
              {actionIsExternal && <FiExternalLink aria-hidden />}
            </ButtonLink>
          )}
          <Button variant="outline" onClick={close}>
            Close
          </Button>
        </div>
      </div>

      {/* Time left before the popup closes by itself. Rendered only while open, so the countdown starts when the popup appears. */}
      {open && (
        <div aria-hidden className="h-1 bg-line">
          <div
            className="h-full origin-left animate-countdown bg-linear-to-r from-primary to-secondary"
            style={{ animationDuration: `${seconds}s` }}
          />
        </div>
      )}
    </Modal>
  )
}

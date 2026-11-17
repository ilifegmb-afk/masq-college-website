import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib'

const sizes = {
  md: 'max-w-md',
  lg: 'max-w-lg',
}

interface ModalProps {
  open: boolean
  /** Called when the popup asks to close: Esc, a click outside it, or the caller's own close button. */
  onClose: () => void
  /** id of the heading that names the popup, for screen readers. */
  labelledBy: string
  size?: keyof typeof sizes
  children: ReactNode
}

/**
 * A centred popup over a dimmed page. It is a native <dialog>, so focus stays inside while it is
 * open and returns to where it was when it closes. It fades and rises in as it opens, and fades and
 * sinks away as it closes (no animation for visitors who prefer reduced motion).
 */
export function Modal({ open, onClose, labelledBy, size = 'md', children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Open or close the native dialog whenever `open` changes.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open) {
      delete dialog.dataset.closing
      if (!dialog.open) dialog.showModal()
      return
    }

    if (!dialog.open) return

    // Closing: `data-closing` starts the closing animation, and the dialog really closes when it ends.
    // With reduced motion there is no animation, so it closes straight away.
    let stillClosing = true
    dialog.dataset.closing = ''
    Promise.all(dialog.getAnimations().map((animation) => animation.finished))
      .then(() => {
        if (stillClosing) dialog.close()
      })
      .catch(() => {}) // The animation was cut short because the popup opened again.

    return () => {
      stillClosing = false
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      // Esc: hand the closing to the caller, so the closing animation plays.
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      // Fired once the dialog has closed: by close() above, or straight away by the browser (Esc
      // before the visitor has clicked anything on the page skips the animation).
      onClose={(event) => {
        delete event.currentTarget.dataset.closing
        onClose()
      }}
      // A click on the dialog element itself, not its content, means the dark backdrop was clicked.
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className={cn(
        'm-auto w-[calc(100%-2rem)] overflow-hidden rounded-2xl bg-white p-0 text-body shadow-2xl',
        'backdrop:bg-heading/60 backdrop:backdrop-blur-sm',
        // The opening animation plays each time the dialog appears; data-closing swaps in the closing one.
        'motion-safe:animate-popup-in motion-safe:backdrop:animate-backdrop-in',
        'motion-safe:data-closing:animate-popup-out motion-safe:data-closing:backdrop:animate-backdrop-out',
        sizes[size],
      )}
    >
      {children}
    </dialog>
  )
}

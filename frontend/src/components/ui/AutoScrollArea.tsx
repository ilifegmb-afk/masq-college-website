import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { FiPause, FiPlay } from 'react-icons/fi'
import { useAutoScroll } from '@/hooks'
import { cn } from '@/lib'

interface AutoScrollAreaProps {
  /** Accessible name of the scrolling region. */
  label: string
  /** Set the height here (e.g. "h-96"); the content scrolls when it is taller. */
  className?: string
  children: ReactNode
}

/**
 * A fixed-height area whose content scrolls upward by itself, in an endless loop. It holds still
 * while the pointer is over it or something inside has focus, can be paused with the button, and
 * stays scrollable by hand and by keyboard.
 */
export function AutoScrollArea({ label, className, children }: AutoScrollAreaProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [stopped, setStopped] = useState(false)

  const looping = useAutoScroll(viewportRef, contentRef, !(hovered || focused || stopped))

  // The second copy only exists to make the loop seamless: keep it out of the keyboard tab order.
  useEffect(() => {
    copyRef.current?.querySelectorAll('a, button').forEach((element) => element.setAttribute('tabindex', '-1'))
  })

  return (
    <div className={cn('relative', className)}>
      <div
        ref={viewportRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
        }}
        className="h-full overflow-y-auto [mask-image:linear-gradient(to_bottom,transparent,black_1rem,black_calc(100%_-_1rem),transparent)] scrollbar-thin focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
      >
        <div ref={contentRef}>{children}</div>
        {looping && (
          <div ref={copyRef} aria-hidden>
            {children}
          </div>
        )}
      </div>

      {looping && (
        <button
          type="button"
          onClick={() => setStopped((value) => !value)}
          aria-label={stopped ? 'Resume auto-scroll' : 'Pause auto-scroll'}
          className="absolute bottom-3 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-sm text-heading shadow-md transition-colors hover:border-primary hover:text-primary"
        >
          {stopped ? <FiPlay aria-hidden /> : <FiPause aria-hidden />}
        </button>
      )}
    </div>
  )
}

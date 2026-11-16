import { useEffect, useRef } from 'react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib'

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  /** Reverse the animation direction. */
  reverse?: boolean
  /** Pause the animation while hovered or while something inside has keyboard focus. */
  pauseOnHover?: boolean
  /** Hold the animation still (e.g. from a pause button). */
  paused?: boolean
  children: ReactNode
  /** Scroll vertically instead of horizontally. */
  vertical?: boolean
  /** How many times the content is repeated. Enough copies must be repeated to fill the container. */
  repeat?: number
  /**
   * What horizontal content looks like when the user prefers reduced motion: every item wrapped onto
   * as many lines as needed ("wrap"), or one line that can be scrolled by hand ("scroll").
   */
  reducedMotion?: 'wrap' | 'scroll'
}

/**
 * An endless scrolling strip. From Magic UI: https://magicui.design/docs/components/marquee
 *
 * Speed and spacing are CSS variables, set through `style`: `--duration` (default 40s) and `--gap` (default 1rem).
 * The keyframes and animation tokens live in `src/index.css`.
 *
 * Adapted for this project: repeated copies are hidden from screen readers and their links are taken out of the
 * keyboard tab order (they stay clickable), it can be paused, and it stands still for reduced-motion users.
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  paused = false,
  children,
  vertical = false,
  repeat = 4,
  reducedMotion = 'wrap',
  ...props
}: MarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    rootRef.current
      ?.querySelectorAll(':scope > [aria-hidden] a, :scope > [aria-hidden] button')
      .forEach((element) => element.setAttribute('tabindex', '-1'))
  })

  const stillWrapped = !vertical && reducedMotion === 'wrap'

  return (
    <div
      {...props}
      ref={rootRef}
      className={cn(
        'group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]',
        vertical ? 'flex-col' : 'flex-row',
        !vertical && reducedMotion === 'scroll' && 'motion-reduce:overflow-x-auto',
        className,
      )}
    >
      {Array.from({ length: repeat }, (_, index) => (
        <div
          key={index}
          aria-hidden={index > 0 || undefined}
          className={cn(
            'flex shrink-0 justify-around gap-(--gap) motion-reduce:animate-none',
            vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
            stillWrapped && 'motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center',
            pauseOnHover && 'group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]',
            paused && '[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]',
            index > 0 && 'motion-reduce:hidden',
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

import { useEffect, useState, useSyncExternalStore } from 'react'
import type { RefObject } from 'react'

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches

/**
 * Makes a tall list scroll upward by itself, forever, like a news ticker.
 *
 * `contentRef` is the list inside the scrolling `viewportRef` element. The caller renders a second
 * copy of the list straight after it whenever this hook returns `true`; when the scroll position
 * reaches the end of the first copy it wraps back, so the loop has no visible jump. The viewport
 * stays scrollable by hand. Pass `enabled = false` to hold it still (e.g. while hovered).
 *
 * Returns `false` (and does nothing) when the list fits without scrolling or the user prefers
 * reduced motion.
 */
export function useAutoScroll(
  viewportRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
  enabled: boolean,
  pixelsPerSecond = 36,
): boolean {
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, prefersReducedMotion, () => false)
  const [overflowing, setOverflowing] = useState(false)
  const looping = overflowing && !reducedMotion

  // Does the list need to scroll at all?
  useEffect(() => {
    const viewport = viewportRef.current
    const content = contentRef.current
    if (!viewport || !content) return

    const measure = () => setOverflowing(content.offsetHeight > viewport.clientHeight)
    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    observer.observe(content)

    return () => observer.disconnect()
  }, [viewportRef, contentRef])

  // Move it.
  useEffect(() => {
    const viewport = viewportRef.current
    const content = contentRef.current
    if (!looping || !enabled || !viewport || !content) return

    let frame = 0
    let lastTime = 0
    // Kept as a float: browsers round scrollTop, which would swallow sub-pixel steps.
    let position = viewport.scrollTop

    const tick = (now: number) => {
      const elapsed = lastTime ? Math.min(now - lastTime, 100) : 0
      lastTime = now

      // The user scrolled by hand: carry on from where they left it.
      if (Math.abs(viewport.scrollTop - position) > 1.5) position = viewport.scrollTop

      position += (pixelsPerSecond * elapsed) / 1000
      const loopHeight = content.offsetHeight
      if (position >= loopHeight) position -= loopHeight
      viewport.scrollTop = position

      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [viewportRef, contentRef, looping, enabled, pixelsPerSecond])

  return looping
}

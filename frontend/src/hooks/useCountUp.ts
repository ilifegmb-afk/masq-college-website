import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Counts from 0 up to `target` once `start` becomes true, slowing down near the end.
 * Visitors who prefer reduced motion get the final number straight away.
 */
export function useCountUp(target: number, start: boolean, durationMs = 1500): number {
  const reducedMotion = usePrefersReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start || reducedMotion) return

    let frame = 0
    const startedAt = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / durationMs, 1)
      const eased = 1 - (1 - progress) ** 3 // fast at first, gentle at the end
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target, durationMs, reducedMotion])

  return reducedMotion ? target : value
}

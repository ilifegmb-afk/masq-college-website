import { useEffect, useRef } from 'react'

/**
 * Calls `onTick` after `delay` ms. The timer restarts whenever `resetKey`
 * changes (e.g. the current slide index), so manual navigation delays the next tick.
 */
export function useAutoplay(onTick: () => void, delay: number, enabled: boolean, resetKey: unknown) {
  const tickRef = useRef(onTick)

  useEffect(() => {
    tickRef.current = onTick
  }, [onTick])

  useEffect(() => {
    if (!enabled) return
    const id = window.setTimeout(() => tickRef.current(), delay)
    return () => window.clearTimeout(id)
  }, [delay, enabled, resetKey])
}

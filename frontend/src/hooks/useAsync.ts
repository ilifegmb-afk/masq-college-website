import { useEffect, useState } from 'react'

export interface AsyncState<T> {
  data: T | null
  error: Error | null
  loading: boolean
}

interface Settled<T> {
  /** The loader this result came from, so a stale result is never shown for a new loader. */
  source: () => Promise<T>
  data: T | null
  error: Error | null
}

/**
 * Runs `load` and tracks its result. Pass a stable function (module-level, or wrapped in
 * useCallback); when it changes, the hook reports loading again and runs the new one.
 */
export function useAsync<T>(load: () => Promise<T>): AsyncState<T> {
  const [settled, setSettled] = useState<Settled<T> | null>(null)

  useEffect(() => {
    let cancelled = false

    load()
      .then((data) => {
        if (!cancelled) setSettled({ source: load, data, error: null })
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setSettled({ source: load, data: null, error: err instanceof Error ? err : new Error(String(err)) })
        }
      })

    return () => {
      cancelled = true
    }
  }, [load])

  const current = settled?.source === load ? settled : null
  return { data: current?.data ?? null, error: current?.error ?? null, loading: !current }
}

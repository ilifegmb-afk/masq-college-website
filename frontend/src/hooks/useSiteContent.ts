import { useEffect, useState } from 'react'
import { getSiteContent } from '@/services/siteService'
import type { SiteContent } from '@/types/site'

interface SiteContentState {
  site: SiteContent | null
  error: Error | null
}

/** Loads the institute's site content once on mount. */
export function useSiteContent(): SiteContentState {
  const [state, setState] = useState<SiteContentState>({ site: null, error: null })

  useEffect(() => {
    let cancelled = false

    getSiteContent()
      .then((site) => {
        if (!cancelled) setState({ site, error: null })
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setState({ site: null, error: err instanceof Error ? err : new Error(String(err)) })
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}

import { getSiteContent } from '@/services/siteService'
import type { SiteContent } from '@/types/site'
import { useAsync } from './useAsync'

interface SiteContentState {
  site: SiteContent | null
  error: Error | null
}

/** Loads the institute's site content once on mount. */
export function useSiteContent(): SiteContentState {
  const { data, error } = useAsync(getSiteContent)
  return { site: data, error }
}

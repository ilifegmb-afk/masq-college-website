import { siteContent } from '@/data'
import type { SiteContent } from '@/types/site'

/**
 * The single seam between the UI and the backend.
 * Today it returns the local mock; later replace the body with a fetch, e.g.
 *   const res = await fetch(`${API_URL}/institutes/${slug}/site`)
 *   return (await res.json()) as SiteContent
 */
export async function getSiteContent(): Promise<SiteContent> {
  return siteContent
}

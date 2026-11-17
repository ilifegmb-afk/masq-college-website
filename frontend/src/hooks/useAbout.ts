import { getAbout } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads the About text, leadership and faculty directory. */
export function useAbout() {
  return useAsync(getAbout)
}

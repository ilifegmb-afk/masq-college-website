import { getResearch } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads the Research page: centres, dean, guides, outputs, gallery and certificates. */
export function useResearch() {
  return useAsync(getResearch)
}

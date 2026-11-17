import { getLibrary } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads the library text, staff, book counts, journals and e-resources. */
export function useLibrary() {
  return useAsync(getLibrary)
}

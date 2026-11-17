import { getAdmissions } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads the admission text, documents, courses and fees. */
export function useAdmissions() {
  return useAsync(getAdmissions)
}

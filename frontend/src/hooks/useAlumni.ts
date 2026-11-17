import { getAlumni } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads the Alumni page: association, office bearers, notable alumni, chapters and well wishers. */
export function useAlumni() {
  return useAsync(getAlumni)
}

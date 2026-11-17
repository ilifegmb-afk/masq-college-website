import { getPlacement } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads the Placement page: general details, office, upcoming drives, eligibility and recruiters. */
export function usePlacement() {
  return useAsync(getPlacement)
}

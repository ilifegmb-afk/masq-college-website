import { getIqac } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads the IQAC, NAAC, NIRF, AISHE and AQAR content. */
export function useIqac() {
  return useAsync(getIqac)
}

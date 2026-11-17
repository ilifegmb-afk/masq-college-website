import { useCallback } from 'react'
import { getCoursesByDegree } from '@/services/siteService'
import type { DegreeId } from '@/types/academics'
import { useAsync } from './useAsync'

/** Loads the departments that offer courses at one degree (UG, PG or Ph.D.). */
export function useCoursesByDegree(degreeId: DegreeId) {
  const load = useCallback(() => getCoursesByDegree(degreeId), [degreeId])
  return useAsync(load)
}

import { getStudentCorner } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads the Student Corner text, documents and bus routes. */
export function useStudentCorner() {
  return useAsync(getStudentCorner)
}

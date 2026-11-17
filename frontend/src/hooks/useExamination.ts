import { getExamination } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads the examination text, exam timetable and published results. */
export function useExamination() {
  return useAsync(getExamination)
}

import { useCallback } from 'react'
import { getDepartment } from '@/services/siteService'
import { useAsync } from './useAsync'

/** Loads one department (with its faculty and programmes) by slug. */
export function useDepartment(slug: string) {
  const load = useCallback(() => getDepartment(slug), [slug])
  return useAsync(load)
}

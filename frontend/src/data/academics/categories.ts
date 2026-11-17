import type { DepartmentCategory } from '@/types/academics'

// How departments are funded. Every department belongs to one of these.
export const departmentCategories: DepartmentCategory[] = [
  { id: 'aided', name: 'Aided' },
  { id: 'self-finance', name: 'Self-Finance' },
]

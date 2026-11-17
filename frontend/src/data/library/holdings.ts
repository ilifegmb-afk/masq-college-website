import type { BookHolding } from '@/types/library'

// Placeholder book counts - the backend will supply the real ones.
// departmentId points to src/data/academics/departments.ts.
export const bookHoldings: BookHolding[] = [
  { departmentId: 'dept-commerce', titles: 6240, volumes: 18500 },
  { departmentId: 'dept-commerce-sf', titles: 2150, volumes: 5400 },
  { departmentId: 'dept-computer-science', titles: 3870, volumes: 9800 },
  { departmentId: 'dept-computer-applications', titles: 2960, volumes: 7350 },
  { departmentId: 'dept-business-administration', titles: 2480, volumes: 6120 },
  { departmentId: 'dept-chemistry', titles: 4120, volumes: 11300 },
  { departmentId: 'dept-hindi', titles: 3350, volumes: 7900 },
]

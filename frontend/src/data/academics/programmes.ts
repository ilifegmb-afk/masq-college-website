import type { Programme } from '@/types/academics'

// Placeholder programmes - the backend will supply the college's real list.
// degreeId points to src/data/academics/degrees.ts.
export const programmes: Programme[] = [
  // UG
  { id: 'ba', code: 'B.A.', name: 'Bachelor of Arts', degreeId: 'ug' },
  { id: 'bsc', code: 'B.Sc.', name: 'Bachelor of Science', degreeId: 'ug' },
  { id: 'bcom', code: 'B.Com.', name: 'Bachelor of Commerce', degreeId: 'ug' },
  { id: 'bba', code: 'BBA', name: 'Bachelor of Business Administration', degreeId: 'ug' },
  { id: 'bca', code: 'BCA', name: 'Bachelor of Computer Applications', degreeId: 'ug' },

  // PG
  { id: 'ma', code: 'M.A.', name: 'Master of Arts', degreeId: 'pg' },
  { id: 'msc', code: 'M.Sc.', name: 'Master of Science', degreeId: 'pg' },
  { id: 'mcom', code: 'M.Com.', name: 'Master of Commerce', degreeId: 'pg' },
  { id: 'mba', code: 'MBA', name: 'Master of Business Administration', degreeId: 'pg' },
  { id: 'mca', code: 'MCA', name: 'Master of Computer Applications', degreeId: 'pg' },

  // Ph.D.
  { id: 'phd', code: 'Ph.D.', name: 'Doctor of Philosophy', degreeId: 'phd' },
]

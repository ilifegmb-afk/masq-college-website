import type { StaffMember } from '@/types/academics'

// Placeholder library staff with made-up names - the backend will supply the real list.
export const libraryStaff: StaffMember[] = [
  {
    id: 'lib-1',
    name: 'Dr. K. Rajendran',
    designation: 'Librarian',
    qualification: 'M.L.I.Sc., M.Phil., Ph.D.',
    specialization: 'Library Automation',
    experienceYears: 21,
    email: 'librarian@masqcollege.example',
    isHead: true,
  },
  {
    id: 'lib-2',
    name: 'Mrs. S. Jameela Banu',
    designation: 'Assistant Librarian',
    qualification: 'M.L.I.Sc., NET',
    specialization: 'Digital Libraries',
    experienceYears: 9,
    email: 'jameela.banu@masqcollege.example',
  },
  {
    id: 'lib-3',
    name: 'Mr. M. Prabhu',
    designation: 'Library Assistant',
    qualification: 'B.L.I.Sc.',
    specialization: 'Circulation',
    experienceYears: 6,
    email: 'prabhu@masqcollege.example',
  },
  {
    id: 'lib-4',
    name: 'Ms. R. Kavitha',
    designation: 'Library Assistant',
    qualification: 'M.L.I.Sc.',
    specialization: 'Cataloguing',
    experienceYears: 4,
    email: 'kavitha@masqcollege.example',
  },
]

import type { Leader } from '@/types/about'
import type { StaffMember } from '@/types/academics'
import type { PlacementDrive } from '@/types/placement'

// Placeholder placement office with made-up names - the backend will supply the real one.
export const placementHead: Leader = {
  id: 'placement-officer',
  name: 'Mr. N. Rajkumar',
  role: 'Placement Officer',
  qualification: 'M.B.A., M.Phil.',
  message: [
    'Our goal is simple: every student who wants a job should leave the college with a good offer, and every student who wants to study further should have a clear plan.',
    'We start preparing students from the second year, invite companies of every size to the campus, and stay with each student until the offer letter arrives. I invite recruiters to partner with us and meet our talented graduates.',
  ],
}

export const placementTeam: StaffMember[] = [
  {
    id: 'placement-anitha',
    name: 'Ms. R. Anitha',
    designation: 'Placement Coordinator - Commerce & Management',
    qualification: 'M.B.A., NET',
    specialization: 'Company relations',
    experienceYears: 7,
    email: 'anitha@masqcollege.example',
  },
  {
    id: 'placement-ganesh',
    name: 'Mr. V. Ganesh Babu',
    designation: 'Placement Coordinator - Computing',
    qualification: 'M.C.A., M.Phil.',
    specialization: 'Technical training',
    experienceYears: 8,
    email: 'ganesh.babu@masqcollege.example',
  },
  {
    id: 'placement-divya',
    name: 'Ms. P. Divya Bharathi',
    designation: 'Placement Coordinator - Aptitude Training',
    qualification: 'M.Com., NET',
    specialization: 'Aptitude and reasoning',
    experienceYears: 5,
    email: 'divya.bharathi@masqcollege.example',
  },
  {
    id: 'placement-arul',
    name: 'Mr. S. Arul Doss',
    designation: 'Placement Assistant',
    qualification: 'B.Com.',
    specialization: 'Drive coordination and records',
    experienceYears: 6,
    email: 'placement@masqcollege.example',
  },
]

// Upcoming drives with made-up company names; dates, roles and salaries are examples.
export const placementDrives: PlacementDrive[] = [
  {
    id: 'zentrix-2026-11',
    company: 'Zentrix Software',
    role: 'Trainee Software Engineer',
    date: '2026-11-24',
    eligibleCourses: 'BCA, B.Sc. Computer Science, MCA, M.Sc. Computer Science',
    salary: '₹4.2 LPA',
    venue: 'Seminar Hall, Computer Applications Block',
    registerUrl: 'https://portal.masqcollege.example/placement/zentrix',
  },
  {
    id: 'kaveri-2026-11',
    company: 'Kaveri Finance Ltd',
    role: 'Relationship Executive',
    date: '2026-11-28',
    eligibleCourses: 'B.Com., BBA, M.Com., MBA',
    salary: '₹3.6 LPA',
    venue: 'Placement Cell',
    registerUrl: 'https://portal.masqcollege.example/placement/kaveri',
  },
  {
    id: 'navya-2026-12',
    company: 'Navya Pharma Labs',
    role: 'Quality Control Chemist',
    date: '2026-12-03',
    eligibleCourses: 'B.Sc. Chemistry, M.Sc. Chemistry',
    salary: '₹3.2 LPA',
    venue: 'Chemistry Seminar Hall',
    registerUrl: 'https://portal.masqcollege.example/placement/navya',
  },
  {
    id: 'bluepeak-2026-12',
    company: 'Bluepeak Analytics',
    role: 'Data Analyst Trainee',
    date: '2026-12-08',
    eligibleCourses: 'Any degree with Mathematics or Statistics',
    salary: '₹4.8 LPA',
    venue: 'Online (virtual drive)',
    registerUrl: 'https://portal.masqcollege.example/placement/bluepeak',
  },
]

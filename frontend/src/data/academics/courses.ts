import type { Course } from '@/types/academics'

// Placeholder courses - the backend will supply the real ones.
// A course is one programme (programmes.ts) taught by one department (departments.ts).
export const courses: Course[] = [
  // Commerce (Aided)
  {
    id: 'bcom-general',
    name: 'B.Com. (General)',
    programmeId: 'bcom',
    departmentId: 'dept-commerce',
    durationYears: 3,
    intake: 120,
    eligibility: 'Pass in Higher Secondary (10+2) in any stream, with Commerce or Accountancy preferred.',
  },
  {
    id: 'mcom',
    name: 'M.Com.',
    programmeId: 'mcom',
    departmentId: 'dept-commerce',
    durationYears: 2,
    intake: 40,
    eligibility: 'B.Com., BBA or an equivalent degree with at least 50% marks.',
  },
  {
    id: 'phd-commerce',
    name: 'Ph.D. in Commerce',
    programmeId: 'phd',
    departmentId: 'dept-commerce',
    durationYears: 3,
    intake: 8,
    eligibility: 'M.Com. with at least 55% marks and a pass in the university entrance test or UGC NET.',
  },

  // Commerce (Self-Finance)
  {
    id: 'bcom-ca',
    name: 'B.Com. (Computer Applications)',
    programmeId: 'bcom',
    departmentId: 'dept-commerce-sf',
    durationYears: 3,
    intake: 60,
    eligibility: 'Pass in Higher Secondary (10+2) with Commerce, Accountancy or Computer Science.',
  },
  {
    id: 'bcom-pa',
    name: 'B.Com. (Professional Accounting)',
    programmeId: 'bcom',
    departmentId: 'dept-commerce-sf',
    durationYears: 3,
    intake: 60,
    eligibility: 'Pass in Higher Secondary (10+2) with Commerce or Accountancy.',
  },

  // Computer Science (Self-Finance)
  {
    id: 'bsc-cs',
    name: 'B.Sc. Computer Science',
    programmeId: 'bsc',
    departmentId: 'dept-computer-science',
    durationYears: 3,
    intake: 60,
    eligibility: 'Pass in Higher Secondary (10+2) with Mathematics.',
  },
  {
    id: 'msc-cs',
    name: 'M.Sc. Computer Science',
    programmeId: 'msc',
    departmentId: 'dept-computer-science',
    durationYears: 2,
    intake: 30,
    eligibility: 'B.Sc. Computer Science, BCA or an equivalent degree with at least 50% marks.',
  },

  // Computer Applications (Self-Finance)
  {
    id: 'bca',
    name: 'BCA',
    programmeId: 'bca',
    departmentId: 'dept-computer-applications',
    durationYears: 3,
    intake: 60,
    eligibility: 'Pass in Higher Secondary (10+2) in any stream, with Mathematics or Computer Science preferred.',
  },
  {
    id: 'mca',
    name: 'MCA',
    programmeId: 'mca',
    departmentId: 'dept-computer-applications',
    durationYears: 2,
    intake: 30,
    eligibility: 'Any degree with Mathematics at 10+2 or degree level, with at least 50% marks.',
  },

  // Business Administration (Self-Finance)
  {
    id: 'bba',
    name: 'BBA',
    programmeId: 'bba',
    departmentId: 'dept-business-administration',
    durationYears: 3,
    intake: 60,
    eligibility: 'Pass in Higher Secondary (10+2) in any stream.',
  },
  {
    id: 'mba',
    name: 'MBA',
    programmeId: 'mba',
    departmentId: 'dept-business-administration',
    durationYears: 2,
    intake: 60,
    eligibility: 'Any degree with at least 50% marks and a valid TANCET, CAT or MAT score.',
  },

  // Chemistry (Aided)
  {
    id: 'bsc-chemistry',
    name: 'B.Sc. Chemistry',
    programmeId: 'bsc',
    departmentId: 'dept-chemistry',
    durationYears: 3,
    intake: 50,
    eligibility: 'Pass in Higher Secondary (10+2) with Physics, Chemistry and Mathematics or Biology.',
  },
  {
    id: 'msc-chemistry',
    name: 'M.Sc. Chemistry',
    programmeId: 'msc',
    departmentId: 'dept-chemistry',
    durationYears: 2,
    intake: 24,
    eligibility: 'B.Sc. Chemistry with at least 50% marks.',
  },
  {
    id: 'phd-chemistry',
    name: 'Ph.D. in Chemistry',
    programmeId: 'phd',
    departmentId: 'dept-chemistry',
    durationYears: 3,
    intake: 6,
    eligibility: 'M.Sc. Chemistry with at least 55% marks and a pass in the university entrance test or UGC NET/CSIR.',
  },

  // Hindi (Aided)
  {
    id: 'ba-hindi',
    name: 'B.A. Hindi',
    programmeId: 'ba',
    departmentId: 'dept-hindi',
    durationYears: 3,
    intake: 40,
    eligibility: 'Pass in Higher Secondary (10+2) with Hindi as a language.',
  },
  {
    id: 'ma-hindi',
    name: 'M.A. Hindi',
    programmeId: 'ma',
    departmentId: 'dept-hindi',
    durationYears: 2,
    intake: 20,
    eligibility: 'B.A. Hindi or any degree with Hindi as Part I language.',
  },
]

import type { Leader } from '@/types/about'

// Placeholder management and officers with made-up names - the backend will supply the real ones.
export const leaders: Leader[] = [
  {
    id: 'principal',
    name: 'Dr. S. Mohamed Rafi',
    role: 'Principal',
    qualification: 'M.Sc., M.Phil., Ph.D.',
    message: [
      'Welcome to MASQ College. For over four decades our college has helped young people from every background discover their abilities and build meaningful careers.',
      'We believe education is more than marks. Along with strong academics, we encourage our students to take part in sports, cultural activities, social service and research, so that they leave us as confident and responsible citizens.',
      'I invite you to explore our departments and facilities, and to visit the campus. We look forward to welcoming you.',
    ],
  },
  { id: 'president', name: 'Mr. K. Abdul Rahim', role: 'President', qualification: 'B.Com.' },
  { id: 'secretary', name: 'Mr. M. Abdul Kader', role: 'Secretary & Correspondent', qualification: 'M.A., B.L.' },
  { id: 'vice-principal', name: 'Dr. R. Lakshmi', role: 'Vice-Principal', qualification: 'M.A., M.Phil., Ph.D.' },
  { id: 'dean', name: 'Dr. P. Anand Kumar', role: 'Dean of Academics', qualification: 'M.Com., Ph.D.' },
  { id: 'coe', name: 'Dr. N. Sabeena Begum', role: 'Controller of Examinations', qualification: 'M.Sc., Ph.D.' },
]

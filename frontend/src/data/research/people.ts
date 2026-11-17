import type { Leader } from '@/types/about'
import type { PhdGuide } from '@/types/research'

// Placeholder Dean of Research with a made-up name - the backend will supply the real one.
export const deanOfResearch: Leader = {
  id: 'dean-research',
  name: 'Dr. A. Jaffar Sadiq',
  role: 'Dean of Research',
  qualification: 'M.Sc., M.Phil., Ph.D.',
  message: [
    'Research is at the heart of a good college. It keeps our teaching fresh and lets our students and teachers contribute new knowledge to their fields.',
    'Our research centres welcome scholars who are curious and committed. We support them with experienced guides, well-equipped laboratories and a clear, fair process from registration to the award of the degree.',
  ],
}

// Ph.D. guides are existing faculty members (src/data/academics/faculty.ts); the scholar counts are placeholders.
export const phdGuides: PhdGuide[] = [
  { facultyId: 'fac-com-1', scholarsGuiding: 6, scholarsAwarded: 9 },
  { facultyId: 'fac-com-2', scholarsGuiding: 5, scholarsAwarded: 4 },
  { facultyId: 'fac-com-5', scholarsGuiding: 3, scholarsAwarded: 1 },
  { facultyId: 'fac-chem-1', scholarsGuiding: 6, scholarsAwarded: 11 },
  { facultyId: 'fac-chem-2', scholarsGuiding: 4, scholarsAwarded: 2 },
]

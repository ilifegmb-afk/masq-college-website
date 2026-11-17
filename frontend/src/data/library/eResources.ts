import type { ELearningResource } from '@/types/academics'

// E-resources the library subscribes to or recommends (national platforms, free for colleges).
export const eResources: ELearningResource[] = [
  {
    id: 'nlist',
    title: 'N-LIST (INFLIBNET)',
    description: 'Thousands of e-journals and e-books for colleges. Log in with the user ID from the library counter.',
    type: 'journals',
    url: 'https://nlist.inflibnet.ac.in/',
  },
  {
    id: 'delnet',
    title: 'DELNET',
    description: 'Network of libraries across India: union catalogue, e-journals and inter-library loan of books.',
    type: 'journals',
    url: 'https://delnet.in/',
  },
  {
    id: 'ndli',
    title: 'National Digital Library of India',
    description: 'E-books, journals, theses and question papers, free with your college login.',
    type: 'library',
    url: 'https://ndl.iitkgp.ac.in/',
  },
  {
    id: 'shodhganga',
    title: 'Shodhganga',
    description: 'Full text of Ph.D. theses from Indian universities.',
    type: 'library',
    url: 'https://shodhganga.inflibnet.ac.in/',
  },
  {
    id: 'epgp',
    title: 'e-PG Pathshala',
    description: 'UGC postgraduate e-content in many subjects, with modules and quizzes.',
    type: 'notes',
    url: 'https://epgp.inflibnet.ac.in/',
  },
  {
    id: 'swayam',
    title: 'SWAYAM',
    description: 'Free online courses from Indian universities and institutes; credits can be transferred to your degree.',
    type: 'course',
    url: 'https://swayam.gov.in/',
  },
  {
    id: 'nptel',
    title: 'NPTEL',
    description: 'Video lectures from IIT and IISc faculty in engineering, science and management.',
    type: 'video',
    url: 'https://nptel.ac.in/',
  },
]

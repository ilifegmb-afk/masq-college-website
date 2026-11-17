import type { AlumniContent } from '@/types/alumni'

// Placeholder Alumni text - the backend will supply the real one.
// Photos reuse the home page event images (see src/data/home.ts for credits).
// The registration address is a placeholder (".example" is a reserved, non-working domain).
export const alumniContent: AlumniContent = {
  about: {
    images: [
      { url: '/images/events/alumni-meet.jpg', alt: 'Alumnae meeting up at the annual alumni get-together' },
      { url: '/images/events/career-workshop.jpg', alt: 'An alumna speaking to students at a career talk' },
    ],
    actions: [{ label: 'Register as an alumnus', href: 'https://alumni.masqcollege.example/register' }],
    blocks: [
      {
        paragraphs: [
          'The Alumni Association brings together everyone who has studied at the college. It was started in 1995 and is a registered society today, with thousands of members in India and abroad.',
        ],
      },
      {
        title: 'Our aims',
        points: [
          'Keep former students connected with the college and with each other.',
          'Support current students through mentoring, internships and placements.',
          'Fund scholarships for students who need help to continue their studies.',
        ],
      },
      {
        title: 'Activities',
        points: [
          'Annual alumni meet on the second Sunday of January',
          'Career talks and mock interviews for final-year students',
          'Alumni scholarship fund for first-generation learners',
          'Chapter meet-ups in cities across India and abroad',
        ],
      },
    ],
  },

  members: {
    blocks: [
      {
        paragraphs: ['The office bearers of the Alumni Association, elected at the annual general meeting for a term of two years.'],
      },
    ],
  },

  notable: {
    blocks: [
      {
        paragraphs: ['A few of our former students who have made a mark in public service, business, science, sport and the arts.'],
      },
    ],
  },

  chapters: {
    blocks: [
      {
        paragraphs: [
          'Alumni chapters keep our graduates connected wherever they live and work. Write to a chapter coordinator to join the chapter near you.',
        ],
      },
    ],
  },

  wellWishers: {
    blocks: [
      {
        paragraphs: [
          'We are grateful to the alumni, friends and organisations whose generosity has helped the college and its students.',
        ],
      },
    ],
  },
}

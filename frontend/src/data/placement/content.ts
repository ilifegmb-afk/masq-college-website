import type { PlacementContent } from '@/types/placement'

// Placeholder Placement text - the backend will supply the real one. Figures are examples.
// Photos are free Unsplash images (Unsplash License) in public/images/placement/:
//   celebration and placed-students: Skytech Aviation · interview: Fotos.
export const placementContent: PlacementContent = {
  general: {
    images: [
      { url: '/images/placement/celebration.jpg', alt: 'Students celebrating their job offers with friends' },
      { url: '/images/placement/interview.jpg', alt: 'A recruiter at a desk, ready for an interview' },
    ],
    blocks: [
      {
        paragraphs: [
          'The Placement Cell helps students move from the classroom to a career. It brings companies to the campus, trains students for tests and interviews, and supports them until they receive an offer.',
        ],
      },
      {
        title: 'What we do',
        points: [
          'Campus recruitment drives and pool drives with nearby colleges',
          'Aptitude, communication and soft-skills training from the second year',
          'Mock interviews and group discussions with industry experts',
          'Internships and industrial visits in partnership with companies',
          'Career counselling for higher studies and government exams',
        ],
      },
      {
        title: 'Placements 2025-26 at a glance',
        points: ['520 students placed', '85 companies visited the campus', 'Highest salary: ₹12 LPA', 'Average salary: ₹3.6 LPA'],
      },
    ],
  },

  head: {
    blocks: [
      {
        paragraphs: [
          'The Placement Officer leads the Placement Cell, builds relationships with companies and plans the training and recruitment calendar for the year.',
        ],
      },
    ],
  },

  team: {
    blocks: [
      {
        paragraphs: ['The faculty coordinators who train students and organise drives for each group of departments.'],
      },
    ],
  },

  drives: {
    actions: [{ label: 'Register on the Student Portal', href: 'https://portal.masqcollege.example/placement' }],
    blocks: [
      {
        paragraphs: [
          'Upcoming campus recruitment drives. Register for each drive on the Student Portal before the last date, and report to the venue 30 minutes early with printed copies of your résumé.',
        ],
      },
    ],
  },

  eligibility: {
    blocks: [
      {
        title: 'Who can take part',
        points: [
          'Final-year UG and PG students who have registered with the Placement Cell',
          'At least 60% aggregate marks, or as set by the company',
          'No standing arrears on the day of the drive',
          'At least 75% attendance',
          'Completion of the placement training programme',
        ],
      },
      {
        title: 'How to register',
        steps: [
          'Register with the Placement Cell at the start of your final year.',
          'Upload your latest résumé and mark sheets on the Student Portal.',
          'Watch the Upcoming Recruitment page and the notice board for new drives.',
          'Apply for each drive you are eligible for before the last date.',
        ],
      },
      {
        title: 'One student, one job',
        paragraphs: [
          'Once you accept an offer, you may only take part in drives by companies offering a salary of ₹6 LPA or more ("dream companies"), so that more students get a chance.',
        ],
      },
    ],
  },

  recruiters: {
    blocks: [{ paragraphs: ['Some of the companies that have recruited our students.'] }],
  },
}

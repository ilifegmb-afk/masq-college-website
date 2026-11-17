import type { AboutContent } from '@/types/about'

// Placeholder About text and documents - the backend will supply the real ones.
// Document urls are examples; photos reuse images already in public/images/ (see src/data/home.ts for credits).
export const aboutContent: AboutContent = {
  aboutUs: {
    images: [
      { url: '/images/gallery/g1.jpg', alt: 'College building and lawn' },
      { url: '/images/about/about.jpg', alt: 'Students working together in class' },
    ],
    blocks: [
      {
        paragraphs: [
          'MASQ College is a co-educational arts and science college that brings quality higher education within reach of students from every background. Our Aided and Self-Finance departments offer undergraduate, postgraduate and doctoral courses in arts, science, commerce, computing and management.',
        ],
      },
      {
        title: 'At a glance',
        points: [
          'Founded in 1982',
          'Undergraduate, postgraduate and Ph.D. courses',
          'Aided and Self-Finance departments',
          'Central library, labs, hostels and college buses',
          'Active placement cell, NSS, NCC and sports teams',
        ],
      },
      {
        title: 'Our history',
        paragraphs: [
          'The college began in 1982 with a handful of undergraduate courses and a few hundred students. Over the years it has grown into a large campus with research departments, modern labs and thousands of alumni working across India and abroad.',
          'Through all these years, our aim has stayed the same: to help every student learn well, grow in character and serve society.',
        ],
      },
    ],
  },

  visionMission: {
    images: [
      { url: '/images/vision/vision.jpg', alt: 'Students on the campus' },
      { url: '/images/vision/mission.jpg', alt: 'A class in progress' },
    ],
    blocks: [
      {
        title: 'Vision',
        paragraphs: ['To be a college that shapes confident, capable and responsible citizens through excellent and affordable education.'],
      },
      {
        title: 'Mission',
        points: [
          'Offer accessible, high-quality education with real-world relevance.',
          'Support students from all backgrounds, especially first-generation learners.',
          'Encourage research, innovation and entrepreneurship.',
          'Build character, discipline and a spirit of service to society.',
        ],
      },
      {
        title: 'Core values',
        points: ['Integrity', 'Excellence', 'Inclusiveness', 'Respect for all faiths and cultures', 'Service to society'],
      },
      {
        title: 'Motto',
        paragraphs: ['Learn. Lead. Succeed.'],
      },
    ],
  },

  leadership: {
    blocks: [
      {
        paragraphs: [
          'The college is managed by a Governing Body that sets its direction. The Principal leads the day-to-day academic and administrative work, supported by the Vice-Principal, the Dean of Academics and the Controller of Examinations.',
        ],
      },
    ],
  },

  faculty: {
    blocks: [
      {
        paragraphs: [
          'Our teachers, department by department. Select a department name to see its full faculty profiles, programmes and facilities.',
        ],
      },
    ],
  },
}

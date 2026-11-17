import type { LibraryContent } from '@/types/library'

// Placeholder library text and documents - the backend will supply the real ones.
// Document urls are examples; the backend will supply real file links.
// Photos are free Unsplash images (Unsplash License): library/reading.jpg - Praveen Gupta,
// library/e-resources.jpg - Sanket Mishra; gallery/g3.jpg is reused from the home page gallery.
export const libraryContent: LibraryContent = {
  general: {
    images: [
      { url: '/images/library/reading.jpg', alt: 'Student reading at a table in the library' },
      { url: '/images/gallery/g3.jpg', alt: 'Library shelves' },
    ],
    blocks: [
      {
        paragraphs: [
          'The central library is spread over 12,000 sq. ft. on the ground and first floors of the Academic Block, with seating for 250 readers. It is fully automated: books are issued and returned with barcodes, and the catalogue can be searched on the OPAC terminals.',
        ],
      },
      {
        title: 'Library timings',
        points: [
          'Monday to Friday: 8:30 am to 6:00 pm',
          'Saturday: 9:00 am to 1:00 pm',
          'During examinations: 8:00 am to 8:00 pm',
          'Closed on Sundays and government holidays',
        ],
      },
      {
        title: 'Membership and borrowing',
        points: [
          'All students and staff are members; show your ID card to borrow books.',
          'UG students may borrow 2 books for 14 days.',
          'PG students and research scholars may borrow 4 books for 21 days.',
          'Staff may borrow 10 books for one semester.',
          'A fine of ₹1 per day is charged for each book returned late.',
        ],
      },
      {
        title: 'Facilities',
        points: [
          'Reading hall with 250 seats',
          'Reference section and bound back volumes of journals',
          'Digital library with 30 computers and internet',
          'Photocopy service',
          'Book bank for students from economically weaker families',
        ],
      },
      {
        title: 'Library rules',
        points: [
          'Keep silence inside the library.',
          'Leave bags and personal books at the counter.',
          'Switch off mobile phones.',
          'Handle books with care; damaged or lost books must be replaced.',
        ],
      },
    ],
  },

  catalogue: {
    blocks: [
      {
        paragraphs: [
          'Books held for each department. A title is one book; volumes count every copy of it on the shelves.',
          'Search the full catalogue on the OPAC terminals in the library, or ask at the circulation desk.',
        ],
      },
    ],
  },

  journals: {
    blocks: [
      {
        paragraphs: [
          'The library subscribes to national and international journals and magazines for every department. Current issues are in the periodicals section; older issues are bound and kept in the reference section.',
        ],
      },
    ],
  },

  eResources: {
    images: [{ url: '/images/library/e-resources.jpg', alt: 'Student with headphones using a laptop on the campus' }],
    blocks: [
      {
        paragraphs: [
          'Read e-books, e-journals and theses online from the digital library or from your own device on the campus Wi-Fi.',
        ],
      },
      {
        title: 'Access from home',
        points: [
          'Collect your N-LIST user ID and password from the library counter.',
          'The login works from anywhere for the whole academic year.',
          'Do not share your login with others.',
        ],
      },
    ],
  },
}

import type { HomeContent } from '@/types/home'

// Placeholder copy and images - the backend will supply the real homepage content.
// Photos are free Unsplash stock images (Unsplash License) in public/images/; recruiter logos are
// brand SVGs from Simple Icons in public/images/recruiters/.
export const home: HomeContent = {
  hero: {
    followText: 'Follow us on Facebook, X, Instagram and LinkedIn',
    // Slide photos are stock images from Unsplash (free under the Unsplash License), stored in
    // public/images/hero/. Replace with the college's own photos once the backend provides them.
    //   admissions: Indian college students, New Delhi - Sanket Mishra
    //   excellence: Maharaja Sayajirao University of Baroda, Gujarat - Vardhan Halwai
    //   campus:     campus building and lawn (location not labelled on Unsplash) - Shashank Raghuvanshi
    slides: [
      {
        id: 'admissions',
        eyebrow: 'Admissions open 2026-27',
        title: 'Build your career',
        highlight: 'with a college that cares',
        imageUrl: '/images/hero/admissions.jpg',
        cta: { label: 'Apply Now', href: '/admissions/apply' },
      },
      {
        id: 'excellence',
        eyebrow: 'Excellence in education',
        title: 'Knowledge that builds',
        highlight: 'character and confidence',
        imageUrl: '/images/hero/excellence.jpg',
        cta: { label: 'Explore Programs', href: '#programs' },
      },
      {
        id: 'campus',
        eyebrow: 'Campus life',
        title: 'Learning beyond',
        highlight: 'the classroom',
        imageUrl: '/images/hero/campus.jpg',
        cta: { label: 'See Our Campus', href: '#gallery' },
      },
    ],
  },

  flashNews: {
    label: 'Flash News',
    items: [
      { id: 'fn-admissions', text: 'Admissions open for 2026-27: apply online before 31 December', href: '/admissions/apply' },
      { id: 'fn-exams', text: 'Semester end examinations begin 1 December: download your hall ticket', href: '/examination/hall-ticket' },
      { id: 'fn-fees', text: 'Last date for fee payment extended to 30 November', href: '#notices' },
      { id: 'fn-fest', text: 'Annual Cultural Fest on 15 January 2027: registrations now open', href: '#events' },
      { id: 'fn-scholarship', text: 'Merit scholarship applications are now open', href: '/admissions/scholarships' },
      { id: 'fn-placements', text: 'Campus placement drive with leading tech companies this month', href: '#recruiters' },
    ],
  },

  // Placeholder notices. Attachment urls are examples; the backend will supply real file links.
  notices: {
    newLabel: 'New',
    emptyLabel: 'No notices right now.',
    announcements: {
      title: 'Announcements',
      action: { label: 'View all announcements', href: '/announcements' },
      items: [
        {
          id: 'admissions-2026-27',
          title: 'Admissions open for 2026-27 undergraduate programs',
          date: '2026-11-12',
          isNew: true,
          href: '/announcements/admissions-2026-27',
          attachments: [
            { id: 'prospectus', name: 'Prospectus 2026-27', url: '/files/announcements/prospectus-2026-27.pdf', type: 'pdf', sizeBytes: 2411724 },
            { id: 'application-form', name: 'Application form', url: '/files/announcements/application-form.docx', type: 'doc', sizeBytes: 184320 },
          ],
        },
        {
          id: 'cultural-fest-dates',
          title: 'Annual Cultural Fest dates announced',
          date: '2026-11-10',
          isNew: true,
          href: '/announcements/cultural-fest-dates',
          attachments: [
            { id: 'fest-schedule', name: 'Fest schedule', url: '/files/announcements/cultural-fest-schedule.pdf', type: 'pdf', sizeBytes: 512000 },
          ],
        },
        {
          id: 'merit-scholarships',
          title: 'Merit scholarship applications are now open',
          date: '2026-11-06',
          href: '/announcements/merit-scholarships',
          attachments: [
            { id: 'scholarship-guidelines', name: 'Guidelines', url: '/files/announcements/scholarship-guidelines.pdf', type: 'pdf', sizeBytes: 389120 },
            { id: 'eligibility-list', name: 'Eligibility criteria', url: '/files/announcements/scholarship-eligibility.xlsx', type: 'sheet', sizeBytes: 96256 },
          ],
        },
        {
          id: 'library-timings',
          title: 'Library timings extended during the examination period',
          date: '2026-11-03',
        },
        {
          id: 'computer-lab',
          title: 'New computer lab inaugurated in the Science Block',
          date: '2026-10-28',
          href: '/news/new-computer-lab',
          attachments: [
            { id: 'lab-photo', name: 'Inauguration photo', url: '/files/announcements/computer-lab.jpg', type: 'image', sizeBytes: 1258291 },
          ],
        },
        {
          id: 'sports-day-registration',
          title: 'Annual Sports Day: student registrations open',
          date: '2026-10-20',
          attachments: [
            { id: 'sports-events', name: 'Event list', url: '/files/announcements/sports-day-events.pdf', type: 'pdf', sizeBytes: 204800 },
            { id: 'sports-form', name: 'Registration form', url: '/files/announcements/sports-day-form.docx', type: 'doc', sizeBytes: 71680 },
          ],
        },
      ],
    },
    noticeboard: {
      title: 'Noticeboard',
      action: { label: 'View full noticeboard', href: '/noticeboard' },
      categories: [
        {
          id: 'student',
          label: 'Student',
          items: [
            {
              id: 'student-exam-timetable',
              title: 'Semester end examination timetable',
              date: '2026-11-11',
              isNew: true,
              attachments: [
                { id: 'timetable', name: 'Timetable', url: '/files/notices/exam-timetable.pdf', type: 'pdf', sizeBytes: 327680 },
                { id: 'exam-rules', name: 'Exam instructions', url: '/files/notices/exam-instructions.pdf', type: 'pdf', sizeBytes: 153600 },
              ],
            },
            {
              id: 'student-fee-date',
              title: 'Last date for fee payment extended to 30 November',
              date: '2026-11-09',
              isNew: true,
              attachments: [
                { id: 'fee-structure', name: 'Fee structure', url: '/files/notices/fee-structure.pdf', type: 'pdf', sizeBytes: 245760 },
              ],
            },
            {
              id: 'student-internal-marks',
              title: 'Internal assessment marks published',
              date: '2026-11-05',
              attachments: [
                { id: 'internal-marks', name: 'Marks list', url: '/files/notices/internal-marks.xlsx', type: 'sheet', sizeBytes: 118784 },
              ],
            },
            {
              id: 'student-hall-ticket',
              title: 'How to download your hall ticket',
              date: '2026-11-02',
            },
            {
              id: 'student-industrial-visit',
              title: 'Industrial visit: parent consent form to be submitted',
              date: '2026-10-27',
              attachments: [
                { id: 'consent-form', name: 'Consent form', url: '/files/notices/industrial-visit-consent.docx', type: 'doc', sizeBytes: 66560 },
              ],
            },
            {
              id: 'student-scholarship-list',
              title: 'Scholarship disbursement list for the previous semester',
              date: '2026-10-22',
              attachments: [
                { id: 'disbursement-list', name: 'Disbursement list', url: '/files/notices/scholarship-disbursement.xlsx', type: 'sheet', sizeBytes: 140288 },
              ],
            },
          ],
        },
        {
          id: 'staff',
          label: 'Staff',
          items: [
            {
              id: 'staff-curriculum-meeting',
              title: 'Faculty meeting on curriculum revision',
              date: '2026-11-10',
              isNew: true,
              attachments: [
                { id: 'meeting-agenda', name: 'Agenda', url: '/files/notices/faculty-meeting-agenda.pdf', type: 'pdf', sizeBytes: 98304 },
              ],
            },
            {
              id: 'staff-question-papers',
              title: 'Deadline for question paper submission',
              date: '2026-11-07',
              attachments: [
                { id: 'paper-template', name: 'Paper template', url: '/files/notices/question-paper-template.docx', type: 'doc', sizeBytes: 81920 },
              ],
            },
            {
              id: 'staff-invigilation',
              title: 'Invigilation duty roster for semester end exams',
              date: '2026-11-04',
              attachments: [
                { id: 'duty-roster', name: 'Duty roster', url: '/files/notices/invigilation-roster.xlsx', type: 'sheet', sizeBytes: 109568 },
              ],
            },
            {
              id: 'staff-leave-format',
              title: 'New format for staff leave applications',
              date: '2026-10-30',
              attachments: [
                { id: 'leave-form', name: 'Leave form', url: '/files/notices/leave-application.docx', type: 'doc', sizeBytes: 53248 },
              ],
            },
            {
              id: 'staff-workshop',
              title: 'Professional development workshop for faculty',
              date: '2026-10-24',
              attachments: [
                { id: 'workshop-brochure', name: 'Brochure', url: '/files/notices/faculty-workshop.pdf', type: 'pdf', sizeBytes: 778240 },
              ],
            },
          ],
        },
        {
          id: 'general',
          label: 'General',
          items: [
            {
              id: 'general-water-supply',
              title: 'Water supply interrupted on Saturday for maintenance work',
              date: '2026-11-12',
              isNew: true,
            },
            {
              id: 'general-parking',
              title: 'Updated visitor and parking guidelines',
              date: '2026-11-08',
              attachments: [
                { id: 'parking-guidelines', name: 'Guidelines', url: '/files/notices/parking-guidelines.pdf', type: 'pdf', sizeBytes: 174080 },
              ],
            },
            {
              id: 'general-lost-found',
              title: 'Lost and found: collected items are at the front office',
              date: '2026-11-03',
              attachments: [
                { id: 'lost-items', name: 'Items photo', url: '/files/notices/lost-and-found.jpg', type: 'image', sizeBytes: 912384 },
              ],
            },
            {
              id: 'general-anti-ragging',
              title: 'Anti-ragging committee: contact details',
              date: '2026-10-29',
              attachments: [
                { id: 'committee-contacts', name: 'Committee members', url: '/files/notices/anti-ragging-committee.pdf', type: 'pdf', sizeBytes: 122880 },
              ],
            },
            {
              id: 'general-library-renewal',
              title: 'Library membership renewal for the new academic year',
              date: '2026-10-18',
            },
          ],
        },
      ],
    },
  },

  about: {
    title: 'Build your career life.',
    description:
      'A supportive community of teachers and students working together. We focus on strong fundamentals, practical skills and character building.',
    imageUrl: '/images/about/about.jpg',
    videoUrl: 'https://www.youtube.com/',
    features: [
      { id: 'flexible', icon: 'heart', label: 'Flexible classes' },
      { id: 'anywhere', icon: 'book', label: 'Learn from anywhere' },
      { id: 'faculty', icon: 'monitor', label: 'Experienced faculty' },
    ],
  },

  categories: [
    { id: 'science', label: 'Science', imageUrl: '/images/categories/science.jpg', href: '#programs' },
    { id: 'commerce', label: 'Commerce', imageUrl: '/images/categories/commerce.jpg', href: '#programs' },
    { id: 'computing', label: 'Computing', imageUrl: '/images/categories/computing.jpg', href: '#programs' },
    { id: 'management', label: 'Management', imageUrl: '/images/categories/management.jpg', href: '#programs' },
    { id: 'languages', label: 'Languages', imageUrl: '/images/categories/languages.jpg', href: '#programs' },
    { id: 'arts', label: 'Arts & Humanities', imageUrl: '/images/categories/arts.jpg', href: '#programs' },
  ],

  vision: {
    intro: {
      title: 'About us.',
      description:
        'What drives us, how we work, and where we are headed as an institution.',
    },
    tabs: [
      {
        id: 'vision',
        title: 'Our vision.',
        summary: 'To be a college that shapes confident, capable and responsible citizens.',
        imageUrl: '/images/vision/vision.jpg',
      },
      {
        id: 'mission',
        title: 'Our mission.',
        summary: 'To deliver accessible, high-quality education with real-world relevance.',
        imageUrl: '/images/vision/mission.jpg',
      },
      {
        id: 'planning',
        title: 'Our planning.',
        summary: 'Continuous investment in faculty, facilities and student support.',
        imageUrl: '/images/vision/planning.jpg',
      },
    ],
  },

  programs: {
    intro: {
      title: 'Our programs',
      action: { label: 'Browse all programs', href: '/academics/undergraduate' },
    },
    items: [
      { id: 'bsc-cs', title: 'B.Sc Computer Science', imageUrl: '/images/programs/bsc-cs.jpg', href: '/academics/undergraduate' },
      { id: 'bcom', title: 'B.Com', imageUrl: '/images/programs/bcom.jpg', href: '/academics/undergraduate' },
      { id: 'bba', title: 'BBA', imageUrl: '/images/programs/bba.jpg', href: '/academics/undergraduate' },
    ],
  },

  news: {
    intro: {
      title: 'News & updates',
      action: { label: 'Browse all posts', href: '/news' },
    },
    ctaLabel: 'Read more',
    items: [
      {
        id: 'post-1',
        title: 'Admissions for the new academic year are now open',
        excerpt: 'Applications are being accepted across all undergraduate programs.',
        imageUrl: '/images/news/post-1.jpg',
        href: '/news/admissions-open',
      },
      {
        id: 'post-2',
        title: 'Students shine at the inter-college science exhibition',
        excerpt: 'Our teams took home several awards for innovative projects.',
        imageUrl: '/images/news/post-2.jpg',
        href: '/news/science-exhibition',
      },
      {
        id: 'post-3',
        title: 'New computer lab inaugurated on campus',
        excerpt: 'The lab adds modern workstations for practical sessions.',
        imageUrl: '/images/news/post-3.jpg',
        href: '/news/new-computer-lab',
      },
    ],
  },

  events: {
    intro: {
      title: 'Our events',
      action: { label: 'Upcoming events', href: '/events' },
    },
    items: [
      {
        id: 'cultural-fest',
        title: 'Annual Cultural Fest',
        href: '/events/cultural-fest',
        imageUrl: '/images/events/cultural-fest.jpg',
        date: '2027-01-15',
        time: '9:00 am - 5:00 pm',
        location: 'Main Auditorium',
      },
      {
        id: 'career-workshop',
        title: 'Career Guidance Workshop',
        href: '/events/career-workshop',
        imageUrl: '/images/events/career-workshop.jpg',
        date: '2026-12-05',
        time: '10:00 am - 1:00 pm',
        location: 'Seminar Hall',
      },
      {
        id: 'science-expo',
        title: 'Science Exhibition 2027',
        href: '/events/science-expo',
        imageUrl: '/images/events/science-expo.jpg',
        date: '2027-02-10',
        location: 'Science Block',
      },
      {
        id: 'alumni-meet',
        title: 'Alumni Meet',
        href: '/events/alumni-meet',
        imageUrl: '/images/events/alumni-meet.jpg',
        date: '2027-01-26',
        time: '4:00 pm - 8:00 pm',
        location: 'College Grounds',
      },
    ],
  },

  testimonials: [
    {
      id: 't1',
      name: 'Student Name',
      role: 'B.Sc Computer Science, Class of 2025',
      quote: 'The faculty pushed me to think independently, and the labs gave me real project experience before I graduated.',
      avatarUrl: '/images/testimonials/t1.jpg',
      rating: 5,
    },
    {
      id: 't2',
      name: 'Student Name',
      role: 'B.Com, Class of 2024',
      quote: 'Supportive teachers and a friendly campus made the three years fly by. I felt prepared for my first job.',
      avatarUrl: '/images/testimonials/t2.jpg',
      rating: 5,
    },
    {
      id: 't3',
      name: 'Student Name',
      role: 'BBA, Class of 2025',
      quote: 'Group projects and guest sessions taught me skills no textbook could. Highly recommended.',
      avatarUrl: '/images/testimonials/t3.jpg',
      rating: 4,
    },
    {
      id: 't4',
      name: 'Parent Name',
      role: 'Parent',
      quote: 'We were impressed by how closely the college tracks each student\'s progress and communicates with parents.',
      avatarUrl: '/images/testimonials/t4.jpg',
      rating: 5,
    },
    {
      id: 't5',
      name: 'Alumni Name',
      role: 'Alumnus, Class of 2022',
      quote: 'The alumni network and placement support opened doors I did not know existed.',
      avatarUrl: '/images/testimonials/t5.jpg',
      rating: 5,
    },
    {
      id: 't6',
      name: 'Student Name',
      role: 'B.A English, Class of 2026',
      quote: 'Clubs, fests and workshops balanced my studies perfectly. I grew in confidence every semester.',
      avatarUrl: '/images/testimonials/t6.jpg',
      rating: 4,
    },
  ],

  // Placeholder recruiters (tech companies). Replace with the companies that actually hire from the college.
  recruiters: {
    intro: {
      title: 'Our recruiters',
      description: 'Leading technology companies visit our campus and hire our graduates every year.',
    },
    items: [
      { id: 'tcs', name: 'TCS', logoUrl: '/images/recruiters/tcs.svg' },
      { id: 'infosys', name: 'Infosys', logoUrl: '/images/recruiters/infosys.svg' },
      { id: 'wipro', name: 'Wipro', logoUrl: '/images/recruiters/wipro.svg' },
      { id: 'hcl', name: 'HCLTech', logoUrl: '/images/recruiters/hcl.svg' },
      { id: 'accenture', name: 'Accenture', logoUrl: '/images/recruiters/accenture.svg' },
      { id: 'zoho', name: 'Zoho', logoUrl: '/images/recruiters/zoho.svg' },
      { id: 'google', name: 'Google', logoUrl: '/images/recruiters/google.svg' },
      { id: 'sap', name: 'SAP', logoUrl: '/images/recruiters/sap.svg' },
      { id: 'intel', name: 'Intel', logoUrl: '/images/recruiters/intel.svg' },
      { id: 'paytm', name: 'Paytm', logoUrl: '/images/recruiters/paytm.svg' },
      { id: 'razorpay', name: 'Razorpay', logoUrl: '/images/recruiters/razorpay.svg' },
      { id: 'swiggy', name: 'Swiggy', logoUrl: '/images/recruiters/swiggy.svg' },
    ],
  },

  gallery: [
    { id: 'g1', imageUrl: '/images/gallery/g1.jpg', alt: 'Campus building and lawn' },
    { id: 'g2', imageUrl: '/images/gallery/g2.jpg', alt: 'Classroom session' },
    { id: 'g3', imageUrl: '/images/gallery/g3.jpg', alt: 'Library' },
    { id: 'g4', imageUrl: '/images/gallery/g4.jpg', alt: 'Computer lab' },
    { id: 'g5', imageUrl: '/images/gallery/g5.jpg', alt: 'Playing cricket' },
    { id: 'g6', imageUrl: '/images/gallery/g6.jpg', alt: 'Cultural event' },
  ],

  partners: {
    title: 'Trusted by our affiliations and partners',
    items: [
      { id: 'p1', name: 'Affiliated University' },
      { id: 'p2', name: 'Industry Partner' },
      { id: 'p3', name: 'Research Partner' },
      { id: 'p4', name: 'Training Partner' },
      { id: 'p5', name: 'Alumni Network' },
    ],
  },
}

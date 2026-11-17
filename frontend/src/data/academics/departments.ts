import type { Department, ELearningResource } from '@/types/academics'

// Placeholder departments - the backend will supply the real ones.
// category is 'aided' or 'self-finance' (see categories.ts). The same subject can have one department of each.
// Photos reuse the Unsplash images already in public/images/ (see src/data/home.ts for credits).

/** National e-learning platforms every department points students to. */
const commonELearning: ELearningResource[] = [
  {
    id: 'swayam',
    title: 'SWAYAM',
    description: 'Free online courses from Indian universities and institutes; credits can be transferred to your degree.',
    type: 'course',
    url: 'https://swayam.gov.in/',
  },
  {
    id: 'ndli',
    title: 'National Digital Library of India',
    description: 'E-books, journals, theses and question papers, free with your college login.',
    type: 'library',
    url: 'https://ndl.iitkgp.ac.in/',
  },
]

export const departments: Department[] = [
  {
    id: 'dept-commerce',
    slug: 'commerce',
    name: 'Commerce',
    title: 'PG & Research Department of Commerce',
    category: 'aided',
    imageUrl: '/images/categories/commerce.jpg',
    established: 1985,
    about: [
      'The Department of Commerce is one of the oldest and largest departments of the college. It began with an undergraduate programme and has grown into a research department offering undergraduate, postgraduate and doctoral programmes.',
      'Students learn accounting, taxation, banking, finance and business law through classroom teaching, case studies, industrial visits and internships. The department runs a Commerce Association, a Finance Club and regular workshops on Tally, GST filing and the stock market.',
    ],
    vision: 'To develop commerce graduates who are skilled, ethical and ready to lead in business and public life.',
    mission: [
      'Offer an up-to-date curriculum that links theory with practice.',
      'Build skills in accounting software, taxation and financial analysis.',
      'Encourage research and entrepreneurship among students and staff.',
    ],
    eLearning: [
      {
        id: 'epgp-commerce',
        title: 'e-PG Pathshala: Commerce',
        description: 'UGC postgraduate e-content: modules on accounting, finance and business economics.',
        type: 'notes',
        url: 'https://epgp.inflibnet.ac.in/',
      },
      {
        id: 'nptel-finance',
        title: 'NPTEL: Financial Accounting',
        description: 'Video lectures from IIT faculty on financial accounting and analysis.',
        type: 'video',
        url: 'https://nptel.ac.in/',
      },
      ...commonELearning,
    ],
    infrastructure: [
      {
        id: 'commerce-lab',
        name: 'Computer & Tally Lab',
        description: '60 systems with Tally Prime, MS Office and GST software for practical sessions.',
        imageUrl: '/images/gallery/g4.jpg',
      },
      {
        id: 'commerce-classrooms',
        name: 'Smart Classrooms',
        description: 'Six classrooms with projectors and audio systems for interactive teaching.',
        imageUrl: '/images/gallery/g2.jpg',
      },
      {
        id: 'commerce-library',
        name: 'Department Library',
        description: 'Over 4,000 books and back volumes of journals on commerce, finance and management.',
        imageUrl: '/images/gallery/g3.jpg',
      },
    ],
  },
  {
    id: 'dept-commerce-sf',
    slug: 'commerce-self-finance',
    name: 'Commerce (Self-Finance)',
    title: 'Department of Commerce (Self-Finance)',
    category: 'self-finance',
    imageUrl: '/images/categories/commerce.jpg',
    established: 2008,
    about: [
      'The self-financing Department of Commerce runs B.Com. courses that combine commerce with computer applications and professional accounting.',
      'Students train on accounting software, take part in commerce fests and complete internships with audit firms and banks.',
    ],
    vision: 'To prepare job-ready commerce graduates with strong practical and digital skills.',
    mission: [
      'Blend commerce with computer and professional accounting skills.',
      'Give every student hands-on practice with accounting software.',
      'Build links with industry for internships and placements.',
    ],
    eLearning: [
      {
        id: 'nptel-accounting',
        title: 'NPTEL: Accounting & Finance',
        description: 'Video lectures on accounting, auditing and corporate finance.',
        type: 'video',
        url: 'https://nptel.ac.in/',
      },
      ...commonELearning,
    ],
    infrastructure: [
      {
        id: 'commerce-sf-lab',
        name: 'Accounting Software Lab',
        description: '50 systems with Tally Prime and GST software for practical classes.',
        imageUrl: '/images/gallery/g4.jpg',
      },
      {
        id: 'commerce-sf-classrooms',
        name: 'Smart Classrooms',
        description: 'Classrooms with projectors for case-study and presentation sessions.',
        imageUrl: '/images/gallery/g2.jpg',
      },
    ],
  },
  {
    id: 'dept-computer-science',
    slug: 'computer-science',
    name: 'Computer Science',
    title: 'Department of Computer Science',
    category: 'self-finance',
    imageUrl: '/images/categories/computing.jpg',
    established: 1998,
    about: [
      'The Department of Computer Science trains students in programming, data structures, databases, networking and emerging areas such as data science and artificial intelligence.',
      'Every student completes a software project in the final year. The department holds coding contests, hackathons and placement training with industry partners.',
    ],
    vision: 'To produce competent computing professionals who solve real problems with technology.',
    mission: [
      'Teach strong programming and problem-solving fundamentals.',
      'Give hands-on exposure to current tools and platforms.',
      'Prepare students for careers, higher studies and research.',
    ],
    eLearning: [
      {
        id: 'nptel-cs',
        title: 'NPTEL: Computer Science',
        description: 'Video courses on programming, algorithms, databases and machine learning.',
        type: 'video',
        url: 'https://nptel.ac.in/',
      },
      {
        id: 'spoken-tutorial',
        title: 'Spoken Tutorial (IIT Bombay)',
        description: 'Step-by-step tutorials for Python, Java, C, Linux and other open-source software.',
        type: 'course',
        url: 'https://spoken-tutorial.org/',
      },
      ...commonELearning,
    ],
    infrastructure: [
      {
        id: 'cs-lab',
        name: 'Programming Labs',
        description: 'Three labs with 120 systems, high-speed internet and licensed development tools.',
        imageUrl: '/images/gallery/g4.jpg',
      },
      {
        id: 'cs-classrooms',
        name: 'Smart Classrooms',
        description: 'Classrooms with projectors for live coding demonstrations.',
        imageUrl: '/images/gallery/g2.jpg',
      },
      {
        id: 'cs-server',
        name: 'Server & Networking Room',
        description: 'A dedicated room for networking practicals and hosting student projects.',
      },
    ],
  },
  {
    id: 'dept-computer-applications',
    slug: 'computer-applications',
    name: 'Computer Applications',
    title: 'Department of Computer Applications',
    category: 'self-finance',
    imageUrl: '/images/gallery/g4.jpg',
    established: 2001,
    about: [
      'The Department of Computer Applications offers BCA and MCA, with a focus on software development, web and mobile applications, and databases.',
      'Students build a project in every year of study and do internships with IT companies.',
    ],
    vision: 'To develop skilled software professionals who build useful applications.',
    mission: [
      'Teach application development with current tools and frameworks.',
      'Make project work part of every semester.',
      'Prepare students for IT careers and higher studies.',
    ],
    eLearning: [
      {
        id: 'spoken-tutorial-ca',
        title: 'Spoken Tutorial (IIT Bombay)',
        description: 'Step-by-step tutorials for Java, Python, PHP, databases and Linux.',
        type: 'course',
        url: 'https://spoken-tutorial.org/',
      },
      {
        id: 'nptel-programming',
        title: 'NPTEL: Programming & Software Engineering',
        description: 'Video courses on programming, software engineering and databases.',
        type: 'video',
        url: 'https://nptel.ac.in/',
      },
      ...commonELearning,
    ],
    infrastructure: [
      {
        id: 'ca-lab',
        name: 'Software Development Lab',
        description: '80 systems with development tools, database servers and high-speed internet.',
        imageUrl: '/images/gallery/g4.jpg',
      },
      {
        id: 'ca-project-lab',
        name: 'Project Lab',
        description: 'A lab set aside for final-year and MCA project work.',
      },
    ],
  },
  {
    id: 'dept-business-administration',
    slug: 'business-administration',
    name: 'Business Administration',
    title: 'Department of Business Administration',
    category: 'self-finance',
    imageUrl: '/images/categories/management.jpg',
    established: 2004,
    about: [
      'The Department of Business Administration prepares students for management roles through courses in marketing, human resources, finance and operations.',
      'Learning goes beyond the classroom with management fests, business plan contests, guest lectures by industry leaders and summer internships.',
    ],
    vision: 'To nurture responsible managers and entrepreneurs with a global outlook.',
    mission: [
      'Combine management theory with live projects and case studies.',
      'Develop leadership, communication and teamwork.',
      'Support student start-up ideas through mentoring.',
    ],
    eLearning: [
      {
        id: 'nptel-management',
        title: 'NPTEL: Management',
        description: 'Courses on marketing, HR, operations and business analytics.',
        type: 'video',
        url: 'https://nptel.ac.in/',
      },
      ...commonELearning,
    ],
    infrastructure: [
      {
        id: 'bba-seminar',
        name: 'Seminar Hall',
        description: 'A 150-seat hall for guest lectures, presentations and management fests.',
        imageUrl: '/images/gallery/g2.jpg',
      },
      {
        id: 'bba-library',
        name: 'Department Library',
        description: 'Books, case collections and business magazines for reference.',
        imageUrl: '/images/gallery/g3.jpg',
      },
    ],
  },
  {
    id: 'dept-chemistry',
    slug: 'chemistry',
    name: 'Chemistry',
    title: 'PG & Research Department of Chemistry',
    category: 'aided',
    imageUrl: '/images/categories/science.jpg',
    established: 1990,
    about: [
      'The Department of Chemistry offers undergraduate, postgraduate and doctoral programmes with a strong focus on laboratory work.',
      'Students take part in research projects, science exhibitions and industrial visits to pharmaceutical and chemical companies.',
    ],
    vision: 'To build a strong foundation in chemistry and a scientific approach to problem solving.',
    mission: [
      'Provide well-equipped laboratories for hands-on learning.',
      'Encourage research in applied and environmental chemistry.',
      'Promote safe and responsible laboratory practice.',
    ],
    eLearning: [
      {
        id: 'nptel-chemistry',
        title: 'NPTEL: Chemistry',
        description: 'Video lectures on organic, inorganic, physical and analytical chemistry.',
        type: 'video',
        url: 'https://nptel.ac.in/',
      },
      {
        id: 'epgp-chemistry',
        title: 'e-PG Pathshala: Chemistry',
        description: 'UGC postgraduate e-content with modules and quizzes.',
        type: 'notes',
        url: 'https://epgp.inflibnet.ac.in/',
      },
      ...commonELearning,
    ],
    infrastructure: [
      {
        id: 'chem-lab',
        name: 'Research Laboratory',
        description: 'Equipped with UV-Visible spectrophotometer, pH meters and fume hoods.',
        imageUrl: '/images/categories/science.jpg',
      },
      {
        id: 'chem-ug-lab',
        name: 'UG Practical Labs',
        description: 'Two labs for organic and inorganic practicals with individual work benches.',
      },
    ],
  },
  {
    id: 'dept-hindi',
    slug: 'hindi',
    name: 'Hindi',
    title: 'Department of Hindi',
    category: 'aided',
    imageUrl: '/images/categories/languages.jpg',
    established: 1982,
    about: [
      'The Department of Hindi teaches Hindi language and literature to students across all undergraduate programmes and offers a B.A. and M.A. in Hindi.',
      'The department celebrates Hindi Diwas every year and runs translation and creative writing workshops.',
    ],
    vision: 'To promote the Hindi language and its literature among students.',
    mission: [
      'Teach the language through literature, grammar and translation.',
      'Encourage creative writing and public speaking in Hindi.',
    ],
    eLearning: [
      {
        id: 'epgp-hindi',
        title: 'e-PG Pathshala: Hindi',
        description: 'UGC postgraduate e-content on Hindi literature and linguistics.',
        type: 'notes',
        url: 'https://epgp.inflibnet.ac.in/',
      },
      ...commonELearning,
    ],
    infrastructure: [
      {
        id: 'hindi-library',
        name: 'Department Library',
        description: 'A collection of Hindi literature, reference books and journals.',
        imageUrl: '/images/gallery/g3.jpg',
      },
    ],
  },
]

import type { Navigation } from '@/types/navigation'

// Anchors (#...) scroll to sections on the home page; the rest are future pages.
export const navigation: Navigation = {
  main: [
    { id: 'home', label: 'Home', href: '/' },
    {
      id: 'about',
      label: 'About',
      children: [
        { id: 'about-us', label: 'About Us', href: '#about' },
        { id: 'vision', label: 'Vision & Mission', href: '#vision' },
        { id: 'leadership', label: 'Leadership', href: '/about/leadership' },
        { id: 'faculty', label: 'Faculty', href: '/about/faculty' },
      ],
    },
    {
      id: 'academics',
      label: 'Academics',
      children: [
        {
          id: 'programs',
          label: 'Programs',
          children: [
            { id: 'undergraduate', label: 'Undergraduate', href: '/academics/undergraduate' },
            { id: 'postgraduate', label: 'Postgraduate', href: '/academics/postgraduate' },
          ],
        },
        { id: 'departments', label: 'Departments', href: '/academics/departments' },
        { id: 'calendar', label: 'Academic Calendar', href: '/academics/calendar' },
      ],
    },
    {
      id: 'admissions',
      label: 'Admissions',
      children: [
        { id: 'apply', label: 'Apply Online', href: '/admissions/apply', badge: 'New' },
        { id: 'scholarships', label: 'Scholarships', href: '/admissions/scholarships' },
      ],
    },
    {
      id: 'examination',
      label: 'Examination',
      children: [
        { id: 'exam-timetable', label: 'Exam Timetable', href: '/examination/timetable' },
        { id: 'hall-ticket', label: 'Hall Ticket', href: '/examination/hall-ticket' },
        { id: 'results', label: 'Results', href: '/examination/results' },
        { id: 'revaluation', label: 'Revaluation', href: '/examination/revaluation' },
      ],
    },
    {
      id: 'library',
      label: 'Library',
      children: [
        { id: 'library-about', label: 'About the Library', href: '/library' },
        { id: 'catalogue', label: 'Catalogue Search', href: '/library/catalogue' },
        { id: 'e-resources', label: 'E-Resources', href: '/library/e-resources' },
        { id: 'library-rules', label: 'Timings & Rules', href: '/library/rules' },
      ],
    },
    {
      id: 'hostel',
      label: 'Hostel',
      children: [
        { id: 'hostel-facilities', label: 'Hostel Facilities', href: '/hostel' },
        { id: 'hostel-fees', label: 'Hostel Fees', href: '/hostel/fees' },
        { id: 'hostel-rules', label: 'Rules & Regulations', href: '/hostel/rules' },
        { id: 'hostel-apply', label: 'Apply for Hostel', href: '/hostel/apply' },
      ],
    },
    {
      id: 'transport',
      label: 'Transport',
      children: [
        { id: 'bus-routes', label: 'Bus Routes', href: '/transport/routes' },
        { id: 'transport-fees', label: 'Transport Fees', href: '/transport/fees' },
        { id: 'bus-pass', label: 'Bus Pass', href: '/transport/bus-pass' },
      ],
    },
    {
      id: 'campus',
      label: 'Campus Life',
      children: [
        { id: 'events', label: 'Events', href: '#events' },
        { id: 'gallery', label: 'Gallery', href: '#gallery' },
        { id: 'facilities', label: 'Facilities', href: '/campus/facilities' },
      ],
    },
    { id: 'news', label: 'News', href: '#news' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ],
  topLinks: [
    { label: 'Student Portal', href: '/portal' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
  cta: { label: 'Login', href: '/login' },
}

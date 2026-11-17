import type { Navigation, NavItem } from '@/types/navigation'
import { departments } from './academics'
import { applicationUrl } from './admissions'

// "/#..." links scroll to sections on the home page; the rest are pages.

// Academics > Departments lists every department. The backend will send this list already filled in.
const departmentLinks: NavItem[] = departments.map((department) => ({
  id: `department-${department.slug}`,
  label: department.name,
  href: `/academics/departments/${department.slug}`,
}))

export const navigation: Navigation = {
  main: [
    { id: 'home', label: 'Home', href: '/' },
    {
      id: 'about',
      label: 'About',
      children: [
        { id: 'about-us', label: 'About Us', href: '/about' },
        { id: 'vision', label: 'Vision & Mission', href: '/about/vision-mission' },
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
            { id: 'undergraduate', label: 'Undergraduate (UG)', href: '/academics/programmes/ug' },
            { id: 'postgraduate', label: 'Postgraduate (PG)', href: '/academics/programmes/pg' },
            { id: 'doctoral', label: 'Doctoral (Ph.D.)', href: '/academics/programmes/phd' },
          ],
        },
        { id: 'departments', label: 'Departments', searchable: true, children: departmentLinks },
        { id: 'calendar', label: 'Academic Calendar', href: '/academics/calendar' },
      ],
    },
    {
      id: 'admissions',
      label: 'Admissions',
      children: [
        { id: 'admission-guidance', label: 'Admission Guidance', href: '/admissions' },
        { id: 'programmes-offered', label: 'Programmes Offered', href: '/admissions/programmes' },
        { id: 'eligibility', label: 'Eligibility Criteria', href: '/admissions/eligibility' },
        { id: 'fee-structure', label: 'Fee Structure', href: '/admissions/fees' },
        { id: 'general-instructions', label: 'General Instructions', href: '/admissions/instructions' },
        { id: 'apply', label: 'Apply Online', href: applicationUrl, badge: 'New' },
        { id: 'scholarships', label: 'Scholarships', href: '/admissions/scholarships' },
      ],
    },
    {
      id: 'examination',
      label: 'Examination',
      children: [
        { id: 'exam-timetable', label: 'Exam Timetable', href: '/examination' },
        { id: 'hall-ticket', label: 'Hall Ticket', href: '/examination/hall-ticket' },
        { id: 'results', label: 'Results', href: '/examination/results' },
        { id: 'revaluation', label: 'Revaluation', href: '/examination/revaluation' },
      ],
    },
    {
      id: 'research',
      label: 'Research',
      children: [
        { id: 'research-centres', label: 'Centres of Research', href: '/research' },
        { id: 'research-about', label: 'About the Research Centre', href: '/research/about' },
        { id: 'research-dean', label: 'Dean of Research', href: '/research/dean' },
        { id: 'research-guides', label: 'Ph.D. Guides', href: '/research/guides' },
        { id: 'research-products', label: 'Research Products', href: '/research/products' },
        { id: 'research-gallery', label: 'Gallery', href: '/research/gallery' },
        { id: 'research-certificates', label: 'Certificates', href: '/research/certificates' },
      ],
    },
    {
      id: 'library',
      label: 'Library',
      children: [
        { id: 'library-general', label: 'General Details', href: '/library' },
        { id: 'library-faculty', label: 'Faculty', href: '/library/faculty' },
        { id: 'library-catalogue', label: 'Books Catalogue', href: '/library/catalogue' },
        { id: 'library-journals', label: 'Journals', href: '/library/journals' },
        { id: 'library-e-resources', label: 'E-Resources', href: '/library/e-resources' },
      ],
    },
    {
      id: 'student-corner',
      label: 'Student Corner',
      children: [
        { id: 'student-facilities', label: 'Student Facilities', href: '/student-corner' },
        { id: 'cafeteria', label: 'Cafeteria', href: '/student-corner/cafeteria' },
        { id: 'mens-hostel', label: 'Hostel for Men', href: '/student-corner/mens-hostel' },
        { id: 'womens-hostel', label: 'Hostel for Women', href: '/student-corner/womens-hostel' },
        { id: 'womens-prayer-hall', label: 'Prayer Hall for Women', href: '/student-corner/womens-prayer-hall' },
        { id: 'mens-prayer-hall', label: 'Prayer Hall for Men', href: '/student-corner/mens-prayer-hall' },
        { id: 'transport', label: 'Transport', href: '/student-corner/transport' },
        { id: 'communication-lab', label: 'Communication Lab', href: '/student-corner/communication-lab' },
      ],
    },
    {
      id: 'placement',
      label: 'Placement',
      children: [
        { id: 'placement-general', label: 'General Details', href: '/placement' },
        { id: 'placement-head', label: 'Placement Office Head', href: '/placement/head' },
        { id: 'placement-faculty', label: 'Placement Office Faculty', href: '/placement/faculty' },
        { id: 'placement-drives', label: 'Upcoming Recruitment', href: '/placement/drives' },
        { id: 'placement-eligibility', label: 'Placement Eligibility', href: '/placement/eligibility' },
        { id: 'placement-recruiters', label: 'Our Recruiters', href: '/placement/recruiters' },
      ],
    },
    {
      id: 'iqac',
      label: 'IQAC',
      children: [
        { id: 'iqac-home', label: 'IQAC', href: '/iqac' },
        { id: 'iqac-members', label: 'IQAC Members', href: '/iqac/members' },
        { id: 'naac', label: 'NAAC', href: '/iqac/naac' },
        { id: 'nirf', label: 'NIRF', href: '/iqac/nirf' },
        { id: 'aishe', label: 'AISHE', href: '/iqac/aishe' },
        { id: 'aqar', label: 'AQAR', href: '/iqac/aqar' },
      ],
    },
    {
      id: 'alumni',
      label: 'Alumni',
      children: [
        { id: 'alumni-about', label: 'About Alumni Association', href: '/alumni' },
        { id: 'alumni-members', label: 'Members of Alumni Association', href: '/alumni/members' },
        { id: 'alumni-notable', label: 'Notable Alumni', href: '/alumni/notable' },
        { id: 'alumni-chapters', label: 'Alumni Chapters', href: '/alumni/chapters' },
        { id: 'alumni-well-wishers', label: 'Well Wishers', href: '/alumni/well-wishers' },
      ],
    },
    {
      id: 'campus',
      label: 'Campus Life',
      children: [
        { id: 'events', label: 'Events', href: '/#events' },
        { id: 'gallery', label: 'Gallery', href: '/#gallery' },
        { id: 'facilities', label: 'Facilities', href: '/campus/facilities' },
      ],
    },
  ],
  // Portal addresses are placeholders (".example" is a reserved, non-working domain).
  login: {
    label: 'Login',
    options: [
      {
        id: 'student',
        icon: 'student',
        label: 'Student Login',
        description: 'Marks, attendance, hall ticket and fee payments',
        href: 'https://portal.masqcollege.example/student',
      },
      {
        id: 'staff',
        icon: 'staff',
        label: 'Staff Login',
        description: 'Attendance, marks entry, leave and circulars',
        href: 'https://portal.masqcollege.example/staff',
      },
    ],
  },
  headerAction: { label: 'Admission', href: '/admissions' },
}

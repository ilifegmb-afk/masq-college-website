import type { AdmissionsContent } from '@/types/admissions'
import { applicationUrl } from './links'

// Placeholder admission text and documents - the backend will supply the real ones.
// Document urls are examples (like the home page notices); the backend will supply real file links.
export const admissionsContent: AdmissionsContent = {
  guidance: {
    actions: [{ label: 'Apply Online', href: applicationUrl }],
    blocks: [
      {
        title: 'How to apply',
        steps: [
          'Read the prospectus and choose the course you want to join.',
          'Fill in the online application form and upload your photo and mark sheets.',
          'Pay the application fee online and keep the receipt.',
          'Check the selection list on the college website and notice board.',
          'Attend counselling on the given date with your original certificates.',
          'Pay the fees before the last date to confirm your seat.',
        ],
      },
      {
        title: 'Admission timeline',
        points: [
          'Applications open: first week of May',
          'Last date for UG applications: 31 May',
          'Last date for PG applications: 15 June',
          'Counselling: second and third weeks of June',
          'Classes begin: first week of July',
        ],
      },
      {
        title: 'Need help?',
        paragraphs: [
          'The admission help desk in the Administrative Block is open from 9:30 am to 4:30 pm on all working days. You can also call or email the admission office; the contact details are at the bottom of this page.',
        ],
      },
    ],
  },

  programmes: {
    blocks: [
      {
        paragraphs: [
          'The college offers undergraduate, postgraduate and doctoral courses in Aided and Self-Finance departments. The tables below list every course with its department, duration and number of seats.',
        ],
      },
    ],
  },

  eligibility: {
    blocks: [
      {
        title: 'Undergraduate (UG)',
        points: [
          'A pass in Higher Secondary (10+2) from a State Board, CBSE, ISC or an equivalent board.',
          'Some courses need particular subjects at 10+2, for example Mathematics for B.Sc. Computer Science.',
          'Selection is based on marks in the qualifying examination and the Government reservation policy.',
        ],
      },
      {
        title: 'Postgraduate (PG)',
        points: [
          "A bachelor's degree in the relevant subject from a recognised university.",
          'At least 50% marks in the degree (45% for reserved categories).',
          'MBA and MCA applicants need a valid TANCET, CAT or MAT score.',
        ],
      },
      {
        title: 'Doctoral (Ph.D.)',
        points: [
          "A master's degree with at least 55% marks (50% for reserved categories).",
          'A pass in the university entrance test, or UGC NET / CSIR NET / SET.',
          'A research proposal accepted by the Research Advisory Committee.',
        ],
      },
      {
        paragraphs: ['The exact eligibility for each course is given on its department page.'],
      },
    ],
  },

  fees: {
    blocks: [
      {
        paragraphs: ['Fees are different for Aided and Self-Finance courses. All amounts are per year.'],
      },
      {
        title: 'Please note',
        points: [
          'Fees can be paid online or at the college office, in two instalments.',
          'Hostel and transport fees are separate.',
          'Fees are refunded only as per the UGC refund rules.',
          'Scholarship holders should submit their scholarship papers when paying the fees.',
        ],
      },
    ],
  },

  instructions: {
    blocks: [
      {
        title: 'Documents to bring for admission',
        points: [
          'Transfer Certificate (original)',
          'SSLC (10th) and Higher Secondary (10+2) mark sheets',
          'Community certificate',
          'Aadhaar card',
          'Five passport-size photographs',
          'Degree certificate and mark sheets (PG and Ph.D. applicants)',
        ],
      },
      {
        title: 'General rules',
        points: [
          'Applicants must attend counselling in person with a parent or guardian.',
          'Incomplete applications will not be considered.',
          'Admission is provisional until all original certificates are verified.',
          'Students must follow the college code of conduct and dress code.',
          'Ragging is banned on the campus and is punishable by law.',
        ],
      },
    ],
  },
}

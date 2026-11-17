import type { ExaminationContent } from '@/types/examination'

// Placeholder examination text and documents - the backend will supply the real ones.
// Document urls are examples; the backend will supply real file links.
// The student portal address is a placeholder (".example" is a reserved, non-working domain).
const portalUrl = 'https://portal.masqcollege.example'
export const examinationContent: ExaminationContent = {
  timetable: {
    blocks: [
      {
        paragraphs: [
          'Upcoming examinations are listed below. Your department will announce the date and session of each paper.',
        ],
      },
      {
        title: 'Sessions',
        points: ['Forenoon (FN): 10:00 am to 1:00 pm', 'Afternoon (AN): 2:00 pm to 5:00 pm'],
      },
    ],
  },

  hallTicket: {
    notices: [
      {
        id: 'hall-ticket-nov-2026',
        title: 'Hall tickets for the November 2026 semester examinations are now available',
        date: '2026-11-14',
        href: `${portalUrl}/hall-ticket`,
        isNew: true,
      },
    ],
    actions: [{ label: 'Download Hall Ticket', href: `${portalUrl}/hall-ticket` }],
    blocks: [
      {
        title: 'How to get your hall ticket',
        steps: [
          'Log in to the Student Portal with your register number and date of birth.',
          'Open "Hall Ticket" and check your name, photo and list of papers.',
          'Download and print the hall ticket on A4 paper.',
          'Report any mistake to the examination office at least three days before the first exam.',
        ],
      },
      {
        title: 'You will not get a hall ticket if',
        points: [
          'your attendance is below 75% (unless condoned as per the rules)',
          'you have not paid the examination fee',
          'you have pending library or lab dues',
        ],
      },
      {
        title: 'Rules in the examination hall',
        points: [
          'Reach the hall 15 minutes before the exam begins.',
          'Bring your hall ticket and college ID card to every exam.',
          'Mobile phones, smart watches, notes and bags are not allowed inside.',
          'You may not leave the hall during the first hour.',
          'Any malpractice will lead to cancellation of the exam.',
        ],
      },
    ],
  },

  results: {
    blocks: [
      {
        paragraphs: [
          'Results are published on this page and on the Student Portal. Mark sheets are given out through the departments about four weeks after the results.',
        ],
      },
      {
        title: 'Grading system',
        points: [
          'O (Outstanding): 90 to 100 marks',
          'A+ (Excellent): 80 to 89',
          'A (Very good): 70 to 79',
          'B+ (Good): 60 to 69',
          'B (Above average): 50 to 59',
          'C (Average): 40 to 49',
          'RA (Re-appear): below 40',
        ],
      },
    ],
  },

  revaluation: {
    notices: [
      {
        id: 'revaluation-nov-2026',
        title: 'Revaluation for the November 2026 examinations: apply within 10 days of the results',
        date: '2026-11-10',
        href: `${portalUrl}/revaluation`,
        isNew: true,
        attachments: [
          { id: 'revaluation-form-nov-2026', name: 'Application form', url: '/files/examination/revaluation-form.docx', type: 'doc', sizeBytes: 57344 },
        ],
      },
      {
        id: 'revaluation-results-apr-2026',
        title: 'Revaluation results for the April 2026 examinations are published',
        date: '2026-06-25',
        href: '/files/examination/results/revaluation-apr-2026.pdf',
      },
    ],
    actions: [{ label: 'Apply for Revaluation', href: `${portalUrl}/revaluation` }],
    blocks: [
      {
        paragraphs: [
          'If you are not satisfied with your marks, you can apply for a photocopy of your answer script, retotalling or revaluation within 10 days of the results.',
        ],
      },
      {
        title: 'How to apply',
        steps: [
          'Apply on the Student Portal, or collect the application form from the examination office.',
          'Pay the fee online or at the college office.',
          'Submit the form with a copy of your mark sheet to the examination office.',
          'Revaluation results are published in the Results section.',
        ],
      },
      {
        title: 'Fees (per paper)',
        points: ['Photocopy of answer script: ₹300', 'Retotalling: ₹100', 'Revaluation: ₹500'],
      },
      {
        title: 'Please note',
        points: [
          'Marks may go up or down after revaluation; the revised marks are final.',
          'Practical, project and internal assessment marks cannot be revalued.',
        ],
      },
    ],
  },
}

import type { IqacContent } from '@/types/iqac'

// Placeholder IQAC text, documents and certificates - the backend will supply the real ones.
// Grades, years, codes and file urls are examples; replace them with the college's own records.
export const iqacContent: IqacContent = {
  iqac: {
    blocks: [
      {
        paragraphs: [
          'The Internal Quality Assurance Cell (IQAC) was set up in 2004, as recommended by NAAC, to build a culture of quality in teaching, research and administration. It plans and monitors quality initiatives and prepares the college\'s quality reports.',
        ],
      },
      {
        title: 'Objectives',
        points: [
          'Develop a system for steady, planned improvement in the performance of the college.',
          'Promote good practices in teaching, learning and evaluation.',
          'Collect and act on feedback from students, parents, alumni and employers.',
        ],
      },
      {
        title: 'Functions',
        points: [
          'Prepare the Annual Quality Assurance Report (AQAR) for NAAC.',
          'Organise workshops and seminars on quality in higher education.',
          'Keep records of quality activities and best practices.',
          'Coordinate the NAAC, NIRF and AISHE submissions.',
        ],
      },
    ],
    certificates: [
      { id: 'iqac-constitution', title: 'IQAC constitution order', issuedBy: 'Governing Body', year: '2025-26', url: '/files/iqac/certificates/iqac-constitution-2025-26.pdf' },
    ],
  },

  members: {
    blocks: [
      {
        paragraphs: [
          'The IQAC is chaired by the Principal and includes teachers, administrative staff, the management, and members from industry, alumni and students, as NAAC recommends.',
        ],
      },
    ],
  },

  naac: {
    blocks: [
      {
        paragraphs: [
          'The college is accredited by the National Assessment and Accreditation Council (NAAC). Accreditation is renewed every five years, after the college submits a Self Study Report and a NAAC peer team visits the campus.',
        ],
      },
      {
        title: 'Accreditation history',
        points: ['Cycle 3 (2023): "A" Grade', 'Cycle 2 (2016): "A" Grade', 'Cycle 1 (2009): "B+" Grade'],
      },
    ],
    certificates: [
      { id: 'naac-cycle-3', title: 'NAAC accreditation certificate - Cycle 3', issuedBy: 'NAAC', year: '2023', url: '/files/iqac/naac/certificate-cycle-3.pdf' },
      { id: 'naac-cycle-2', title: 'NAAC accreditation certificate - Cycle 2', issuedBy: 'NAAC', year: '2016', url: '/files/iqac/naac/certificate-cycle-2.pdf' },
      { id: 'naac-cycle-1', title: 'NAAC accreditation certificate - Cycle 1', issuedBy: 'NAAC', year: '2009', url: '/files/iqac/naac/certificate-cycle-1.pdf' },
    ],
  },

  nirf: {
    blocks: [
      {
        paragraphs: [
          'The college takes part every year in the National Institutional Ranking Framework (NIRF) of the Ministry of Education. The participation certificates for each year are below.',
        ],
      },
    ],
    certificates: [
      { id: 'nirf-2025-cert', title: 'NIRF 2025 participation certificate', issuedBy: 'Ministry of Education', year: '2025', url: '/files/iqac/nirf/certificate-2025.pdf' },
      { id: 'nirf-2024-cert', title: 'NIRF 2024 participation certificate', issuedBy: 'Ministry of Education', year: '2024', url: '/files/iqac/nirf/certificate-2024.pdf' },
    ],
  },

  aishe: {
    blocks: [
      {
        paragraphs: [
          'Every year the college submits its data to the All India Survey on Higher Education (AISHE), run by the Ministry of Education. The certificates of submission are below.',
        ],
      },
      { title: 'AISHE code', paragraphs: ['C-00000'] },
    ],
    certificates: [
      { id: 'aishe-2024-25', title: 'AISHE certificate 2024-25', issuedBy: 'Ministry of Education', year: '2024-25', url: '/files/iqac/aishe/certificate-2024-25.pdf' },
      { id: 'aishe-2023-24', title: 'AISHE certificate 2023-24', issuedBy: 'Ministry of Education', year: '2023-24', url: '/files/iqac/aishe/certificate-2023-24.pdf' },
      { id: 'aishe-2022-23', title: 'AISHE certificate 2022-23', issuedBy: 'Ministry of Education', year: '2022-23', url: '/files/iqac/aishe/certificate-2022-23.pdf' },
    ],
  },

  aqar: {
    blocks: [
      {
        paragraphs: [
          'Every year the IQAC prepares an Annual Quality Assurance Report (AQAR) and submits it to NAAC. The NAAC acknowledgements for each year are below.',
        ],
      },
    ],
    certificates: [
      { id: 'aqar-ack-2024-25', title: 'AQAR 2024-25 acknowledgement', issuedBy: 'NAAC', year: '2024-25', url: '/files/iqac/aqar/acknowledgement-2024-25.pdf' },
      { id: 'aqar-ack-2023-24', title: 'AQAR 2023-24 acknowledgement', issuedBy: 'NAAC', year: '2023-24', url: '/files/iqac/aqar/acknowledgement-2023-24.pdf' },
    ],
  },
}

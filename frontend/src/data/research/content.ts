import type { ResearchContent } from '@/types/research'

// Placeholder Research text, photos, documents and certificates - the backend will supply the real ones.
// Photos are free Unsplash images (Unsplash License) in public/images/research/:
//   researcher-bench and chemistry-lab: Bhupathi Srinu · flasks: Pawan Parihar.
// categories/science.jpg is reused from the home page.
export const researchContent: ResearchContent = {
  centres: {
    blocks: [
      {
        paragraphs: [
          'These departments are recognised by the university as research centres. Scholars can register for a Ph.D. under the approved guides of each centre.',
        ],
      },
    ],
  },

  about: {
    images: [{ url: '/images/research/flasks.jpg', alt: 'Glassware with coloured solutions in a college research laboratory' }],
    blocks: [
      {
        paragraphs: [
          'Research at the college brings faculty and Ph.D. scholars together to work on problems that matter to the region and to their subjects. The research centres are supported by a Research Advisory Committee, central laboratories and the college library.',
        ],
      },
      {
        title: 'Facilities',
        points: [
          'Central instrumentation lab with a UV-Visible spectrophotometer and HPLC',
          'A research laboratory in every research department',
          'Access to N-LIST, Shodhganga and DELNET through the library',
          'Plagiarism check with licensed software before a thesis is submitted',
        ],
      },
      {
        title: 'Research Advisory Committee',
        paragraphs: [
          'The committee, chaired by the Principal, reviews Ph.D. progress every six months, approves research proposals and guides faculty applying for funded projects.',
        ],
      },
    ],
  },

  dean: {
    blocks: [
      {
        paragraphs: [
          'The Dean of Research coordinates Ph.D. admissions, research committees, funded projects and publications across all the research centres.',
        ],
      },
    ],
  },

  guides: {
    blocks: [{ paragraphs: ['Approved research supervisors and the number of Ph.D. scholars working with them.'] }],
  },

  products: {
    blocks: [{ paragraphs: ['Patents, publications, books and funded projects by our faculty and research scholars.'] }],
  },

  gallery: {
    images: [
      { url: '/images/research/researcher-bench.jpg', alt: 'Researcher in protective gear working at a laboratory bench' },
      { url: '/images/research/chemistry-lab.jpg', alt: 'Scholar carrying out an experiment in the chemistry research lab' },
      { url: '/images/categories/science.jpg', alt: 'Students using a microscope in the laboratory' },
      { url: '/images/research/flasks.jpg', alt: 'Glassware with coloured solutions on a laboratory shelf' },
    ],
    blocks: [{ paragraphs: ['A look inside our research laboratories.'] }],
  },

  certificates: {
    blocks: [{ paragraphs: ['Recognitions and approvals received by the research centres.'] }],
    certificates: [
      { id: 'recognition-commerce', title: 'Recognition as Research Centre - Commerce', issuedBy: 'Your University', year: '2010', url: '/files/research/certificates/recognition-commerce.pdf' },
      { id: 'recognition-chemistry', title: 'Recognition as Research Centre - Chemistry', issuedBy: 'Your University', year: '2012', url: '/files/research/certificates/recognition-chemistry.pdf' },
      { id: 'ethics-committee', title: 'Institutional Ethics Committee registration', issuedBy: 'Your University', year: '2021', url: '/files/research/certificates/ethics-committee.pdf' },
    ],
  },
}

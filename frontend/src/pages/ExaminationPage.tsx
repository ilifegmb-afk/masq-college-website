import { useParams } from 'react-router'
import { PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { examinationSections } from '@/features/examination'
import { useDocumentTitle, useExamination } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

// Header photo: free Unsplash image (Unsplash License) by Aswin Thomas Bony, public/images/examination/.

/** /examination/:section? - exam timetable, hall ticket, results and revaluation. */
export function ExaminationPage() {
  const { section = examinationSections[0].id } = useParams()
  const { institute } = useSite()
  const { data: examination, error, loading } = useExamination()
  const activeSection = examinationSections.find((item) => item.id === section)

  useDocumentTitle(activeSection ? `${activeSection.label} | Examination | ${institute.name}` : undefined)

  if (!activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title="Examination"
        trail={['Examination']}
        current={activeSection.label}
        subtitle="Timetables, hall tickets, results and revaluation, all in one place."
        imageUrl="/images/examination/exam-hall.jpg"
      />
      <Section>
        <SideNavLayout label="Examination sections" basePath="/examination" items={examinationSections} activeId={activeSection.id}>
          {loading && <p>Loading...</p>}
          {error && <p>We could not load the examination details. Please try again.</p>}
          {examination && <View examination={examination} />}
        </SideNavLayout>
      </Section>
    </>
  )
}

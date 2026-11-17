import { useParams } from 'react-router'
import { PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { studentCornerSections } from '@/features/studentCorner'
import { useDocumentTitle, useStudentCorner } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/** /student-corner/:section? - facilities, cafeteria, hostels, prayer halls, transport and the communication lab. */
export function StudentCornerPage() {
  const { section = studentCornerSections[0].id } = useParams()
  const { institute } = useSite()
  const { data: studentCorner, error, loading } = useStudentCorner()
  const activeSection = studentCornerSections.find((item) => item.id === section)

  useDocumentTitle(activeSection ? `${activeSection.label} | Student Corner | ${institute.name}` : undefined)

  if (!activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title="Student Corner"
        trail={['Student Corner']}
        current={activeSection.label}
        subtitle="Food, a place to stay, buses, prayer halls and more: facilities that make student life easier."
        imageUrl="/images/gallery/g5.jpg"
      />
      <Section>
        <SideNavLayout
          label="Student Corner sections"
          basePath="/student-corner"
          items={studentCornerSections}
          activeId={activeSection.id}
        >
          {loading && <p>Loading...</p>}
          {error && <p>We could not load the Student Corner. Please try again.</p>}
          {studentCorner && <View studentCorner={studentCorner} />}
        </SideNavLayout>
      </Section>
    </>
  )
}

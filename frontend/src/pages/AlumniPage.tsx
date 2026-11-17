import { useParams } from 'react-router'
import { PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { alumniSections } from '@/features/alumni'
import { useAlumni, useDocumentTitle } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/** /alumni/:section? - the alumni association, its members, notable alumni, chapters and well wishers. */
export function AlumniPage() {
  const { section = alumniSections[0].id } = useParams()
  const { institute } = useSite()
  const { data: alumni, error, loading } = useAlumni()
  const activeSection = alumniSections.find((item) => item.id === section)

  useDocumentTitle(activeSection ? `${activeSection.label} | Alumni | ${institute.name}` : undefined)

  if (!activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title="Alumni"
        trail={['Alumni']}
        current={activeSection.label}
        subtitle="Once a student here, always part of the family."
        imageUrl="/images/gallery/g6.jpg"
      />
      <Section>
        <SideNavLayout label="Alumni sections" basePath="/alumni" items={alumniSections} activeId={activeSection.id}>
          {loading && <p>Loading...</p>}
          {error && <p>We could not load this page. Please try again.</p>}
          {alumni && <View alumni={alumni} />}
        </SideNavLayout>
      </Section>
    </>
  )
}

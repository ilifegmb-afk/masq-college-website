import { useParams } from 'react-router'
import { PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { iqacSections } from '@/features/iqac'
import { useDocumentTitle, useIqac } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/** /iqac/:section? - IQAC, IQAC members, NAAC, NIRF, AISHE and AQAR, each with its certificates. */
export function IqacPage() {
  const { section = iqacSections[0].id } = useParams()
  const { institute } = useSite()
  const { data: iqac, error, loading } = useIqac()
  const activeSection = iqacSections.find((item) => item.id === section)

  useDocumentTitle(activeSection ? `${activeSection.label} | ${institute.name}` : undefined)

  if (!activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title="Quality Assurance"
        trail={['IQAC']}
        current={activeSection.label}
        subtitle="Accreditation, rankings and quality reports of the college."
        imageUrl="/images/vision/planning.jpg"
      />
      <Section>
        <SideNavLayout label="IQAC sections" basePath="/iqac" items={iqacSections} activeId={activeSection.id}>
          {loading && <p>Loading...</p>}
          {error && <p>We could not load this page. Please try again.</p>}
          {iqac && <View iqac={iqac} />}
        </SideNavLayout>
      </Section>
    </>
  )
}

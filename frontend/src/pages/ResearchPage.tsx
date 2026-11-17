import { useParams } from 'react-router'
import { PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { researchSections } from '@/features/research'
import { useDocumentTitle, useResearch } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/** /research/:section? - research centres, about, dean, Ph.D. guides, outputs, gallery and certificates. */
export function ResearchPage() {
  const { section = researchSections[0].id } = useParams()
  const { institute } = useSite()
  const { data: research, error, loading } = useResearch()
  const activeSection = researchSections.find((item) => item.id === section)

  useDocumentTitle(activeSection ? `${activeSection.label} | Research | ${institute.name}` : undefined)

  if (!activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title="Research"
        trail={['Research']}
        current={activeSection.label}
        subtitle="Research centres, Ph.D. guides and the work of our scholars."
        imageUrl="/images/research/flasks.jpg"
      />
      <Section>
        <SideNavLayout label="Research sections" basePath="/research" items={researchSections} activeId={activeSection.id}>
          {loading && <p>Loading...</p>}
          {error && <p>We could not load this page. Please try again.</p>}
          {research && <View research={research} />}
        </SideNavLayout>
      </Section>
    </>
  )
}

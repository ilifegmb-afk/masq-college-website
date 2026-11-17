import { useParams } from 'react-router'
import { PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { placementSections } from '@/features/placement'
import { useDocumentTitle, usePlacement } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/** /placement/:section? - general details, placement office, upcoming drives, eligibility and recruiters. */
export function PlacementPage() {
  const { section = placementSections[0].id } = useParams()
  const { institute } = useSite()
  const { data: placement, error, loading } = usePlacement()
  const activeSection = placementSections.find((item) => item.id === section)

  useDocumentTitle(activeSection ? `${activeSection.label} | Placement | ${institute.name}` : undefined)

  if (!activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title="Placement"
        trail={['Placement']}
        current={activeSection.label}
        subtitle="Training, campus drives and careers with leading companies."
        imageUrl="/images/placement/placed-students.jpg"
      />
      <Section>
        <SideNavLayout label="Placement sections" basePath="/placement" items={placementSections} activeId={activeSection.id}>
          {loading && <p>Loading...</p>}
          {error && <p>We could not load this page. Please try again.</p>}
          {placement && <View placement={placement} />}
        </SideNavLayout>
      </Section>
    </>
  )
}

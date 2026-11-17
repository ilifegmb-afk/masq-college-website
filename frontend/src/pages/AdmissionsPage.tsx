import { useParams } from 'react-router'
import { PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { admissionSections } from '@/features/admissions'
import { useAdmissions, useDocumentTitle } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/** /admissions/:section? - guidance, programmes offered, eligibility, fees and general instructions. */
export function AdmissionsPage() {
  const { section = admissionSections[0].id } = useParams()
  const { institute } = useSite()
  const { data: admissions, error, loading } = useAdmissions()
  const activeSection = admissionSections.find((item) => item.id === section)

  useDocumentTitle(activeSection ? `${activeSection.label} | Admissions | ${institute.name}` : undefined)

  if (!activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title="Admissions"
        trail={['Admissions']}
        current={activeSection.label}
        subtitle="Everything you need to join the college: courses, eligibility, fees and instructions."
        imageUrl="/images/hero/admissions.jpg"
      />
      <Section>
        <SideNavLayout label="Admission sections" basePath="/admissions" items={admissionSections} activeId={activeSection.id}>
          {loading && <p>Loading...</p>}
          {error && <p>We could not load the admission details. Please try again.</p>}
          {admissions && <View admissions={admissions} />}
        </SideNavLayout>
      </Section>
    </>
  )
}

import { useParams } from 'react-router'
import { FullPageMessage, PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { departmentSections } from '@/features/departments'
import { useDepartment, useDocumentTitle } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/** /academics/departments/:slug/:section? - the same page for every department. */
export function DepartmentPage() {
  const { slug = '', section = departmentSections[0].id } = useParams()
  const { institute } = useSite()
  const { data: department, error, loading } = useDepartment(slug)
  const activeSection = departmentSections.find((item) => item.id === section)

  useDocumentTitle(department ? `${department.title} | ${institute.name}` : undefined)

  if (loading) return <FullPageMessage fill="section" title="Loading..." />
  if (error) {
    return <FullPageMessage fill="section" title="Something went wrong" description="We could not load this department. Please try again." />
  }
  if (!department || !activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title={department.title}
        trail={['Academics', 'Departments']}
        current={department.name}
        subtitle={`Established in ${department.established}`}
        imageUrl={department.imageUrl}
      />
      <Section>
        <SideNavLayout
          label="Department sections"
          basePath={`/academics/departments/${department.slug}`}
          items={departmentSections}
          activeId={activeSection.id}
        >
          <View department={department} />
        </SideNavLayout>
      </Section>
    </>
  )
}

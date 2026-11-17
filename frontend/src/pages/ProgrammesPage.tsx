import { useParams, useSearchParams } from 'react-router'
import { DepartmentCoursesCard } from '@/components/cards'
import { PageHeader, Section } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { PillLinks } from '@/features/programmes'
import type { PillLink } from '@/features/programmes'
import { useCoursesByDegree, useDocumentTitle } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/**
 * /academics/programmes/:degree?category=...
 * Lists the departments that offer courses at the chosen degree (UG, PG or Ph.D.),
 * optionally only Aided or only Self-Finance departments.
 */
export function ProgrammesPage() {
  const { degree: degreeId } = useParams()
  const [searchParams] = useSearchParams()
  const { institute, degrees, departmentCategories } = useSite()

  // No degree in the address means the first one (UG). An unknown ?category= shows every category.
  const degree = degreeId ? degrees.find((item) => item.id === degreeId) : degrees[0]
  const category = departmentCategories.find((item) => item.id === searchParams.get('category'))

  const { data, error, loading } = useCoursesByDegree(degree?.id ?? 'ug')
  useDocumentTitle(degree ? `${degree.name} Programmes | ${institute.name}` : undefined)

  if (!degree) return <NotFoundPage />

  const departments = (data ?? []).filter((item) => !category || item.department.category === category.id)

  const basePath = '/academics/programmes'
  const categoryQuery = category ? `?category=${category.id}` : ''

  const degreeLinks: PillLink[] = degrees.map((item) => ({
    id: item.id,
    label: `${item.name} (${item.code})`,
    to: `${basePath}/${item.id}${categoryQuery}`,
    active: item.id === degree.id,
  }))

  const categoryLinks: PillLink[] = [
    { id: 'all', label: 'All', to: `${basePath}/${degree.id}`, active: !category },
    ...departmentCategories.map((item) => ({
      id: item.id,
      label: item.name,
      to: `${basePath}/${degree.id}?category=${item.id}`,
      active: item.id === category?.id,
    })),
  ]

  return (
    <>
      <PageHeader
        title={`${degree.name} Programmes`}
        trail={['Academics', 'Programmes']}
        current={degree.name}
        subtitle="See which departments offer each level of study and the courses they run."
        imageUrl="/images/gallery/g2.jpg"
      />

      <Section>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <PillLinks label="Degree" links={degreeLinks} />
          <PillLinks label="Category" links={categoryLinks} variant="subtle" />
        </div>

        <div className="mt-10">
          {loading && <p>Loading...</p>}
          {error && <p>We could not load the programmes. Please try again.</p>}
          {data && departments.length === 0 && (
            <p className="rounded-2xl border border-dashed border-line bg-surface p-8 text-center">
              No departments match this selection.
            </p>
          )}
          {departments.length > 0 && (
            <ul className="grid gap-6 md:grid-cols-2">
              {departments.map((item) => (
                <li key={item.department.id}>
                  <DepartmentCoursesCard department={item.department} courses={item.courses} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>
    </>
  )
}

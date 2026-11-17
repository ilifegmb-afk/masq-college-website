import { CourseCard } from '@/components/cards'
import { PanelHeading } from '@/components/ui'
import { useSite } from '@/context/site-context'
import type { DepartmentDetail } from '@/types/academics'
import { EmptyPanel } from './EmptyPanel'

/** The department's courses, grouped by degree: UG, PG and Ph.D. */
export function DepartmentProgrammes({ department }: { department: DepartmentDetail }) {
  const { degrees } = useSite()

  const groups = degrees
    .map((degree) => ({
      degree,
      courses: department.courses.filter((course) => course.degree.id === degree.id),
    }))
    .filter((group) => group.courses.length > 0)

  return (
    <div>
      <PanelHeading title="Programmes" description="Courses offered by the department, with duration, seats and eligibility." />

      {groups.length === 0 ? (
        <EmptyPanel>Programme details will be added soon.</EmptyPanel>
      ) : (
        <div className="space-y-10">
          {groups.map(({ degree, courses }) => (
            <section key={degree.id} aria-label={degree.name}>
              <h3 className="mb-4 text-lg">
                {degree.name} ({degree.code})
              </h3>
              <ul className="grid gap-5 md:grid-cols-2">
                {courses.map((course) => (
                  <li key={course.id}>
                    <CourseCard course={course} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}

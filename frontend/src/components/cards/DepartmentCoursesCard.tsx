import { ArrowLink } from '@/components/ui'
import { formatYears } from '@/lib'
import type { DepartmentWithCourses } from '@/types/academics'

/** One department on the Programmes page, with the courses it offers at the selected degree. */
export function DepartmentCoursesCard({ department, courses }: DepartmentWithCourses) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg">
      <img src={department.imageUrl} alt="" loading="lazy" className="aspect-3/1 w-full object-cover" />

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl">{department.name}</h2>
        <p className="text-sm">{department.title}</p>

        <ul className="mt-4 divide-y divide-line border-y border-line">
          {courses.map((course) => (
            <li key={course.id} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3">
              <span className="font-medium text-heading">{course.name}</span>
              <span className="text-sm">
                {formatYears(course.durationYears)} · {course.intake} seats
              </span>
            </li>
          ))}
        </ul>

        <ArrowLink href={`/academics/departments/${department.slug}/programmes`} className="mt-auto pt-5">
          View department
        </ArrowLink>
      </div>
    </article>
  )
}

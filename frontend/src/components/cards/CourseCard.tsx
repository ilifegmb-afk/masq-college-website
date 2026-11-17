import { FiClock, FiUsers } from 'react-icons/fi'
import { MetaList } from '@/components/ui'
import { formatYears } from '@/lib'
import type { CourseDetail } from '@/types/academics'

/** A course with its programme, duration, seats and eligibility. */
export function CourseCard({ course }: { course: CourseDetail }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-lg">
      <h4 className="text-lg">{course.name}</h4>
      <p className="text-sm">{course.programme.name}</p>

      <MetaList
        className="mt-3"
        items={[
          { icon: FiClock, label: formatYears(course.durationYears) },
          { icon: FiUsers, label: `${course.intake} seats` },
        ]}
      />

      <p className="mt-4 rounded-xl bg-surface p-3 text-sm">
        <span className="font-semibold text-heading">Eligibility: </span>
        {course.eligibility}
      </p>
    </article>
  )
}

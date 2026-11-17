import { FiCheckCircle, FiEye, FiTarget } from 'react-icons/fi'
import { FacultyCard } from '@/components/cards'
import { PanelHeading } from '@/components/ui'
import type { DepartmentDetail } from '@/types/academics'

/** Department introduction, vision and mission, and the head of the department. */
export function DepartmentAbout({ department }: { department: DepartmentDetail }) {
  const head = department.faculty.find((member) => member.isHead)

  return (
    <div>
      <PanelHeading title="About the Department" />

      <div className="space-y-4">
        {department.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-6">
          <h3 className="flex items-center gap-2 text-lg">
            <FiEye aria-hidden className="text-primary" />
            Vision
          </h3>
          <p className="mt-3">{department.vision}</p>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6">
          <h3 className="flex items-center gap-2 text-lg">
            <FiTarget aria-hidden className="text-primary" />
            Mission
          </h3>
          <ul className="mt-3 space-y-2">
            {department.mission.map((point) => (
              <li key={point} className="flex gap-2">
                <FiCheckCircle aria-hidden className="mt-1 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {head && (
        <div className="mt-10">
          <h3 className="mb-4 text-lg">Head of the Department</h3>
          <div className="max-w-xl">
            <FacultyCard member={head} />
          </div>
        </div>
      )}
    </div>
  )
}

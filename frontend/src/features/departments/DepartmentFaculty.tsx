import { FacultyCard } from '@/components/cards'
import { PanelHeading } from '@/components/ui'
import type { DepartmentDetail } from '@/types/academics'
import { EmptyPanel } from './EmptyPanel'

/** All staff of the department, head first. */
export function DepartmentFaculty({ department }: { department: DepartmentDetail }) {
  const members = [...department.faculty].sort((a, b) => Number(b.isHead ?? false) - Number(a.isHead ?? false))

  return (
    <div>
      <PanelHeading title="Faculty" description={`Meet the teachers of the ${department.title}.`} />

      {members.length === 0 ? (
        <EmptyPanel>Faculty details will be added soon.</EmptyPanel>
      ) : (
        <ul className="grid gap-5 md:grid-cols-2">
          {members.map((member) => (
            <li key={member.id}>
              <FacultyCard member={member} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

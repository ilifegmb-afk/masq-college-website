import { AppLink, Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import type { FacultyWithDepartment } from '@/types/about'

const columns: TableColumn[] = [
  { label: 'Name' },
  { label: 'Designation' },
  { label: 'Department' },
  { label: 'Qualification' },
]

/** Every teacher in one table; the department name opens that department's faculty page. */
export function FacultyDirectory({ faculty }: { faculty: FacultyWithDepartment[] }) {
  const rows = faculty.map((member) => ({
    id: member.id,
    cells: [
      member.name,
      member.designation,
      <AppLink
        href={`/academics/departments/${member.department.slug}/faculty`}
        className="text-primary transition-colors hover:underline"
      >
        {member.department.name}
      </AppLink>,
      member.qualification,
    ],
  }))

  return <Table columns={columns} rows={rows} />
}

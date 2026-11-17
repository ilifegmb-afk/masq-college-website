import { AppLink, Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import type { PhdGuideDetail } from '@/types/research'

const columns: TableColumn[] = [
  { label: 'Guide' },
  { label: 'Department' },
  { label: 'Specialization' },
  { label: 'Scholars guiding', align: 'right' },
  { label: 'Ph.D.s awarded', align: 'right' },
]

/** Approved Ph.D. supervisors; the department name opens that department's page. */
export function GuidesTable({ guides }: { guides: PhdGuideDetail[] }) {
  const rows = guides.map((guide) => ({
    id: guide.facultyId,
    cells: [
      guide.member.name,
      <AppLink
        href={`/academics/departments/${guide.department.slug}/faculty`}
        className="text-primary transition-colors hover:underline"
      >
        {guide.department.name}
      </AppLink>,
      guide.member.specialization,
      guide.scholarsGuiding,
      guide.scholarsAwarded,
    ],
  }))

  return <Table columns={columns} rows={rows} />
}

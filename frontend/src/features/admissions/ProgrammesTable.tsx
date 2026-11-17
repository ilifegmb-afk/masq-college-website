import { Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { formatYears } from '@/lib'
import type { AdmissionCourse } from '@/types/admissions'

const columns: TableColumn[] = [
  { label: 'Course' },
  { label: 'Department' },
  { label: 'Duration', align: 'right' },
  { label: 'Seats', align: 'right' },
]

/** Every course the college offers, one table per degree (UG, PG, Ph.D.). */
export function ProgrammesTable({ courses }: { courses: AdmissionCourse[] }) {
  const { degrees } = useSite()

  return (
    <div className="space-y-8">
      {degrees.map((degree) => {
        const rows = courses
          .filter((course) => course.degree.id === degree.id)
          .map((course) => ({
            id: course.id,
            cells: [course.name, course.department.name, formatYears(course.durationYears), course.intake],
          }))

        if (rows.length === 0) return null

        return (
          <section key={degree.id} aria-label={degree.name}>
            <h3 className="mb-3 text-lg">
              {degree.name} ({degree.code})
            </h3>
            <Table columns={columns} rows={rows} />
          </section>
        )
      })}
    </div>
  )
}

import { Table } from '@/components/ui'
import type { TableColumn, TableRow } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { useFormatters } from '@/hooks'
import type { AdmissionCourse } from '@/types/admissions'

const columns: TableColumn[] = [
  { label: 'Course' },
  { label: 'Department' },
  { label: 'Tuition fee', align: 'right' },
  { label: 'Other fees', align: 'right' },
  { label: 'Total per year', align: 'right' },
]

/** Yearly fees of every course, one table per category (Aided, Self-Finance), UG courses first. */
export function FeeTables({ courses }: { courses: AdmissionCourse[] }) {
  const { degrees, departmentCategories } = useSite()
  const { money } = useFormatters()

  const degreeOrder = (course: AdmissionCourse) => degrees.findIndex((degree) => degree.id === course.degree.id)

  return (
    <div className="space-y-8">
      {departmentCategories.map((category) => {
        const rows: TableRow[] = courses
          .filter((course) => course.department.category === category.id)
          .sort((a, b) => degreeOrder(a) - degreeOrder(b))
          .flatMap((course) => {
            if (!course.fee) return []
            const { tuitionFee, otherFees } = course.fee
            return [
              {
                id: course.id,
                cells: [
                  course.name,
                  course.department.name,
                  money(tuitionFee),
                  money(otherFees),
                  <span className="font-semibold text-heading">{money(tuitionFee + otherFees)}</span>,
                ],
              },
            ]
          })

        if (rows.length === 0) return null

        return (
          <section key={category.id} aria-label={`${category.name} fees`}>
            <h3 className="mb-3 text-lg">{category.name}</h3>
            <Table columns={columns} rows={rows} />
          </section>
        )
      })}
    </div>
  )
}

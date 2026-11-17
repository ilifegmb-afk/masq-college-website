import { Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import { useFormatters } from '@/hooks'
import type { ExamSchedule } from '@/types/examination'

const columns: TableColumn[] = [
  { label: 'Examination' },
  { label: 'From', align: 'right' },
  { label: 'To', align: 'right' },
  { label: 'Timings' },
]

/** Upcoming examination periods with their dates and timings. */
export function ExamScheduleTable({ schedules }: { schedules: ExamSchedule[] }) {
  const { date } = useFormatters()

  const rows = schedules.map((schedule) => ({
    id: schedule.id,
    cells: [schedule.title, date(schedule.startDate), date(schedule.endDate), schedule.timings],
  }))

  return <Table columns={columns} rows={rows} />
}

import { FiExternalLink } from 'react-icons/fi'
import { Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import { useFormatters } from '@/hooks'
import type { ExamResult } from '@/types/examination'

const columns: TableColumn[] = [
  { label: 'Examination' },
  { label: 'Published on', align: 'right' },
  { label: 'Result', align: 'right' },
]

/** Published results, newest first, each with a link to open it. */
export function ResultsTable({ results }: { results: ExamResult[] }) {
  const { date } = useFormatters()

  const rows = results.map((result) => ({
    id: result.id,
    cells: [
      result.title,
      date(result.publishedOn),
      <a
        href={result.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
      >
        View results
        <FiExternalLink aria-hidden />
      </a>,
    ],
  }))

  return <Table columns={columns} rows={rows} />
}

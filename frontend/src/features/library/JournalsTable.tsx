import { Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import type { JournalFormat, LibraryDetail } from '@/types/library'

const columns: TableColumn[] = [
  { label: 'Journal / magazine' },
  { label: 'Department' },
  { label: 'Publisher' },
  { label: 'Frequency' },
  { label: 'Format' },
]

const formatLabels: Record<JournalFormat, string> = {
  print: 'Print',
  online: 'Online',
}

/** Journals and magazines the library subscribes to. */
export function JournalsTable({ journals }: { journals: LibraryDetail['journals'] }) {
  const rows = journals.map((journal) => ({
    id: journal.id,
    cells: [
      journal.title,
      journal.department?.name ?? 'General',
      journal.publisher,
      journal.frequency,
      formatLabels[journal.format],
    ],
  }))

  return <Table columns={columns} rows={rows} />
}

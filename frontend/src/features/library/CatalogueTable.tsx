import { Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import { useFormatters } from '@/hooks'
import type { LibraryDetail } from '@/types/library'

const columns: TableColumn[] = [
  { label: 'Department' },
  { label: 'No. of titles', align: 'right' },
  { label: 'No. of volumes', align: 'right' },
]

/** Books held for each department, with a total row. */
export function CatalogueTable({ holdings }: { holdings: LibraryDetail['holdings'] }) {
  const { number } = useFormatters()

  const rows = holdings.map((holding) => ({
    id: holding.departmentId,
    cells: [holding.department.name, number(holding.titles), number(holding.volumes)],
  }))

  const totalTitles = holdings.reduce((sum, holding) => sum + holding.titles, 0)
  const totalVolumes = holdings.reduce((sum, holding) => sum + holding.volumes, 0)

  return <Table columns={columns} rows={rows} footer={['Total', number(totalTitles), number(totalVolumes)]} />
}

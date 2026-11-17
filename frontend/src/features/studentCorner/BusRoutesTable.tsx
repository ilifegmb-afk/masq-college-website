import { Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import { useFormatters } from '@/hooks'
import type { BusRoute } from '@/types/studentCorner'

const columns: TableColumn[] = [
  { label: 'Route no.' },
  { label: 'Stops' },
  { label: 'Departs at', align: 'right' },
  { label: 'Fee per year', align: 'right' },
]

/** College bus routes: number, stops in order, departure time and yearly fee. */
export function BusRoutesTable({ routes }: { routes: BusRoute[] }) {
  const { money } = useFormatters()

  const rows = routes.map((route) => ({
    id: route.id,
    cells: [route.routeNo, route.stops.join(' → '), route.departureTime, money(route.feePerYear)],
  }))

  return <Table columns={columns} rows={rows} />
}

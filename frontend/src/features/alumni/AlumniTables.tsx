import { Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import type { AlumniMember, WellWisher } from '@/types/alumni'

const memberColumns: TableColumn[] = [{ label: 'Name' }, { label: 'Role' }, { label: 'Batch' }, { label: 'Occupation' }]

/** Office bearers of the alumni association. */
export function MembersTable({ members }: { members: AlumniMember[] }) {
  const rows = members.map((member) => ({
    id: member.id,
    cells: [member.name, member.role, member.batch, member.occupation],
  }))

  return <Table columns={memberColumns} rows={rows} />
}

const wellWisherColumns: TableColumn[] = [{ label: 'Well wisher' }, { label: 'Contribution' }]

/** People and organisations who have supported the college. */
export function WellWishersTable({ wellWishers }: { wellWishers: WellWisher[] }) {
  const rows = wellWishers.map((wellWisher) => ({
    id: wellWisher.id,
    cells: [wellWisher.name, wellWisher.contribution],
  }))

  return <Table columns={wellWisherColumns} rows={rows} />
}

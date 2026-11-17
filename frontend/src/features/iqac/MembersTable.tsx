import { Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import type { IqacMember } from '@/types/iqac'

const columns: TableColumn[] = [{ label: 'Name' }, { label: 'Role in IQAC' }, { label: 'Designation' }]

/** The IQAC committee: name, role in the IQAC and their position. */
export function MembersTable({ members }: { members: IqacMember[] }) {
  const rows = members.map((member) => ({
    id: member.id,
    cells: [member.name, member.role, member.designation],
  }))

  return <Table columns={columns} rows={rows} />
}

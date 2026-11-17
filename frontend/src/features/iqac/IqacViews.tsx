import { ContentPanel } from '@/components/ui'
import type { IqacDetail } from '@/types/iqac'
import { MembersTable } from './MembersTable'

// One component per side button of the IQAC page. Each shows its text and certificates.

interface ViewProps {
  iqac: IqacDetail
}

export function IqacView({ iqac }: ViewProps) {
  return <ContentPanel title="Internal Quality Assurance Cell (IQAC)" content={iqac.content.iqac} />
}

export function MembersView({ iqac }: ViewProps) {
  return (
    <ContentPanel title="IQAC Members" content={iqac.content.members}>
      <MembersTable members={iqac.members} />
    </ContentPanel>
  )
}

export function NaacView({ iqac }: ViewProps) {
  return <ContentPanel title="NAAC" description="National Assessment and Accreditation Council" content={iqac.content.naac} />
}

export function NirfView({ iqac }: ViewProps) {
  return <ContentPanel title="NIRF" description="National Institutional Ranking Framework" content={iqac.content.nirf} />
}

export function AisheView({ iqac }: ViewProps) {
  return <ContentPanel title="AISHE" description="All India Survey on Higher Education" content={iqac.content.aishe} />
}

export function AqarView({ iqac }: ViewProps) {
  return <ContentPanel title="AQAR" description="Annual Quality Assurance Report" content={iqac.content.aqar} />
}

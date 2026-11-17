import type { ComponentType } from 'react'
import { FiAward, FiBarChart2, FiCheckCircle, FiClipboard, FiDatabase, FiUsers } from 'react-icons/fi'
import type { SideNavItem } from '@/components/ui'
import type { IqacDetail } from '@/types/iqac'
import { AisheView, AqarView, IqacView, MembersView, NaacView, NirfView } from './IqacViews'

export interface IqacSection extends SideNavItem {
  view: ComponentType<{ iqac: IqacDetail }>
}

/** The side buttons of the IQAC page, in order. The first one is shown at /iqac. */
export const iqacSections: IqacSection[] = [
  { id: 'iqac', label: 'IQAC', icon: FiCheckCircle, view: IqacView },
  { id: 'members', label: 'IQAC Members', icon: FiUsers, view: MembersView },
  { id: 'naac', label: 'NAAC', icon: FiAward, view: NaacView },
  { id: 'nirf', label: 'NIRF', icon: FiBarChart2, view: NirfView },
  { id: 'aishe', label: 'AISHE', icon: FiDatabase, view: AisheView },
  { id: 'aqar', label: 'AQAR', icon: FiClipboard, view: AqarView },
]

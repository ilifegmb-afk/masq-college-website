import type { ComponentType } from 'react'
import { FiBriefcase, FiCalendar, FiCheckSquare, FiInfo, FiUserCheck, FiUsers } from 'react-icons/fi'
import type { SideNavItem } from '@/components/ui'
import type { PlacementDetail } from '@/types/placement'
import { DrivesView, EligibilityView, GeneralView, HeadView, RecruitersView, TeamView } from './PlacementViews'

export interface PlacementSection extends SideNavItem {
  view: ComponentType<{ placement: PlacementDetail }>
}

/** The side buttons of the Placement page, in order. The first one is shown at /placement. */
export const placementSections: PlacementSection[] = [
  { id: 'general', label: 'General Details', icon: FiInfo, view: GeneralView },
  { id: 'head', label: 'Placement Office Head', icon: FiUserCheck, view: HeadView },
  { id: 'faculty', label: 'Placement Office Faculty', icon: FiUsers, view: TeamView },
  { id: 'drives', label: 'Upcoming Recruitment', icon: FiCalendar, view: DrivesView },
  { id: 'eligibility', label: 'Placement Eligibility', icon: FiCheckSquare, view: EligibilityView },
  { id: 'recruiters', label: 'Our Recruiters', icon: FiBriefcase, view: RecruitersView },
]

import type { ComponentType } from 'react'
import { FiHeart, FiInfo, FiMapPin, FiStar, FiUsers } from 'react-icons/fi'
import type { SideNavItem } from '@/components/ui'
import type { AlumniDetail } from '@/types/alumni'
import { AboutAssociationView, ChaptersView, MembersView, NotableAlumniView, WellWishersView } from './AlumniViews'

export interface AlumniSection extends SideNavItem {
  view: ComponentType<{ alumni: AlumniDetail }>
}

/** The side buttons of the Alumni page, in order. The first one is shown at /alumni. */
export const alumniSections: AlumniSection[] = [
  { id: 'about', label: 'About Alumni Association', icon: FiInfo, view: AboutAssociationView },
  { id: 'members', label: 'Members of Alumni Association', icon: FiUsers, view: MembersView },
  { id: 'notable', label: 'Notable Alumni', icon: FiStar, view: NotableAlumniView },
  { id: 'chapters', label: 'Alumni Chapters', icon: FiMapPin, view: ChaptersView },
  { id: 'well-wishers', label: 'Well Wishers', icon: FiHeart, view: WellWishersView },
]

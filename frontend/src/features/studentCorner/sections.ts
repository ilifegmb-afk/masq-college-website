import type { ComponentType } from 'react'
import { FiCoffee, FiGrid, FiHeadphones, FiHome, FiSunrise, FiTruck } from 'react-icons/fi'
import type { SideNavItem } from '@/components/ui'
import type { StudentCornerDetail } from '@/types/studentCorner'
import {
  CafeteriaView,
  CommunicationLabView,
  FacilitiesView,
  MensHostelView,
  MensPrayerHallView,
  TransportView,
  WomensHostelView,
  WomensPrayerHallView,
} from './StudentCornerViews'

export interface StudentCornerSection extends SideNavItem {
  view: ComponentType<{ studentCorner: StudentCornerDetail }>
}

/** The side buttons of the Student Corner page, in order. The first one is shown at /student-corner. */
export const studentCornerSections: StudentCornerSection[] = [
  { id: 'facilities', label: 'Student Facilities', icon: FiGrid, view: FacilitiesView },
  { id: 'cafeteria', label: 'Cafeteria', icon: FiCoffee, view: CafeteriaView },
  { id: 'mens-hostel', label: 'Hostel for Men', icon: FiHome, view: MensHostelView },
  { id: 'womens-hostel', label: 'Hostel for Women', icon: FiHome, view: WomensHostelView },
  { id: 'womens-prayer-hall', label: 'Prayer Hall for Women', icon: FiSunrise, view: WomensPrayerHallView },
  { id: 'mens-prayer-hall', label: 'Prayer Hall for Men', icon: FiSunrise, view: MensPrayerHallView },
  { id: 'transport', label: 'Transport', icon: FiTruck, view: TransportView },
  { id: 'communication-lab', label: 'Communication Lab', icon: FiHeadphones, view: CommunicationLabView },
]

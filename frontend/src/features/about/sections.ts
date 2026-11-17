import type { ComponentType } from 'react'
import { FiEye, FiInfo, FiStar, FiUsers } from 'react-icons/fi'
import type { SideNavItem } from '@/components/ui'
import type { AboutDetail } from '@/types/about'
import { AboutUsView, FacultyView, LeadershipView, VisionMissionView } from './AboutViews'

export interface AboutSection extends SideNavItem {
  view: ComponentType<{ about: AboutDetail }>
}

/** The side buttons of the About page, in order. The first one is shown at /about. */
export const aboutSections: AboutSection[] = [
  { id: 'about-us', label: 'About Us', icon: FiInfo, view: AboutUsView },
  { id: 'vision-mission', label: 'Vision & Mission', icon: FiEye, view: VisionMissionView },
  { id: 'leadership', label: 'Leadership', icon: FiStar, view: LeadershipView },
  { id: 'faculty', label: 'Faculty', icon: FiUsers, view: FacultyView },
]

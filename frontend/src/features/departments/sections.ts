import type { ComponentType } from 'react'
import type { IconType } from 'react-icons'
import { FiBookOpen, FiInfo, FiLayers, FiMonitor, FiUsers } from 'react-icons/fi'
import type { DepartmentDetail } from '@/types/academics'
import { DepartmentAbout } from './DepartmentAbout'
import { DepartmentELearning } from './DepartmentELearning'
import { DepartmentFaculty } from './DepartmentFaculty'
import { DepartmentInfrastructure } from './DepartmentInfrastructure'
import { DepartmentProgrammes } from './DepartmentProgrammes'

export interface DepartmentSection {
  /** Last part of the address, e.g. /academics/departments/commerce/faculty */
  id: string
  label: string
  icon: IconType
  view: ComponentType<{ department: DepartmentDetail }>
}

/**
 * The side buttons every department page has, in order. The first is shown at the
 * department's main address. Add a tab here and it appears for every department.
 */
export const departmentSections: DepartmentSection[] = [
  { id: 'about', label: 'About the Department', icon: FiInfo, view: DepartmentAbout },
  { id: 'faculty', label: 'Faculty', icon: FiUsers, view: DepartmentFaculty },
  { id: 'programmes', label: 'Programmes', icon: FiBookOpen, view: DepartmentProgrammes },
  { id: 'e-learning', label: 'E-Learning', icon: FiMonitor, view: DepartmentELearning },
  { id: 'infrastructure', label: 'Infrastructure', icon: FiLayers, view: DepartmentInfrastructure },
]

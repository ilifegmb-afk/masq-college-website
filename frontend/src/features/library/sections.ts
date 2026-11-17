import type { ComponentType } from 'react'
import { FiBook, FiFileText, FiGlobe, FiInfo, FiUsers } from 'react-icons/fi'
import type { SideNavItem } from '@/components/ui'
import type { LibraryDetail } from '@/types/library'
import { CatalogueView, EResourcesView, FacultyView, GeneralView, JournalsView } from './LibraryViews'

export interface LibrarySection extends SideNavItem {
  view: ComponentType<{ library: LibraryDetail }>
}

/** The side buttons of the Library page, in order. The first one is shown at /library. */
export const librarySections: LibrarySection[] = [
  { id: 'general', label: 'General Details', icon: FiInfo, view: GeneralView },
  { id: 'faculty', label: 'Faculty', icon: FiUsers, view: FacultyView },
  { id: 'catalogue', label: 'Books Catalogue', icon: FiBook, view: CatalogueView },
  { id: 'journals', label: 'Journals', icon: FiFileText, view: JournalsView },
  { id: 'e-resources', label: 'E-Resources', icon: FiGlobe, view: EResourcesView },
]

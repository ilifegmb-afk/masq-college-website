import type { ComponentType } from 'react'
import { FiAward, FiBox, FiImage, FiInfo, FiLayers, FiUserCheck, FiUsers } from 'react-icons/fi'
import type { SideNavItem } from '@/components/ui'
import type { ResearchDetail } from '@/types/research'
import {
  AboutCentreView,
  CentresView,
  CertificatesView,
  DeanView,
  GalleryView,
  GuidesView,
  ProductsView,
} from './ResearchViews'

export interface ResearchSection extends SideNavItem {
  view: ComponentType<{ research: ResearchDetail }>
}

/** The side buttons of the Research page, in order. The first one is shown at /research. */
export const researchSections: ResearchSection[] = [
  { id: 'centres', label: 'Centres of Research', icon: FiLayers, view: CentresView },
  { id: 'about', label: 'About the Research Centre', icon: FiInfo, view: AboutCentreView },
  { id: 'dean', label: 'Dean of Research', icon: FiUserCheck, view: DeanView },
  { id: 'guides', label: 'Ph.D. Guides', icon: FiUsers, view: GuidesView },
  { id: 'products', label: 'Research Products', icon: FiBox, view: ProductsView },
  { id: 'gallery', label: 'Gallery', icon: FiImage, view: GalleryView },
  { id: 'certificates', label: 'Certificates', icon: FiAward, view: CertificatesView },
]

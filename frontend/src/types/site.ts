import type { Degree, DepartmentCategory } from './academics'
import type { AnnouncementPopupContent } from './announcement'
import type { FooterContent } from './footer'
import type { HomeContent } from './home'
import type { Institute } from './institute'
import type { Navigation } from './navigation'

/** Everything the backend returns for one institute's public site. */
export interface SiteContent {
  institute: Institute
  navigation: Navigation
  footer: FooterContent
  home: HomeContent
  /** UG, PG, Ph.D., in display order. */
  degrees: Degree[]
  /** Aided, Self-Finance. */
  departmentCategories: DepartmentCategory[]
  /** Popup shown when the website opens. */
  announcement: AnnouncementPopupContent
}

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
}

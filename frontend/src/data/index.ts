import type { SiteContent } from '@/types/site'
import { degrees, departmentCategories } from './academics'
import { announcement } from './announcement'
import { footer } from './footer'
import { home } from './home'
import { institute } from './institute'
import { navigation } from './navigation'

/** Mock of the payload the backend will return for one institute. */
export const siteContent: SiteContent = { institute, navigation, footer, home, degrees, departmentCategories, announcement }

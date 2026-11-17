import { Outlet } from 'react-router'
import { useSite } from '@/context/site-context'
import { AnnouncementPopup } from './AnnouncementPopup'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollManager } from './ScrollManager'

/**
 * Page chrome shared by every route; the current page renders in place of the Outlet.
 * It stays mounted while visitors move between pages, so the announcement popup shows once per visit.
 */
export function MainLayout() {
  const { announcement } = useSite()

  return (
    <>
      <ScrollManager />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      {announcement.enabled && <AnnouncementPopup announcement={announcement} />}
    </>
  )
}

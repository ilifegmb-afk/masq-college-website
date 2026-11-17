import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from '@/components/layout'
import { FullPageMessage } from '@/components/ui'
import { SiteProvider } from '@/context/SiteProvider'
import { useSiteContent } from '@/hooks'
import { hideSplash } from '@/lib'
import { AboutPage } from '@/pages/AboutPage'
import { AdmissionsPage } from '@/pages/AdmissionsPage'
import { AlumniPage } from '@/pages/AlumniPage'
import { DepartmentPage } from '@/pages/DepartmentPage'
import { ExaminationPage } from '@/pages/ExaminationPage'
import { HomePage } from '@/pages/HomePage'
import { IqacPage } from '@/pages/IqacPage'
import { LibraryPage } from '@/pages/LibraryPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PlacementPage } from '@/pages/PlacementPage'
import { ProgrammesPage } from '@/pages/ProgrammesPage'
import { ResearchPage } from '@/pages/ResearchPage'
import { StudentCornerPage } from '@/pages/StudentCornerPage'

function App() {
  const { site, error } = useSiteContent()

  // The loading screen in index.html covers the page until the content (or an error) arrives.
  useEffect(() => {
    if (site || error) hideSplash()
  }, [site, error])

  if (error) {
    return <FullPageMessage title="Something went wrong" description="We could not load the site. Please try again." />
  }

  if (!site) {
    return null
  }

  return (
    <SiteProvider site={site}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about/:section?" element={<AboutPage />} />
            <Route path="academics/departments/:slug/:section?" element={<DepartmentPage />} />
            <Route path="academics/programmes/:degree?" element={<ProgrammesPage />} />
            <Route path="admissions/:section?" element={<AdmissionsPage />} />
            <Route path="examination/:section?" element={<ExaminationPage />} />
            <Route path="research/:section?" element={<ResearchPage />} />
            <Route path="library/:section?" element={<LibraryPage />} />
            <Route path="student-corner/:section?" element={<StudentCornerPage />} />
            <Route path="placement/:section?" element={<PlacementPage />} />
            <Route path="iqac/:section?" element={<IqacPage />} />
            <Route path="alumni/:section?" element={<AlumniPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SiteProvider>
  )
}

export default App

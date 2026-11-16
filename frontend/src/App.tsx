import { useEffect } from 'react'
import { MainLayout } from '@/components/layout'
import { FullPageMessage } from '@/components/ui'
import { SiteProvider } from '@/context/SiteProvider'
import { useSiteContent } from '@/hooks'
import { HomePage } from '@/pages/HomePage'

function App() {
  const { site, error } = useSiteContent()
  const institute = site?.institute

  useEffect(() => {
    if (institute) document.title = `${institute.name} | ${institute.tagline}`
  }, [institute])

  if (error) {
    return <FullPageMessage title="Something went wrong" description="We could not load the site. Please try again." />
  }

  if (!site) {
    return <FullPageMessage title="Loading..." />
  }

  return (
    <SiteProvider site={site}>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </SiteProvider>
  )
}

export default App

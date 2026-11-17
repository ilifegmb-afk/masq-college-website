import { useParams } from 'react-router'
import { PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { aboutSections } from '@/features/about'
import { useAbout, useDocumentTitle } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/** /about/:section? - about us, vision & mission, leadership and the faculty directory. */
export function AboutPage() {
  const { section = aboutSections[0].id } = useParams()
  const { institute } = useSite()
  const { data: about, error, loading } = useAbout()
  const activeSection = aboutSections.find((item) => item.id === section)

  useDocumentTitle(activeSection ? `${activeSection.label} | ${institute.name}` : undefined)

  if (!activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title={`About ${institute.name}`}
        trail={['About']}
        current={activeSection.label}
        subtitle={institute.tagline}
        imageUrl="/images/hero/campus.jpg"
      />
      <Section>
        <SideNavLayout label="About sections" basePath="/about" items={aboutSections} activeId={activeSection.id}>
          {loading && <p>Loading...</p>}
          {error && <p>We could not load this page. Please try again.</p>}
          {about && <View about={about} />}
        </SideNavLayout>
      </Section>
    </>
  )
}

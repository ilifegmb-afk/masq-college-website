import { useParams } from 'react-router'
import { PageHeader, Section, SideNavLayout } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { librarySections } from '@/features/library'
import { useDocumentTitle, useLibrary } from '@/hooks'
import { NotFoundPage } from './NotFoundPage'

/** /library/:section? - general details, faculty, books catalogue, journals and e-resources. */
export function LibraryPage() {
  const { section = librarySections[0].id } = useParams()
  const { institute } = useSite()
  const { data: library, error, loading } = useLibrary()
  const activeSection = librarySections.find((item) => item.id === section)

  useDocumentTitle(activeSection ? `${activeSection.label} | Library | ${institute.name}` : undefined)

  if (!activeSection) return <NotFoundPage />

  const View = activeSection.view

  return (
    <>
      <PageHeader
        title="Library"
        trail={['Library']}
        current={activeSection.label}
        subtitle="Books, journals and e-resources for every department, and a quiet place to study."
        imageUrl="/images/gallery/g3.jpg"
      />
      <Section>
        <SideNavLayout label="Library sections" basePath="/library" items={librarySections} activeId={activeSection.id}>
          {loading && <p>Loading...</p>}
          {error && <p>We could not load the library details. Please try again.</p>}
          {library && <View library={library} />}
        </SideNavLayout>
      </Section>
    </>
  )
}

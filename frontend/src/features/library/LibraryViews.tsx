import { FacultyCard, ResourceCard } from '@/components/cards'
import { ContentPanel, PanelHeading } from '@/components/ui'
import type { LibraryDetail } from '@/types/library'
import { CatalogueTable } from './CatalogueTable'
import { JournalsTable } from './JournalsTable'

// One component per side button of the Library page.

interface ViewProps {
  library: LibraryDetail
}

export function GeneralView({ library }: ViewProps) {
  return (
    <ContentPanel
      title="General Details"
      description="Timings, membership, facilities and rules of the library."
      content={library.content.general}
    />
  )
}

export function FacultyView({ library }: ViewProps) {
  // The librarian first, then the other staff.
  const staff = [...library.staff].sort((a, b) => Number(b.isHead ?? false) - Number(a.isHead ?? false))

  return (
    <div>
      <PanelHeading title="Faculty" description="The librarian and library staff who look after the collection and help readers." />
      <ul className="grid gap-5 md:grid-cols-2">
        {staff.map((member) => (
          <li key={member.id}>
            <FacultyCard member={member} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CatalogueView({ library }: ViewProps) {
  return (
    <ContentPanel title="Books Catalogue" content={library.content.catalogue}>
      <CatalogueTable holdings={library.holdings} />
    </ContentPanel>
  )
}

export function JournalsView({ library }: ViewProps) {
  return (
    <ContentPanel title="Journals" content={library.content.journals}>
      <JournalsTable journals={library.journals} />
    </ContentPanel>
  )
}

export function EResourcesView({ library }: ViewProps) {
  return (
    <ContentPanel title="E-Resources" content={library.content.eResources}>
      <ul className="space-y-4">
        {library.eResources.map((resource) => (
          <li key={resource.id}>
            <ResourceCard resource={resource} />
          </li>
        ))}
      </ul>
    </ContentPanel>
  )
}

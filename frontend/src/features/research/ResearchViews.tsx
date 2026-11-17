import { DepartmentCoursesCard, LeaderMessage } from '@/components/cards'
import { ContentPanel } from '@/components/ui'
import type { ResearchDetail } from '@/types/research'
import { GuidesTable } from './GuidesTable'
import { ProductsTable } from './ProductsTable'

// One component per side button of the Research page.

interface ViewProps {
  research: ResearchDetail
}

export function CentresView({ research }: ViewProps) {
  return (
    <ContentPanel title="Centres of Research" content={research.content.centres}>
      <ul className="grid gap-6 md:grid-cols-2">
        {research.centres.map((centre) => (
          <li key={centre.department.id}>
            <DepartmentCoursesCard department={centre.department} courses={centre.courses} />
          </li>
        ))}
      </ul>
    </ContentPanel>
  )
}

export function AboutCentreView({ research }: ViewProps) {
  return <ContentPanel title="About the Research Centre" content={research.content.about} />
}

export function DeanView({ research }: ViewProps) {
  return (
    <ContentPanel title="Dean of Research" content={research.content.dean}>
      <LeaderMessage leader={research.dean} />
    </ContentPanel>
  )
}

export function GuidesView({ research }: ViewProps) {
  return (
    <ContentPanel title="Ph.D. Guides" content={research.content.guides}>
      <GuidesTable guides={research.guides} />
    </ContentPanel>
  )
}

export function ProductsView({ research }: ViewProps) {
  return (
    <ContentPanel title="Research Products" content={research.content.products}>
      <ProductsTable products={research.products} />
    </ContentPanel>
  )
}

export function GalleryView({ research }: ViewProps) {
  return <ContentPanel title="Gallery" content={research.content.gallery} />
}

export function CertificatesView({ research }: ViewProps) {
  return <ContentPanel title="Certificates" content={research.content.certificates} />
}

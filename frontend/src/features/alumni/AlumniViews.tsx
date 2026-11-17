import { ContentPanel } from '@/components/ui'
import type { AlumniDetail } from '@/types/alumni'
import { AlumnusCard, ChapterCard } from './AlumniCards'
import { MembersTable, WellWishersTable } from './AlumniTables'

// One component per side button of the Alumni page.

interface ViewProps {
  alumni: AlumniDetail
}

export function AboutAssociationView({ alumni }: ViewProps) {
  return <ContentPanel title="About Alumni Association" content={alumni.content.about} />
}

export function MembersView({ alumni }: ViewProps) {
  return (
    <ContentPanel title="Members of Alumni Association" content={alumni.content.members}>
      <MembersTable members={alumni.members} />
    </ContentPanel>
  )
}

export function NotableAlumniView({ alumni }: ViewProps) {
  return (
    <ContentPanel title="Notable Alumni" content={alumni.content.notable}>
      <ul className="grid gap-5 md:grid-cols-2">
        {alumni.notable.map((alumnus) => (
          <li key={alumnus.id}>
            <AlumnusCard alumnus={alumnus} />
          </li>
        ))}
      </ul>
    </ContentPanel>
  )
}

export function ChaptersView({ alumni }: ViewProps) {
  return (
    <ContentPanel title="Alumni Chapters" content={alumni.content.chapters}>
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {alumni.chapters.map((chapter) => (
          <li key={chapter.id}>
            <ChapterCard chapter={chapter} />
          </li>
        ))}
      </ul>
    </ContentPanel>
  )
}

export function WellWishersView({ alumni }: ViewProps) {
  return (
    <ContentPanel title="Well Wishers" content={alumni.content.wellWishers}>
      <WellWishersTable wellWishers={alumni.wellWishers} />
    </ContentPanel>
  )
}

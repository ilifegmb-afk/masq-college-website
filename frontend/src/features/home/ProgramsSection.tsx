import { ProgramCard } from '@/components/cards'
import { CardGridSection } from '@/components/ui'
import type { ListSection } from '@/types/common'
import type { Program } from '@/types/home'

export function ProgramsSection({ content }: { content: ListSection<Program> }) {
  return (
    <CardGridSection
      id="programs"
      intro={content.intro}
      items={content.items}
      columns="sm:grid-cols-2 lg:grid-cols-3"
      renderItem={(program) => <ProgramCard program={program} />}
    />
  )
}

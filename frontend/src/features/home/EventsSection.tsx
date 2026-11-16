import { EventCard } from '@/components/cards'
import { CardGridSection } from '@/components/ui'
import type { ListSection } from '@/types/common'
import type { EventItem } from '@/types/home'

export function EventsSection({ content }: { content: ListSection<EventItem> }) {
  return (
    <CardGridSection
      id="events"
      intro={content.intro}
      items={content.items}
      columns="lg:grid-cols-2"
      renderItem={(event) => <EventCard event={event} />}
    />
  )
}

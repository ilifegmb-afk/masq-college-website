import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'
import { MetaList } from '@/components/ui'
import type { MetaItem } from '@/components/ui'
import { useFormatters } from '@/hooks'
import type { EventItem } from '@/types/home'

export function EventCard({ event }: { event: EventItem }) {
  const { date } = useFormatters()

  const meta: MetaItem[] = [
    { icon: FiCalendar, label: date(event.date) },
    ...(event.time ? [{ icon: FiClock, label: event.time }] : []),
    { icon: FiMapPin, label: event.location },
  ]

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-xl sm:flex-row">
      <a href={event.href} className="block sm:w-2/5 sm:shrink-0">
        <img src={event.imageUrl} alt="" loading="lazy" className="h-56 w-full object-cover sm:h-full" />
      </a>
      <div className="flex flex-1 flex-col items-start justify-center gap-3 p-6">
        <MetaList items={meta} />
        <h3 className="text-xl">
          <a href={event.href} className="transition-colors hover:text-primary">
            {event.title}
          </a>
        </h3>
      </div>
    </article>
  )
}

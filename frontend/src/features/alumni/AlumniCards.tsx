import { FiCalendar, FiMail, FiMapPin, FiUser } from 'react-icons/fi'
import { Avatar } from '@/components/ui'
import type { AlumniChapter, NotableAlumnus } from '@/types/alumni'

/** A notable former student: photo (or initials), name, what they are known for and their batch. */
export function AlumnusCard({ alumnus }: { alumnus: NotableAlumnus }) {
  return (
    <article className="flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-lg">
      <Avatar name={alumnus.name} photoUrl={alumnus.photoUrl} />
      <div className="min-w-0">
        <h3 className="text-base">{alumnus.name}</h3>
        <p className="text-sm font-medium text-primary">{alumnus.achievement}</p>
        <p className="mt-0.5 text-sm">{alumnus.batch}</p>
      </div>
    </article>
  )
}

/** An alumni chapter: city or country, coordinator, year started and contact email. */
export function ChapterCard({ chapter }: { chapter: AlumniChapter }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-lg">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary">
          <FiMapPin aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-base">{chapter.name}</h3>
          <p className="text-sm">{chapter.country}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
        <li className="flex items-center gap-2">
          <FiUser aria-hidden className="shrink-0 text-primary" />
          {chapter.coordinator}
        </li>
        <li className="flex items-center gap-2">
          <FiCalendar aria-hidden className="shrink-0 text-primary" />
          Since {chapter.since}
        </li>
        {chapter.email && (
          <li>
            <a href={`mailto:${chapter.email}`} className="flex items-center gap-2 break-all transition-colors hover:text-primary">
              <FiMail aria-hidden className="shrink-0 text-primary" />
              {chapter.email}
            </a>
          </li>
        )}
      </ul>
    </article>
  )
}

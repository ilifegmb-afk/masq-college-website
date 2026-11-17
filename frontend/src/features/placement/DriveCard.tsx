import { FiBookOpen, FiExternalLink, FiMapPin, FiTrendingUp } from 'react-icons/fi'
import { ButtonLink } from '@/components/ui'
import { useFormatters } from '@/hooks'
import type { PlacementDrive } from '@/types/placement'

/** An upcoming recruitment drive: calendar date, company, role, who can apply, salary, venue and a register button. */
export function DriveCard({ drive }: { drive: PlacementDrive }) {
  const { date, dateParts } = useFormatters()
  const { day, month } = dateParts(drive.date)

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-lg">
      <div className="flex gap-4">
        <time
          dateTime={drive.date}
          className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 text-primary"
        >
          <span className="sr-only">{date(drive.date)}</span>
          <span aria-hidden className="text-xl font-bold leading-none">
            {day}
          </span>
          <span aria-hidden className="mt-1 text-[0.7rem] font-semibold uppercase leading-none">
            {month}
          </span>
        </time>
        <div className="min-w-0">
          <h3 className="text-lg">{drive.company}</h3>
          <p className="text-sm font-medium text-primary">{drive.role}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
        <li className="flex gap-2">
          <FiBookOpen aria-hidden className="mt-0.5 shrink-0 text-primary" />
          <span>
            <span className="font-medium text-heading">Eligible: </span>
            {drive.eligibleCourses}
          </span>
        </li>
        {drive.salary && (
          <li className="flex gap-2">
            <FiTrendingUp aria-hidden className="mt-0.5 shrink-0 text-primary" />
            <span>
              <span className="font-medium text-heading">Salary: </span>
              {drive.salary}
            </span>
          </li>
        )}
        <li className="flex gap-2">
          <FiMapPin aria-hidden className="mt-0.5 shrink-0 text-primary" />
          <span>
            <span className="font-medium text-heading">Venue: </span>
            {drive.venue}
          </span>
        </li>
      </ul>

      {drive.registerUrl && (
        <ButtonLink
          href={drive.registerUrl}
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 self-start"
        >
          Register
          <FiExternalLink aria-hidden />
        </ButtonLink>
      )}
    </article>
  )
}

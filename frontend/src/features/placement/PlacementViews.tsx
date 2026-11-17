import { FacultyCard, LeaderMessage } from '@/components/cards'
import { ContentPanel } from '@/components/ui'
import type { PlacementDetail } from '@/types/placement'
import { DriveCard } from './DriveCard'

// One component per side button of the Placement page.

interface ViewProps {
  placement: PlacementDetail
}

export function GeneralView({ placement }: ViewProps) {
  return <ContentPanel title="General Details" content={placement.content.general} />
}

export function HeadView({ placement }: ViewProps) {
  return (
    <ContentPanel title="Placement Office Head" content={placement.content.head}>
      <LeaderMessage leader={placement.head} />
    </ContentPanel>
  )
}

export function TeamView({ placement }: ViewProps) {
  return (
    <ContentPanel title="Placement Office Faculty" content={placement.content.team}>
      <ul className="grid gap-5 md:grid-cols-2">
        {placement.team.map((member) => (
          <li key={member.id}>
            <FacultyCard member={member} />
          </li>
        ))}
      </ul>
    </ContentPanel>
  )
}

export function DrivesView({ placement }: ViewProps) {
  return (
    <ContentPanel title="Upcoming Recruitment" content={placement.content.drives}>
      <ul className="grid gap-5 md:grid-cols-2">
        {placement.drives.map((drive) => (
          <li key={drive.id}>
            <DriveCard drive={drive} />
          </li>
        ))}
      </ul>
    </ContentPanel>
  )
}

export function EligibilityView({ placement }: ViewProps) {
  return <ContentPanel title="Placement Eligibility" content={placement.content.eligibility} />
}

export function RecruitersView({ placement }: ViewProps) {
  return (
    <ContentPanel title="Our Recruiters" content={placement.content.recruiters}>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
        {placement.recruiters.map((recruiter) => (
          <li
            key={recruiter.id}
            className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-white px-4 py-6 transition-shadow hover:shadow-lg"
          >
            <img src={recruiter.logoUrl} alt="" loading="lazy" className="h-10 w-full object-contain" />
            <span className="text-sm font-medium text-heading">{recruiter.name}</span>
          </li>
        ))}
      </ul>
    </ContentPanel>
  )
}

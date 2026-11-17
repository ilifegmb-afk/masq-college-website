import { LeaderCard, LeaderMessage } from '@/components/cards'
import { ContentPanel } from '@/components/ui'
import type { AboutDetail } from '@/types/about'
import { FacultyDirectory } from './FacultyDirectory'

// One component per side button of the About page.

interface ViewProps {
  about: AboutDetail
}

export function AboutUsView({ about }: ViewProps) {
  return <ContentPanel title="About Us" content={about.content.aboutUs} />
}

export function VisionMissionView({ about }: ViewProps) {
  return <ContentPanel title="Vision & Mission" content={about.content.visionMission} />
}

export function LeadershipView({ about }: ViewProps) {
  // Leaders with a message (e.g. the Principal) are shown first, in full; the rest as cards.
  const withMessage = about.leaders.filter((leader) => leader.message)
  const others = about.leaders.filter((leader) => !leader.message)

  return (
    <ContentPanel title="Leadership" description="The management and officers of the college." content={about.content.leadership}>
      <div className="space-y-8">
        {withMessage.map((leader) => (
          <LeaderMessage key={leader.id} leader={leader} />
        ))}
        <ul className="grid gap-5 md:grid-cols-2">
          {others.map((leader) => (
            <li key={leader.id}>
              <LeaderCard leader={leader} />
            </li>
          ))}
        </ul>
      </div>
    </ContentPanel>
  )
}

export function FacultyView({ about }: ViewProps) {
  return (
    <ContentPanel title="Faculty" content={about.content.faculty}>
      <FacultyDirectory faculty={about.faculty} />
    </ContentPanel>
  )
}

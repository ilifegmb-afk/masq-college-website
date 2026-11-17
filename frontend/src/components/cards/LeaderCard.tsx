import { Avatar } from '@/components/ui'
import type { Leader } from '@/types/about'

/** A member of the management or a college officer: photo (or initials), name, role and qualification. */
export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <article className="flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-lg">
      <Avatar name={leader.name} photoUrl={leader.photoUrl} />
      <div className="min-w-0">
        <h3 className="text-base">{leader.name}</h3>
        <p className="text-sm font-medium text-primary">{leader.role}</p>
        {leader.qualification && <p className="mt-0.5 text-sm">{leader.qualification}</p>}
      </div>
    </article>
  )
}

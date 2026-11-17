import { Avatar } from '@/components/ui'
import type { Leader } from '@/types/about'

/** A leader's message to visitors (e.g. the Principal's), shown in full with their name and photo. */
export function LeaderMessage({ leader }: { leader: Leader }) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <Avatar name={leader.name} photoUrl={leader.photoUrl} size="lg" />
        <div>
          <h3 className="text-xl">Message from the {leader.role}</h3>
          <p className="mt-1 font-medium text-heading">{leader.name}</p>
          {leader.qualification && <p className="text-sm">{leader.qualification}</p>}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {leader.message?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

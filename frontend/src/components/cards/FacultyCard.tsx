import { FiAward, FiBriefcase, FiMail } from 'react-icons/fi'
import { Avatar, MetaList } from '@/components/ui'
import type { StaffMember } from '@/types/academics'

/** A staff member: portrait (or initials), name, designation, qualification and contact. */
export function FacultyCard({ member }: { member: StaffMember }) {
  return (
    <article className="flex h-full gap-4 rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-lg">
      <Avatar name={member.name} photoUrl={member.photoUrl} />

      <div className="min-w-0 flex-1">
        <h3 className="text-base">{member.name}</h3>
        <p className="text-sm font-medium text-primary">{member.designation}</p>
        <p className="mt-0.5 text-sm">{member.qualification}</p>

        <MetaList
          className="mt-3 border-t border-line pt-3"
          items={[
            { icon: FiAward, label: member.specialization },
            { icon: FiBriefcase, label: `${member.experienceYears} years experience` },
          ]}
        />
        <a
          href={`mailto:${member.email}`}
          className="mt-1.5 flex items-center gap-1.5 break-all text-sm transition-colors hover:text-primary"
        >
          <FiMail aria-hidden className="shrink-0 text-primary" />
          {member.email}
        </a>
      </div>
    </article>
  )
}

import type { CSSProperties } from 'react'
import { Marquee, Section, SectionHeading } from '@/components/ui'
import type { Recruiter, RecruitersContent } from '@/types/home'

const marqueeSpeed = { '--duration': '35s' } as CSSProperties

/** "Our recruiters": the companies that hire the college's graduates, as two logo strips scrolling in opposite directions. */
export function RecruitersSection({ content }: { content: RecruitersContent }) {
  const middle = Math.ceil(content.items.length / 2)
  const rows = [content.items.slice(0, middle), content.items.slice(middle)].filter((row) => row.length > 0)

  return (
    <Section id="recruiters" tone="muted">
      <SectionHeading intro={content.intro} align="center" />

      <div className="relative flex flex-col overflow-hidden">
        {rows.map((row, index) => (
          <Marquee key={index} reverse={index % 2 === 1} pauseOnHover style={marqueeSpeed}>
            {row.map((recruiter) => (
              <RecruiterLogo key={recruiter.id} recruiter={recruiter} />
            ))}
          </Marquee>
        ))}

        {/* Soft fade at both ends of the strips. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-surface motion-reduce:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-surface motion-reduce:hidden" />
      </div>
    </Section>
  )
}

function RecruiterLogo({ recruiter }: { recruiter: Recruiter }) {
  return (
    <div className="flex w-40 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-white p-5 sm:w-44">
      <img src={recruiter.logoUrl} alt="" className="h-12 w-full object-contain" />
      <span className="text-sm font-medium text-heading">{recruiter.name}</span>
    </div>
  )
}

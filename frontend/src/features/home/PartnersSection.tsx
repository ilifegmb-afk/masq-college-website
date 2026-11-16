import { Section } from '@/components/ui'
import type { Partner, PartnersContent } from '@/types/home'

export function PartnersSection({ content }: { content: PartnersContent }) {
  return (
    <Section>
      <div className="grid items-center gap-8 lg:grid-cols-12">
        <h2 className="text-2xl lg:col-span-3">{content.title}</h2>
        <ul className="flex flex-wrap items-center justify-center gap-4 lg:col-span-9 lg:justify-between">
          {content.items.map((partner) => (
            <li key={partner.id}>
              <PartnerMark partner={partner} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/** Logo when one is provided, otherwise the partner's name. */
function PartnerMark({ partner }: { partner: Partner }) {
  const mark = partner.logoUrl ? (
    <img src={partner.logoUrl} alt={partner.name} loading="lazy" className="h-10 w-auto object-contain" />
  ) : (
    <span className="rounded-lg border border-line px-5 py-3 text-sm font-semibold text-heading">{partner.name}</span>
  )

  return partner.href ? (
    <a href={partner.href} target="_blank" rel="noopener noreferrer">
      {mark}
    </a>
  ) : (
    mark
  )
}

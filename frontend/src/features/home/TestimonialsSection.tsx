import { useId, useState } from 'react'
import { Rating, Section } from '@/components/ui'
import { cn } from '@/lib'
import type { Testimonial } from '@/types/home'

export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  const baseId = useId()
  const [activeId, setActiveId] = useState(items[0]?.id)
  const active = items.find((item) => item.id === activeId) ?? items[0]

  if (!active) return null

  return (
    <Section id="testimonials">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div role="tabpanel" id={`${baseId}-panel`} aria-labelledby={`${baseId}-${active.id}-tab`}>
          <Rating value={active.rating} />
          <blockquote className="mt-6 text-xl leading-relaxed text-heading sm:text-2xl">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
          <p className="mt-6">
            <span className="font-semibold text-heading">{active.name}</span> &ndash; {active.role}
          </p>
        </div>

        <div role="tablist" aria-label="Testimonials" className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {items.map((item) => {
            const selected = item.id === active.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`${baseId}-${item.id}-tab`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                aria-label={item.name}
                onClick={() => setActiveId(item.id)}
                className={cn(
                  'overflow-hidden rounded-full ring-offset-2 transition',
                  selected ? 'ring-4 ring-primary' : 'opacity-70 hover:opacity-100',
                )}
              >
                <img src={item.avatarUrl} alt="" loading="lazy" className="aspect-square w-full object-cover" />
              </button>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

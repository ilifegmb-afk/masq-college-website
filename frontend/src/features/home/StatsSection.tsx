import { Container } from '@/components/ui'
import { useCountUp, useFormatters, useInView } from '@/hooks'
import { statIcons } from '@/lib'
import type { StatItem, StatsContent } from '@/types/home'

/** "College in numbers": a dark band with one tile per figure (students, faculty, departments, programmes). */
export function StatsSection({ content }: { content: StatsContent }) {
  // The numbers start counting when the tiles scroll into view.
  const { ref, inView } = useInView<HTMLUListElement>()

  return (
    <section aria-labelledby="stats-title" className="relative isolate overflow-hidden bg-heading py-8 lg:py-10">
      {/* Soft brand-coloured glow at both ends of the band. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-primary/30 via-transparent to-secondary/30" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="stats-title" className="text-xl text-white sm:text-2xl">
            {content.intro.title}
          </h2>
          {content.intro.description && <p className="mt-1 text-sm text-white/75">{content.intro.description}</p>}
        </div>

        <ul ref={ref} className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {content.items.map((item) => (
            <StatTile key={item.id} item={item} counting={inView} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

/**
 * One figure: icon, a number that counts up from 0, and its label. On phones the icon sits above
 * the number; from tablet width it sits beside it, to keep the band short.
 */
function StatTile({ item, counting }: { item: StatItem; counting: boolean }) {
  const { number } = useFormatters()
  const shown = useCountUp(item.value, counting)
  const Icon = statIcons[item.icon]

  return (
    <li className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center sm:flex-row sm:justify-center sm:gap-4 sm:px-5 sm:text-left">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-white sm:h-12 sm:w-12 sm:text-xl">
        <Icon aria-hidden />
      </span>
      <div>
        <p className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
          {/* Screen readers get the final number, not every step of the count. */}
          <span className="sr-only">
            {number(item.value)}
            {item.suffix}
          </span>
          <span aria-hidden>
            {number(shown)}
            {item.suffix}
          </span>
        </p>
        <p className="text-sm text-white/75">{item.label}</p>
      </div>
    </li>
  )
}

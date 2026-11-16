import type { CSSProperties } from 'react'
import { Marquee } from '@/components/ui'
import { cn } from '@/lib'
import type { FlashNewsContent } from '@/types/home'

// --duration is the time for one full pass of the headlines; longer = slower and easier to read.
const tickerStyle = { '--duration': '70s', '--gap': '2.5rem' } as CSSProperties

interface FlashNewsTickerProps {
  content: FlashNewsContent
  /** Positioning from the parent, e.g. to lay the strip over the top of the hero. */
  className?: string
}

/** A full-width strip of headlines that scrolls sideways. Pauses while hovered or while a link has focus. */
export function FlashNewsTicker({ content, className }: FlashNewsTickerProps) {
  if (content.items.length === 0) return null

  return (
    <div role="region" aria-label={content.label} className={cn('bg-heading/75 py-1 text-white backdrop-blur-sm', className)}>
      <Marquee
        pauseOnHover
        reducedMotion="scroll"
        style={tickerStyle}
        className="mask-[linear-gradient(to_right,transparent,black_3rem,black_calc(100%-3rem),transparent)]"
      >
        {content.items.map((item) => (
          <span key={item.id} className="flex items-center gap-3 whitespace-nowrap text-sm">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
            {item.href ? (
              <a href={item.href} className="transition-colors hover:text-rose-200 hover:underline">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </span>
        ))}
      </Marquee>
    </div>
  )
}

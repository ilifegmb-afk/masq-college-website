import { useCallback, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { ButtonLink, Container, SocialLinks } from '@/components/ui'
import { useAutoplay } from '@/hooks'
import { cn } from '@/lib'
import type { HeroContent } from '@/types/home'
import type { SocialLink } from '@/types/institute'

interface HeroSliderProps {
  content: HeroContent
  socials: SocialLink[]
}

const AUTOPLAY_MS = 6000

const arrowClass =
  'absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-xl text-white transition hover:bg-white hover:text-primary sm:flex'

export function HeroSlider({ content, socials }: HeroSliderProps) {
  const { slides, followText } = content
  const count = slides.length
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useAutoplay(next, AUTOPLAY_MS, count > 1 && !paused, index)

  if (count === 0) return null

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured"
      className="relative h-130 overflow-hidden bg-heading sm:h-150"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          inert={i !== index}
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${count}`}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none',
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <img src={slide.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-heading/60" />

          <Container className="relative flex h-full flex-col items-center justify-center text-center text-white">
            <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
              {slide.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
              {slide.title}
              <br />
              <strong className="font-bold">{slide.highlight}</strong>
            </h1>
            <ButtonLink href={slide.cta.href} className="mt-8">
              {slide.cta.label}
            </ButtonLink>

            <div className="mt-10 flex flex-col items-center gap-3">
              <SocialLinks links={socials} variant="onDark" className="justify-center" />
              <span className="text-sm text-white/80">{followText}</span>
            </div>
          </Container>
        </div>
      ))}

      {count > 1 && (
        <>
          <button type="button" onClick={prev} aria-label="Previous slide" className={cn(arrowClass, 'left-4 lg:left-8')}>
            <FiArrowLeft aria-hidden />
          </button>
          <button type="button" onClick={next} aria-label="Next slide" className={cn(arrowClass, 'right-4 lg:right-8')}>
            <FiArrowRight aria-hidden />
          </button>

          <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80',
                )}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

import { FiPlay } from 'react-icons/fi'
import { Section } from '@/components/ui'
import { featureIcons } from '@/lib'
import type { AboutContent } from '@/types/home'

export function AboutSection({ content }: { content: AboutContent }) {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={content.imageUrl} alt="" loading="lazy" className="aspect-4/3 w-full object-cover" />
          <a
            href={content.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Play campus video"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-primary shadow-xl transition-transform hover:scale-110"
          >
            <FiPlay aria-hidden className="ml-1" />
          </a>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">{content.title}</h2>
          <p className="mt-5">{content.description}</p>

          <ul className="mt-8 space-y-4">
            {content.features.map((feature) => {
              const Icon = featureIcons[feature.icon]
              return (
                <li key={feature.id} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary">
                    <Icon aria-hidden />
                  </span>
                  <span className="font-semibold text-heading">{feature.label}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}

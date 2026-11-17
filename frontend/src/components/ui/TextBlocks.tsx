import { FiCheckCircle } from 'react-icons/fi'
import type { TextBlock } from '@/types/common'

/** Renders text blocks: an optional heading, then paragraphs, numbered steps and bullet points. */
export function TextBlocks({ blocks }: { blocks: TextBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => (
        <div key={block.title ?? index}>
          {block.title && <h3 className="mb-3 text-lg">{block.title}</h3>}

          {block.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mb-3 last:mb-0">
              {paragraph}
            </p>
          ))}

          {block.steps && (
            <ol className="space-y-3">
              {block.steps.map((step, stepIndex) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {stepIndex + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          )}

          {block.points && (
            <ul className="space-y-2">
              {block.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <FiCheckCircle aria-hidden className="mt-1 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

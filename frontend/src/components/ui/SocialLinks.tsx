import { cn, socialPlatforms } from '@/lib'
import type { SocialLink } from '@/types/institute'

type Variant = 'plain' | 'outline' | 'onDark'

interface SocialLinksProps {
  links: SocialLink[]
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  plain: 'text-body hover:text-primary',
  outline:
    'h-10 w-10 rounded-full border border-line text-body hover:border-primary hover:bg-primary hover:text-white',
  onDark: 'h-11 w-11 rounded-full border border-white/40 text-white hover:bg-white hover:text-primary',
}

export function SocialLinks({ links, variant = 'plain', className }: SocialLinksProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-3', className)}>
      {links.map(({ platform, url }) => {
        const { label, icon: Icon } = socialPlatforms[platform]
        return (
          <li key={platform}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={cn('inline-flex items-center justify-center transition', variants[variant])}
            >
              <Icon aria-hidden />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

import { cn } from '@/lib'

const sizes = {
  md: 'h-16 w-16 text-lg',
  lg: 'h-20 w-20 text-2xl',
}

/** "Dr. R. Senthil Kumar" -> "SK": skips titles and initials, keeps the first letters of the last two names. */
function initialsOf(name: string): string {
  const words = name.split(/\s+/).filter((word) => word.length > 0 && !word.endsWith('.'))
  return words
    .slice(-2)
    .map((word) => word[0].toUpperCase())
    .join('')
}

interface AvatarProps {
  name: string
  photoUrl?: string
  size?: keyof typeof sizes
}

/** A person's round photo, or their initials on a coloured circle when there is no photo. */
export function Avatar({ name, photoUrl, size = 'md' }: AvatarProps) {
  if (photoUrl) {
    return <img src={photoUrl} alt="" loading="lazy" className={cn('shrink-0 rounded-full object-cover', sizes[size])} />
  }

  return (
    <span
      aria-hidden
      className={cn(
        'flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-secondary font-semibold text-white',
        sizes[size],
      )}
    >
      {initialsOf(name)}
    </span>
  )
}

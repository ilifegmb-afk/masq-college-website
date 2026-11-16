import { FaStar } from 'react-icons/fa6'
import { cn } from '@/lib'

interface RatingProps {
  /** 0-5 */
  value: number
  reviewCount?: number
  className?: string
}

export function Rating({ value, reviewCount, className }: RatingProps) {
  const filled = Math.round(value)

  return (
    <div className={cn('flex items-center gap-2 text-sm', className)}>
      <span className="flex gap-0.5" role="img" aria-label={`Rated ${value} out of 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className={i < filled ? 'text-amber-400' : 'text-line'} />
        ))}
      </span>
      {reviewCount !== undefined && <span>({reviewCount} reviews)</span>}
    </div>
  )
}

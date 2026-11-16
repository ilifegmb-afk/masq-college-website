import { useSite } from '@/context/site-context'
import { cn } from '@/lib'

export function Logo({ className }: { className?: string }) {
  const { institute } = useSite()

  return (
    <a href="/" className={cn('flex shrink-0 items-center gap-3', className)}>
      <img src={institute.logoUrl} alt="" className="h-10 w-10 object-contain" />
      <span className="whitespace-nowrap text-xl font-bold text-heading">{institute.name}</span>
    </a>
  )
}

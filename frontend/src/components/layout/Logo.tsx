import { AppLink } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { cn } from '@/lib'

export function Logo({ className }: { className?: string }) {
  const { institute } = useSite()

  return (
    // min-w-0 + a wrapping name: a long college name goes onto two lines instead of pushing
    // neighbours (like the mobile menu's close button) off the screen.
    <AppLink href="/" className={cn('flex min-w-0 items-center gap-3', className)}>
      <img src={institute.logoUrl} alt="" className="h-10 w-10 shrink-0 object-contain" />
      <span className="text-lg font-bold leading-tight text-heading sm:text-xl">{institute.name}</span>
    </AppLink>
  )
}

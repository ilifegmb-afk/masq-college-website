import type { ReactNode } from 'react'
import { cn } from '@/lib'
import { Container } from './Container'

interface SectionProps {
  id?: string
  tone?: 'default' | 'muted'
  className?: string
  children: ReactNode
}

/** Page section with consistent vertical rhythm and a centred container. */
export function Section({ id, tone = 'default', className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-12 lg:py-16', tone === 'muted' && 'bg-surface', className)}>
      <Container>{children}</Container>
    </section>
  )
}

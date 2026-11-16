import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib'

type Variant = 'primary' | 'outline' | 'light'
type Size = 'sm' | 'md'

interface StyleProps {
  variant?: Variant
  size?: Size
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

const variants: Record<Variant, string> = {
  primary: 'bg-linear-to-r from-primary to-secondary text-white shadow-md hover:opacity-90',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  light: 'bg-white text-heading shadow-md hover:bg-white/90',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-7 py-3 text-base',
}

function styles({ variant = 'primary', size = 'md' }: StyleProps, className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}

type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ variant, size, className, ...rest }: ButtonProps) {
  return <button type="button" className={styles({ variant, size }, className)} {...rest} />
}

type ButtonLinkProps = StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function ButtonLink({ variant, size, className, ...rest }: ButtonLinkProps) {
  return <a className={styles({ variant, size }, className)} {...rest} />
}

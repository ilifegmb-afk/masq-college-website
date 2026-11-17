import type { ReactNode } from 'react'

/** Shown in a department tab that has nothing to list yet. */
export function EmptyPanel({ children }: { children: ReactNode }) {
  return <p className="rounded-2xl border border-dashed border-line bg-surface p-8 text-center">{children}</p>
}

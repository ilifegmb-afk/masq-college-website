import type { ReactNode } from 'react'
import type { SiteContent } from '@/types/site'
import { SiteContext } from './site-context'

interface SiteProviderProps {
  site: SiteContent
  children: ReactNode
}

export function SiteProvider({ site, children }: SiteProviderProps) {
  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>
}

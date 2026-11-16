import { createContext, useContext } from 'react'
import type { SiteContent } from '@/types/site'

export const SiteContext = createContext<SiteContent | null>(null)

export function useSite(): SiteContent {
  const site = useContext(SiteContext)
  if (!site) {
    throw new Error('useSite must be used inside <SiteProvider>')
  }
  return site
}

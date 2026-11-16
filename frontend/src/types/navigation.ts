import type { LinkItem } from './common'

/** A menu entry. Entries with `children` render as dropdowns (nesting is unlimited). */
export interface NavItem {
  id: string
  label: string
  href?: string
  badge?: string
  children?: NavItem[]
}

export interface Navigation {
  main: NavItem[]
  /** Small links shown in the top bar (desktop only). */
  topLinks: LinkItem[]
  cta: LinkItem
}

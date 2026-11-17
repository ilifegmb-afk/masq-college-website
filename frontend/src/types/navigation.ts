import type { LinkItem } from './common'

/** A menu entry. Entries with `children` render as dropdowns (nesting is unlimited). */
export interface NavItem {
  id: string
  label: string
  href?: string
  badge?: string
  children?: NavItem[]
  /** Shows a search box above the children, for long flat lists such as departments. */
  searchable?: boolean
}

export type LoginIconName = 'student' | 'staff'

/** One way to sign in, e.g. the student portal. */
export interface LoginOption extends LinkItem {
  id: string
  icon: LoginIconName
  /** What the portal is for, e.g. "Marks, attendance and fees". */
  description?: string
}

/** The Login button and the choices shown in its popup. */
export interface LoginMenu {
  label: string
  options: LoginOption[]
}

export interface Navigation {
  main: NavItem[]
  /** Login button at the right end of the menu; it opens a popup listing `options`. */
  login: LoginMenu
  /** Highlighted button at the right of the header, e.g. Admission. Links to other websites open in a new tab. */
  headerAction: LinkItem
}

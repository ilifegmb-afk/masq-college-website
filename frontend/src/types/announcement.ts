import type { LinkItem } from './common'

/** The popup shown when someone opens the website, e.g. "Admissions open". */
export interface AnnouncementPopupContent {
  /** Turn the popup off without deleting its text. */
  enabled: boolean
  title: string
  message: string
  imageUrl?: string
  /** Optional button, e.g. "Apply Online". Links to other websites open in a new tab. */
  action?: LinkItem
  /** The popup appears this many seconds after the page opens. */
  delaySeconds: number
  /** Once shown, the popup closes by itself after this many seconds. */
  autoCloseSeconds: number
}

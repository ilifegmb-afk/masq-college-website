export interface LinkItem {
  label: string
  href: string
}

export interface SectionIntro {
  title: string
  description?: string
  /** Optional "browse all" style link shown beside the heading. */
  action?: LinkItem
}

/** A homepage block that is a heading plus a list of cards. */
export interface ListSection<T> {
  intro: SectionIntro
  items: T[]
  /** Label for the per-card link/button. */
  ctaLabel?: string
}

export type AttachmentType = 'pdf' | 'doc' | 'sheet' | 'image' | 'other'

/** A downloadable file attached to a piece of content (a notice, an announcement, ...). */
export interface Attachment {
  id: string
  name: string
  url: string
  type: AttachmentType
  /** File size in bytes, shown beside the name when provided. */
  sizeBytes?: number
}

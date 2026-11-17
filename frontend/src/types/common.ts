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

/** A dated announcement, e.g. on the noticeboard or an exam notification. */
export interface Notice {
  id: string
  title: string
  /** ISO date, e.g. 2026-11-10 */
  date: string
  /** Optional page with the full notice. */
  href?: string
  /** Shows the "new" badge. */
  isNew?: boolean
  attachments?: Attachment[]
}

/** A piece of text: an optional heading with paragraphs, numbered steps and/or bullet points. */
export interface TextBlock {
  title?: string
  paragraphs?: string[]
  /** Numbered list, e.g. how to apply. */
  steps?: string[]
  /** Bulleted list. */
  points?: string[]
}

/** A certificate (accreditation, recognition, acknowledgement...) that opens as a file. */
export interface Certificate {
  id: string
  title: string
  /** e.g. "NAAC" */
  issuedBy?: string
  /** e.g. "2024-25" or "2023" */
  year?: string
  /** The certificate file (PDF or image). */
  url: string
  /** Optional preview image; a certificate badge is shown without one. */
  imageUrl?: string
}

/** A photo and its description for screen readers. */
export interface Photo {
  url: string
  alt: string
}

/** A page section's text, with optional photos, notices, buttons, certificates and files to download. */
export interface TextWithDocuments {
  /** Photos shown under the heading. */
  images?: Photo[]
  /** Dated notifications shown at the top, each with an optional link. */
  notices?: Notice[]
  /** Highlighted buttons, e.g. "Download Hall Ticket". */
  actions?: LinkItem[]
  /** Certificates shown as cards before the downloads. */
  certificates?: Certificate[]
  blocks: TextBlock[]
  /** Files listed in a "Downloads" box at the end. Not used on the site at the moment. */
  documents?: Attachment[]
}

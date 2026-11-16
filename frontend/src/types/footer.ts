import type { LinkItem } from './common'

export interface FooterColumn {
  id: string
  title: string
  links: LinkItem[]
}

export interface NewsletterContent {
  title: string
  description: string
  placeholder: string
  submitLabel: string
}

export interface FooterContent {
  columns: FooterColumn[]
  contactTitle: string
  contactCta: LinkItem
  newsletter: NewsletterContent
  bottomLinks: LinkItem[]
}

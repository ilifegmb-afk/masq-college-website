import type { Attachment, LinkItem, ListSection, SectionIntro } from './common'

export type FeatureIconName = 'heart' | 'book' | 'monitor' | 'award' | 'users' | 'globe'

/* Hero */
export interface HeroSlide {
  id: string
  eyebrow: string
  title: string
  highlight: string
  imageUrl: string
  cta: LinkItem
}

export interface HeroContent {
  slides: HeroSlide[]
  followText: string
}

/* Flash news ticker (runs across the top of the hero) */
export interface FlashNewsItem {
  id: string
  text: string
  href?: string
}

export interface FlashNewsContent {
  /** Name of the strip for screen readers, e.g. "Flash News" (not shown on screen). */
  label: string
  items: FlashNewsItem[]
}

/* Announcements & noticeboard */
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

export interface NoticeCategory {
  id: string
  label: string
  items: Notice[]
}

export interface NoticesContent {
  /** Text of the badge on new notices. */
  newLabel: string
  /** Shown when a list has no notices. */
  emptyLabel: string
  announcements: {
    title: string
    /** Optional "view all" link shown under the list. */
    action?: LinkItem
    items: Notice[]
  }
  noticeboard: {
    title: string
    /** Optional "view all" link shown under the list. */
    action?: LinkItem
    categories: NoticeCategory[]
  }
}

/* About */
export interface AboutFeature {
  id: string
  icon: FeatureIconName
  label: string
}

export interface AboutContent {
  title: string
  description: string
  imageUrl: string
  videoUrl: string
  features: AboutFeature[]
}

/* Categories */
export interface Category {
  id: string
  label: string
  imageUrl: string
  href: string
}

/* Vision / mission tabs */
export interface VisionTab {
  id: string
  title: string
  summary: string
  imageUrl: string
}

export interface VisionContent {
  intro: SectionIntro
  tabs: VisionTab[]
}

/* Programs */
export interface Program {
  id: string
  title: string
  imageUrl: string
  href: string
}

/* News */
export interface Post {
  id: string
  title: string
  excerpt: string
  imageUrl: string
  href: string
}

/* Events */
export interface EventItem {
  id: string
  title: string
  href: string
  imageUrl: string
  /** ISO date, e.g. 2027-01-15 */
  date: string
  time?: string
  location: string
}

/* Testimonials */
export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  avatarUrl: string
  rating: number
}

/* Gallery */
export interface GalleryImage {
  id: string
  imageUrl: string
  alt: string
}

/* Recruiters */
export interface Recruiter {
  id: string
  name: string
  logoUrl: string
}

export interface RecruitersContent {
  intro: SectionIntro
  items: Recruiter[]
}

/* Partners */
export interface Partner {
  id: string
  name: string
  logoUrl?: string
  href?: string
}

export interface PartnersContent {
  title: string
  items: Partner[]
}

export interface HomeContent {
  hero: HeroContent
  flashNews: FlashNewsContent
  notices: NoticesContent
  about: AboutContent
  categories: Category[]
  vision: VisionContent
  programs: ListSection<Program>
  news: ListSection<Post>
  events: ListSection<EventItem>
  testimonials: Testimonial[]
  recruiters: RecruitersContent
  gallery: GalleryImage[]
  partners: PartnersContent
}

export type SocialPlatform = 'facebook' | 'instagram' | 'linkedin' | 'x' | 'youtube'

export interface SocialLink {
  platform: SocialPlatform
  url: string
}

export interface Address {
  line1: string
  line2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface Institute {
  id: string
  /** URL-safe identifier, used to look the institute up on the backend. */
  slug: string
  name: string
  shortName: string
  /** Slogan shown under the name, e.g. "Learn. Lead. Succeed." */
  tagline: string
  /** Shown in brackets before the city in the header, e.g. "Autonomous". */
  status?: string
  /** Accreditation and affiliation line in the header, e.g. 'Accredited with "A" Grade by NAAC | Affiliated to ... University'. */
  accreditation?: string
  description: string
  logoUrl: string
  address: Address
  contact: {
    phone: string
    email: string
  }
  socials: SocialLink[]
  /** ISO 4217 currency code used when formatting fees and prices. */
  currency: string
  /** BCP 47 locale used when formatting money and dates. */
  locale: string
}

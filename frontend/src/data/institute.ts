import type { Institute } from '@/types/institute'

// Placeholder values - replace with the real institute record from the database.
export const institute: Institute = {
  id: 'inst_masq_001',
  slug: 'masq-college',
  name: 'MASQ College of arts & Science',
  shortName: 'MASQ',
  tagline: 'Learn. Lead. Succeed.',
  status: 'Autonomous',
  accreditation: 'Accredited with "A" Grade by NAAC | Affiliated to Your University',
  description:
    'We are always in search of talented and motivated people. Join a college where learning goes beyond the classroom.',
  logoUrl: '/logo.png',
  address: {
    line1: '123 College Road',
    city: 'Trichy',
    state: 'Tamil Nadu',
    postalCode: '987554',
    country: 'India',
  },
  contact: {
    phone: '+91 00000 00000',
    email: 'info@masqcollege.example',
  },
  socials: [
    { platform: 'facebook', url: 'https://www.facebook.com/' },
    { platform: 'x', url: 'https://x.com/' },
    { platform: 'instagram', url: 'https://www.instagram.com/' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/' },
    { platform: 'youtube', url: 'https://www.youtube.com/' },
  ],
  currency: 'INR',
  locale: 'en-IN',
}

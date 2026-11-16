import type { FooterContent } from '@/types/footer'

export const footer: FooterContent = {
  columns: [
    {
      id: 'useful',
      title: 'Useful Links',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Programs', href: '#programs' },
        { label: 'Admissions', href: '/admissions/apply' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
    {
      id: 'campus',
      title: 'Our College',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Faculty', href: '/about/faculty' },
        { label: 'News', href: '#news' },
        { label: 'Events', href: '#events' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  ],
  contactTitle: 'Get Contact',
  contactCta: { label: 'Contact With Us', href: '/contact' },
  newsletter: {
    title: 'Newsletter',
    description: 'Get admission updates and campus news straight to your inbox.',
    placeholder: 'Enter your email',
    submitLabel: 'Subscribe',
  },
  bottomLinks: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Admissions', href: '/admissions/apply' },
  ],
}

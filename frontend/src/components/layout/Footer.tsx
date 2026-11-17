import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { ButtonLink, Container, SocialLinks } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { formatAddress, toTelHref } from '@/lib'
import type { FooterColumn } from '@/types/footer'
import { Logo } from './Logo'
import { NewsletterForm } from './NewsletterForm'

export function Footer() {
  const { institute, footer } = useSite()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm">{institute.description}</p>
          <SocialLinks links={institute.socials} variant="outline" className="mt-6" />
          <ButtonLink href={footer.contactCta.href} variant="outline" className="mt-8">
            {footer.contactCta.label}
          </ButtonLink>
        </div>

        {footer.columns.map((column) => (
          <FooterLinks key={column.id} column={column} />
        ))}

        <div className="lg:col-span-4">
          <h3 className="text-lg">{footer.contactTitle}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FiPhone aria-hidden className="mt-1 shrink-0 text-primary" />
              <a href={toTelHref(institute.contact.phone)} className="transition-colors hover:text-primary">
                {institute.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMail aria-hidden className="mt-1 shrink-0 text-primary" />
              <a href={`mailto:${institute.contact.email}`} className="transition-colors hover:text-primary">
                {institute.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin aria-hidden className="mt-1 shrink-0 text-primary" />
              <address className="not-italic">{formatAddress(institute.address)}</address>
            </li>
          </ul>
          <NewsletterForm content={footer.newsletter} />
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-sm lg:flex-row">
          <p>
            &copy; {year} {institute.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footer.bottomLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Developer credit: part of the template, the same on every college's site. */}
          <p>
            Crafted by{' '}
            <a
              href="https://ilifetech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary transition-colors hover:text-secondary"
            >
              ILIFE Technologies
            </a>
          </p>
        </Container>
      </div>
    </footer>
  )
}

function FooterLinks({ column }: { column: FooterColumn }) {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-lg">{column.title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {column.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

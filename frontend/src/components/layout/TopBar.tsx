import { FiPhone } from 'react-icons/fi'
import { ButtonLink, Container, SocialLinks } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { toTelHref } from '@/lib'

export function TopBar() {
  const { institute, navigation } = useSite()

  return (
    <div className="hidden border-b border-line bg-white text-sm lg:block">
      <Container className="flex h-12 items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href={toTelHref(institute.contact.phone)}
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <FiPhone aria-hidden className="text-primary" />
            {institute.contact.phone}
          </a>
          <SocialLinks links={institute.socials} />
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {navigation.topLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={navigation.cta.href} size="sm">
            {navigation.cta.label}
          </ButtonLink>
        </div>
      </Container>
    </div>
  )
}

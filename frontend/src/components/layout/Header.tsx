import { useCallback, useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa6'
import { FiAward, FiMenu } from 'react-icons/fi'
import { AppLink, ButtonLink } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { DesktopNav } from './DesktopNav'
import { LoginButton } from './LoginButton'
import { MobileNav } from './MobileNav'

/**
 * Two rows: the college logo, name block and Admission button (scrolls away with the page), then the
 * menu bar with the Login button, which stays at the top of the window while scrolling.
 */
export function Header() {
  const { institute, navigation } = useSite()
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  // The highlighted header button opens in a new tab only if it leads to another website.
  const actionIsExternal = navigation.headerAction.href.startsWith('http')

  return (
    <>
      {/* Thin brand-coloured strip along the very top of the page. */}
      <div aria-hidden className="h-1 bg-linear-to-r from-primary via-secondary to-primary" />

      <header className="relative isolate overflow-hidden bg-linear-to-r from-primary/5 via-white to-secondary/5">
        {/* Dotted texture on both sides, fading out behind the name. */}
        <div
          aria-hidden
          className="dot-pattern absolute inset-0 -z-10 [mask-image:linear-gradient(to_right,black,transparent_35%,transparent_65%,black)]"
        />

        {/* Wider than the page container, so the logo and the pay button sit closer to the screen edges. */}
        <div className="mx-auto grid w-full max-w-[96rem] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4 lg:grid-cols-[1fr_auto_1fr]">
          <AppLink
            href="/"
            aria-label={`${institute.name} home page`}
            className="justify-self-start transition-transform hover:scale-105"
          >
            <img src={institute.logoUrl} alt="" className="h-12 w-12 object-contain drop-shadow-md sm:h-18 sm:w-18" />
          </AppLink>

          {/* e.g. MASQ COLLEGE / (Autonomous) Your City-000000 / Accredited with ... | Affiliated to ... */}
          <div className="min-w-0 text-center">
            <p className="text-balance text-base leading-tight font-extrabold uppercase tracking-wider text-heading sm:text-2xl lg:text-3xl 2xl:text-4xl">
              {institute.name}
            </p>
            <div className="mt-1 flex items-center justify-center gap-3">
              <span aria-hidden className="hidden h-px w-12 bg-linear-to-r from-transparent to-primary sm:block" />
              <p className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
                {institute.status && `(${institute.status}) `}
                {institute.address.city}-{institute.address.postalCode}
              </p>
              <span aria-hidden className="hidden h-px w-12 bg-linear-to-l from-transparent to-primary sm:block" />
            </div>
            {institute.accreditation && (
              <p className="mt-1.5 hidden items-center justify-center gap-1.5 text-xs sm:flex">
                <FiAward aria-hidden className="shrink-0 text-secondary" />
                {institute.accreditation}
              </p>
            )}
          </div>

          <ButtonLink
            href={navigation.headerAction.href}
            size="sm"
            className="justify-self-end whitespace-nowrap"
            aria-label={navigation.headerAction.label}
            target={actionIsExternal ? '_blank' : undefined}
            rel={actionIsExternal ? 'noopener noreferrer' : undefined}
          >
            <FaGraduationCap aria-hidden className="text-base" />
            {/* Phones show just the card icon, leaving room for the college name. */}
            <span className="hidden sm:inline">{navigation.headerAction.label}</span>
          </ButtonLink>
        </div>
      </header>

      <div className="sticky top-0 z-40 border-y border-line bg-white/95 shadow-sm backdrop-blur">
        {/* Same width as the top bar, so the menu lines up with the logo and has room for every item. */}
        <div className="mx-auto flex h-12 w-full max-w-[96rem] items-center justify-between gap-4 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            className="flex h-9 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium text-heading transition-colors hover:border-primary hover:text-primary xl:hidden"
          >
            <FiMenu aria-hidden className="text-lg" />
            Menu
          </button>
          <DesktopNav items={navigation.main} />
          <LoginButton login={navigation.login} />
        </div>
      </div>

      <MobileNav items={navigation.main} open={mobileOpen} onClose={closeMobile} />
    </>
  )
}

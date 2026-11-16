import { useCallback, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Container } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { DesktopNav } from './DesktopNav'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { TopBar } from './TopBar'

export function Header() {
  const { navigation } = useSite()
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <Container className="flex h-20 items-center justify-between gap-6">
          <Logo />
          <DesktopNav items={navigation.main} />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-xl text-heading transition-colors hover:border-primary hover:text-primary xl:hidden"
          >
            <FiMenu aria-hidden />
          </button>
        </Container>
      </header>
      <MobileNav items={navigation.main} open={mobileOpen} onClose={closeMobile} />
    </>
  )
}

import type { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router'

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string
}

/**
 * A link for any href the backend sends. Paths inside the site ("/academics/...") switch pages
 * without reloading; everything else (https:, mailto:, tel:, "#...") is a normal anchor.
 */
export function AppLink({ href, ...rest }: AppLinkProps) {
  const isInternal = href.startsWith('/') && !href.startsWith('//')
  return isInternal ? <Link to={href} {...rest} /> : <a href={href} {...rest} />
}

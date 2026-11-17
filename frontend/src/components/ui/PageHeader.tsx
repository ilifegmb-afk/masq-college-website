import { FiChevronRight } from 'react-icons/fi'
import { AppLink } from './AppLink'
import { Container } from './Container'

interface PageHeaderProps {
  title: string
  /** Breadcrumb steps between "Home" and the current page, e.g. ['Academics', 'Departments']. */
  trail: string[]
  /** Last breadcrumb: the current page, e.g. "Commerce". */
  current: string
  subtitle?: string
  /** Optional background photo, darkened so the text stays readable. */
  imageUrl?: string
}

/** Dark banner at the top of inner pages: breadcrumb, title and an optional line below it. */
export function PageHeader({ title, trail, current, subtitle, imageUrl }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-heading">
      {imageUrl && <img src={imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />}
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-r from-heading via-heading/85 to-heading/40" />

      <Container className="py-14 lg:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            <li>
              <AppLink href="/" className="transition-colors hover:text-white">
                Home
              </AppLink>
            </li>
            {trail.map((step) => (
              <li key={step} className="flex items-center gap-1.5">
                <FiChevronRight aria-hidden />
                {step}
              </li>
            ))}
            <li className="flex items-center gap-1.5">
              <FiChevronRight aria-hidden />
              <span aria-current="page" className="text-white">
                {current}
              </span>
            </li>
          </ol>
        </nav>

        <h1 className="mt-4 max-w-3xl text-3xl text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 text-white/80">{subtitle}</p>}
      </Container>
    </section>
  )
}

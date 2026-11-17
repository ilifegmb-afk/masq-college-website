import { useSite } from '@/context/site-context'
import {
  AboutSection,
  CategoriesSection,
  EventsSection,
  FlashNewsTicker,
  GallerySection,
  HeroSlider,
  NewsSection,
  NoticesSection,
  PartnersSection,
  ProgramsSection,
  RecruitersSection,
  StatsSection,
  TestimonialsSection,
  VisionSection,
} from '@/features/home'
import { useDocumentTitle } from '@/hooks'

export function HomePage() {
  const { home, institute } = useSite()
  useDocumentTitle(`${institute.name} | ${institute.tagline}`)

  return (
    <>
      {/* The flash news strip is laid over the top edge of the hero slider. */}
      <div className="relative">
        <FlashNewsTicker content={home.flashNews} className="absolute inset-x-0 top-0 z-10" />
        <HeroSlider content={home.hero} socials={institute.socials} />
      </div>
      <NoticesSection content={home.notices} />
      <AboutSection content={home.about} />
      <StatsSection content={home.stats} />
      <CategoriesSection categories={home.categories} />
      <VisionSection content={home.vision} />
      <ProgramsSection content={home.programs} />
      <NewsSection content={home.news} />
      <EventsSection content={home.events} />
      <TestimonialsSection items={home.testimonials} />
      <RecruitersSection content={home.recruiters} />
      <GallerySection images={home.gallery} />
      <PartnersSection content={home.partners} />
    </>
  )
}

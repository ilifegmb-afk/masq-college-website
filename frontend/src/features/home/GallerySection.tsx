import type { GalleryImage } from '@/types/home'

export function GallerySection({ images }: { images: GalleryImage[] }) {
  return (
    <section id="gallery" aria-label="Gallery" className="scroll-mt-24">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {images.map((image) => (
          <li key={image.id} className="overflow-hidden">
            <img
              src={image.imageUrl}
              alt={image.alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

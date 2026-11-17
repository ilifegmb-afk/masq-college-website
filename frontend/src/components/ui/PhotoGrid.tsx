import type { Photo } from '@/types/common'

/** Photos in a two-column grid; a single photo fills the whole width. */
export function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {photos.map((photo) => (
        <img
          key={photo.url}
          src={photo.url}
          alt={photo.alt}
          loading="lazy"
          className="aspect-3/2 w-full rounded-2xl object-cover sm:only:col-span-2 sm:only:aspect-21/9"
        />
      ))}
    </div>
  )
}

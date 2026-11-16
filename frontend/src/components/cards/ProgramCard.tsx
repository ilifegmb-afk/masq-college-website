import type { Program } from '@/types/home'

export function ProgramCard({ program }: { program: Program }) {
  return (
    <a href={program.href} className="group relative block aspect-4/3 overflow-hidden rounded-2xl">
      <img
        src={program.imageUrl}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-heading/80 via-heading/10 to-transparent" />
      <h3 className="absolute inset-x-0 bottom-0 p-6 text-xl text-white">{program.title}</h3>
    </a>
  )
}

import type { Category } from '@/types/home'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <a href={category.href} className="group block text-center">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={category.imageUrl}
          alt=""
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-base transition-colors group-hover:text-primary">{category.label}</h3>
    </a>
  )
}

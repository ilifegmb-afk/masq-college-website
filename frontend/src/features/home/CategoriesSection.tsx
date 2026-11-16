import { CategoryCard } from '@/components/cards'
import { Section } from '@/components/ui'
import type { Category } from '@/types/home'

export function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <Section>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

import { Table } from '@/components/ui'
import type { TableColumn } from '@/components/ui'
import type { ResearchProduct, ResearchProductType } from '@/types/research'

const columns: TableColumn[] = [
  { label: 'Title' },
  { label: 'Type' },
  { label: 'By' },
  { label: 'Year', align: 'right' },
]

const typeLabels: Record<ResearchProductType, string> = {
  patent: 'Patent',
  publication: 'Publication',
  book: 'Book',
  project: 'Funded project',
}

/** Patents, publications, books and funded projects. */
export function ProductsTable({ products }: { products: ResearchProduct[] }) {
  const rows = products.map((product) => ({
    id: product.id,
    cells: [
      product.title,
      <span className="whitespace-nowrap rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
        {typeLabels[product.type]}
      </span>,
      product.by,
      product.year,
    ],
  }))

  return <Table columns={columns} rows={rows} />
}

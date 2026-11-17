import type { ReactNode } from 'react'
import { cn } from '@/lib'

export interface TableColumn {
  label: string
  /** Numbers (fees, seats) read best right-aligned. */
  align?: 'left' | 'right'
}

export interface TableRow {
  id: string
  /** One cell per column, in the same order as the columns. */
  cells: ReactNode[]
}

interface TableProps {
  columns: TableColumn[]
  rows: TableRow[]
  /** Optional last row in bold, e.g. totals. One cell per column. */
  footer?: ReactNode[]
}

/** A simple bordered table. On narrow screens it scrolls sideways instead of squashing the columns. */
export function Table({ columns, rows, footer }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-xl text-left text-sm">
        <thead className="bg-surface text-heading">
          <tr>
            {columns.map((column) => (
              <th
                key={column.label}
                scope="col"
                className={cn('px-4 py-3 font-semibold', column.align === 'right' && 'text-right')}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr key={row.id} className="transition-colors hover:bg-surface/60">
              {row.cells.map((cell, index) => (
                <td
                  key={columns[index]?.label ?? index}
                  className={cn(
                    'px-4 py-3',
                    index === 0 && 'font-medium text-heading',
                    columns[index]?.align === 'right' && 'whitespace-nowrap text-right tabular-nums',
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer && (
          <tfoot className="border-t border-line bg-surface font-semibold text-heading">
            <tr>
              {footer.map((cell, index) => (
                <td
                  key={columns[index]?.label ?? index}
                  className={cn('px-4 py-3', columns[index]?.align === 'right' && 'whitespace-nowrap text-right tabular-nums')}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}

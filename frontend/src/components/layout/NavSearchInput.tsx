import { FiSearch } from 'react-icons/fi'

interface NavSearchInputProps {
  /** Name of the menu being searched, e.g. "Departments". */
  label: string
  value: string
  onChange: (value: string) => void
}

/** Search box shown at the top of a searchable dropdown. */
export function NavSearchInput({ label, value, onChange }: NavSearchInputProps) {
  return (
    <div className="relative">
      <FiSearch aria-hidden className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search..."
        aria-label={`Search ${label.toLowerCase()}`}
        className="w-full rounded-lg border border-line bg-surface py-2 pl-9 pr-3 text-sm font-normal text-heading focus:border-primary focus:bg-white focus:outline-none"
      />
    </div>
  )
}

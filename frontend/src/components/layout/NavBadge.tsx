export function NavBadge({ children }: { children: string }) {
  return (
    <span className="ml-2 rounded bg-primary px-1.5 py-0.5 text-[10px] font-semibold uppercase leading-none text-white">
      {children}
    </span>
  )
}

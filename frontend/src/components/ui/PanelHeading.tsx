interface PanelHeadingProps {
  title: string
  description?: string
}

/** Heading at the top of a section shown beside a side menu (department tabs, admission sections). */
export function PanelHeading({ title, description }: PanelHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {description && <p className="mt-2">{description}</p>}
    </div>
  )
}

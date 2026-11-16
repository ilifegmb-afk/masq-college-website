interface FullPageMessageProps {
  title: string
  description?: string
}

/** Centered message for loading and error states. */
export function FullPageMessage({ title, description }: FullPageMessageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 px-4 text-center">
      <p className="text-xl font-semibold text-heading">{title}</p>
      {description && <p>{description}</p>}
    </div>
  )
}

import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui'
import type { NewsletterContent } from '@/types/footer'

export function NewsletterForm({ content }: { content: NewsletterContent }) {
  const inputId = useId()
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Not wired to the backend yet.
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <h4 className="text-base">{content.title}</h4>
      <p className="mt-2 text-sm">{content.description}</p>

      <label htmlFor={inputId} className="sr-only">
        {content.placeholder}
      </label>
      <input
        id={inputId}
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={content.placeholder}
        className="mt-4 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-heading outline-none transition focus:border-primary"
      />
      <Button type="submit" size="sm" className="mt-3">
        {content.submitLabel}
      </Button>
    </form>
  )
}

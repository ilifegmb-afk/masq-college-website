import { ButtonLink, FullPageMessage } from '@/components/ui'
import { useSite } from '@/context/site-context'
import { useDocumentTitle } from '@/hooks'

export function NotFoundPage() {
  const { institute } = useSite()
  useDocumentTitle(`Page not found | ${institute.name}`)

  return (
    <FullPageMessage
      fill="section"
      title="Page not found"
      description="The page you are looking for does not exist or has been moved."
    >
      <ButtonLink href="/">Back to home</ButtonLink>
    </FullPageMessage>
  )
}

import { useEffect } from 'react'

/** Sets the browser tab title while a page is shown. Nothing happens while `title` is undefined. */
export function useDocumentTitle(title: string | undefined) {
  useEffect(() => {
    if (title) document.title = title
  }, [title])
}

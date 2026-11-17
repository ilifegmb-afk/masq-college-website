import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Navigation state that asks to stay at the current scroll position (e.g. switching tabs in a page). */
export interface ScrollState {
  keepScroll?: boolean
}

/**
 * On every page change: scroll to the "#section" in the address if there is one, otherwise to the top.
 * Links that only switch a tab inside the same page pass `state={{ keepScroll: true }}`.
 */
export function ScrollManager() {
  const { pathname, hash, state } = useLocation()
  const keepScroll = (state as ScrollState | null)?.keepScroll === true

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      return
    }
    if (!keepScroll) window.scrollTo(0, 0)
  }, [pathname, hash, keepScroll])

  return null
}

import { useEffect, useRef, useState } from 'react'

/**
 * Tells whether an element has scrolled into view. Attach `ref` to the element; `inView` turns
 * true once at least 30% of it is visible, and then stays true.
 */
export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [inView])

  return { ref, inView }
}

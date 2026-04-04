import { useEffect, useRef, useState, type RefObject } from 'react'

type Direction = 'up' | 'left' | 'right'

export type UseFadeInObserverOptions = {
  threshold?: number
  rootMargin?: string
}

const DEFAULT_THRESHOLD = 0.1
const DEFAULT_ROOT_MARGIN = '0px 0px -50px 0px'

export function useFadeIn<T extends HTMLElement = HTMLDivElement>(
  direction: Direction = 'up',
  observerOptions?: UseFadeInObserverOptions,
): { ref: RefObject<T | null>; isVisible: boolean; directionClasses: string } {
  const ref = useRef<T | null>(null)
  const threshold = observerOptions?.threshold ?? DEFAULT_THRESHOLD
  const rootMargin = observerOptions?.rootMargin ?? DEFAULT_ROOT_MARGIN

  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  const directionClasses = (() => {
    if (direction === 'left') {
      return isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
    }
    if (direction === 'right') {
      return isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
    }
    return isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
  })()

  return { ref, isVisible, directionClasses }
}

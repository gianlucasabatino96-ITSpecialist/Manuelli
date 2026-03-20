import { useEffect, useRef, useState } from 'react'

type Direction = 'up' | 'left' | 'right'

export function useFadeIn(direction: Direction = 'up') {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

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

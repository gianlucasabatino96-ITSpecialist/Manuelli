import { useCallback, useEffect, useRef, useState } from 'react'

type UseCarouselParams = {
  totalSlides: number
  autoplayDelay?: number
}

export function useCarousel({ totalSlides, autoplayDelay = 5000 }: UseCarouselParams) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)
  const intervalIdRef = useRef<number | null>(null)

  const updateSlidesPerView = useCallback(() => {
    if (typeof window === 'undefined') {
      setSlidesPerView(1)
      return
    }
    const isDesktop = window.innerWidth >= 1024
    setSlidesPerView(isDesktop ? 2 : 1)
  }, [])

  const goTo = useCallback(
    (index: number) => {
      if (totalSlides <= 0) return
      const normalized = ((index % totalSlides) + totalSlides) % totalSlides
      setCurrentIndex(normalized)
    },
    [totalSlides],
  )

  const next = useCallback(() => {
    goTo(currentIndex + 1)
  }, [currentIndex, goTo])

  const prev = useCallback(() => {
    goTo(currentIndex - 1)
  }, [currentIndex, goTo])

  const stopAutoplay = useCallback(() => {
    if (intervalIdRef.current !== null) {
      window.clearInterval(intervalIdRef.current)
      intervalIdRef.current = null
    }
  }, [])

  const startAutoplay = useCallback(() => {
    if (intervalIdRef.current !== null || autoplayDelay <= 0 || totalSlides <= 1) {
      return
    }
    intervalIdRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        if (totalSlides <= 0) return 0
        return ((nextIndex % totalSlides) + totalSlides) % totalSlides
      })
    }, autoplayDelay)
  }, [autoplayDelay, totalSlides])

  useEffect(() => {
    updateSlidesPerView()

    if (typeof window === 'undefined') {
      return
    }

    const handleResize = () => {
      updateSlidesPerView()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [updateSlidesPerView])

  useEffect(() => {
    startAutoplay()
    return () => {
      stopAutoplay()
    }
  }, [startAutoplay, stopAutoplay])

  return {
    currentIndex,
    slidesPerView,
    next,
    prev,
    goTo,
    startAutoplay,
    stopAutoplay,
  }
}


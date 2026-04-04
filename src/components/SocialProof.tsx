import { useState } from 'react'
import { logoListe, testimonials } from '../data/content'
import { useCarousel } from '../hooks/useCarousel'
import { useCountUp } from '../hooks/useCountUp'
import { useFadeIn } from '../hooks/useFadeIn'

export function SocialProof() {
  const { currentIndex, slidesPerView, next, prev, goTo, startAutoplay, stopAutoplay } =
    useCarousel({ totalSlides: testimonials.length, autoplayDelay: 5000 })

  const { ref: logosRef, isVisible: logosVisible } = useFadeIn()
  const { ref: counterRef, isVisible: counterVisible } = useFadeIn<HTMLParagraphElement>('up', {
    threshold: 0,
    rootMargin: '0px',
  })
  const count = useCountUp(300, 3000, counterVisible)

  const translatePercentage = (currentIndex / Math.max(slidesPerView, 1)) * 100

  return (
    <section aria-label="Sostegno alla candidatura" className="bg-white px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-azzurro-intenso md:text-4xl">
          Un progetto largo, per tutta la città
        </h2>

        <div
          ref={logosRef}
          className="my-12 flex flex-wrap items-center justify-center gap-4 md:gap-12"
        >
          {logoListe.map((logo, index) => (
            <LogoItem
              key={logo.src}
              src={logo.src}
              fallbackSrc={logo.fallbackSrc}
              alt={logo.alt}
              fallback={logo.fallback}
              name={logo.name}
              index={index}
              isContainerVisible={logosVisible}
            />
          ))}
        </div>

        <div
          className="relative mt-4"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          onTouchStart={stopAutoplay}
          onTouchEnd={startAutoplay}
        >
          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${translatePercentage}%)` }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.author + testimonial.quote.slice(0, 16)}
                  className="flex h-full min-h-0 w-full flex-shrink-0 px-2 md:w-1/2"
                >
                  <div className="flex h-full min-h-0 w-full flex-col justify-between gap-4 rounded-[10px] border-l-4 border-verde bg-azzurro-bg p-8">
                    <p className="min-h-0 flex-1 text-[1rem] italic leading-[1.7] text-testo-scuro line-clamp-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="shrink-0">
                      <p className="font-bold text-azzurro-intenso">
                        {testimonial.author}
                      </p>
                      {testimonial.role ? (
                        <p className="text-[0.75rem] font-normal text-gray-700">
                          {testimonial.role}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Testimonianza precedente"
            className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5"
            onClick={prev}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="15 18 9 12 15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Testimonianza successiva"
            className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5"
            onClick={next}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Vai alla testimonianza ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-[10px] w-[10px] rounded-full transition-transform ${
                index === currentIndex ? 'scale-[1.2] bg-verde' : 'bg-[#cbd5e0]'
              }`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p
            ref={counterRef}
            className="text-[3rem] font-bold text-verde md:text-[4rem]"
          >
            {count}+
          </p>
          <p className="mt-2 text-[1.1rem] text-[#666]">
            cittadini alla prima serata pubblica
          </p>
        </div>
      </div>
    </section>
  )
}

type LogoItemProps = {
  src: string
  fallbackSrc?: string
  alt: string
  fallback: string
  name: string
  index: number
  isContainerVisible: boolean
}

function LogoItem({ src, fallbackSrc, alt, fallback, name, index, isContainerVisible }: LogoItemProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const animStyle = {
    transitionDelay: `${index * 150}ms`,
    transform: isContainerVisible ? 'scale(1)' : 'scale(0.85)',
    opacity: isContainerVisible ? 1 : 0,
    transition: 'transform 0.5s ease, opacity 0.5s ease',
  }

  if (hasError) {
    return (
      <div className="flex flex-col items-center" style={animStyle}>
        <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-white p-3 text-center text-xs font-semibold text-azzurro-intenso md:h-[180px] md:w-[180px]">
          {fallback}
        </div>
        <p className="mt-2 text-center text-xs font-medium text-testo-scuro/70">{name}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center" style={animStyle}>
      <img
        src={currentSrc}
        alt={alt}
        width={180}
        height={180}
        loading="lazy"
        decoding="async"
        className="h-[110px] w-[110px] rounded-full bg-white object-contain p-2 md:h-[180px] md:w-[180px] md:p-3"
        onError={() => {
          if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc)
            return
          }
          setHasError(true)
        }}
      />
      <p className="mt-2 text-center text-xs font-medium text-testo-scuro/70">{name}</p>
    </div>
  )
}

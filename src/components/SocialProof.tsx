import { useState } from 'react'
import { logoListe, testimonials } from '../data/content'
import { useCarousel } from '../hooks/useCarousel'

export function SocialProof() {
  const { currentIndex, slidesPerView, next, prev, goTo, startAutoplay, stopAutoplay } =
    useCarousel({ totalSlides: testimonials.length, autoplayDelay: 5000 })

  const translatePercentage = (currentIndex / Math.max(slidesPerView, 1)) * 100

  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-azzurro-intenso md:text-4xl">
          Un progetto largo, per tutta la città
        </h2>

        <div className="my-12 flex flex-wrap items-center justify-center gap-4 md:gap-12">
          {logoListe.map((logo) => (
            <LogoItem
              key={logo.src}
              src={logo.src}
              fallbackSrc={logo.fallbackSrc}
              alt={logo.alt}
              fallback={logo.fallback}
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
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${translatePercentage}%)` }}
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.author + testimonial.quote.slice(0, 16)}
                  className="flex w-full flex-shrink-0 px-2 md:w-1/2"
                >
                  <div className="flex h-full flex-col justify-between rounded-[10px] border-l-4 border-verde bg-azzurro-bg p-8">
                    <p className="mb-4 text-[1rem] italic leading-[1.7] text-testo-scuro">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="mt-3 font-bold text-azzurro-intenso">
                        {testimonial.author}
                      </p>
                      {testimonial.role ? (
                        <p className="text-[0.9rem] font-normal text-[#666]">{testimonial.role}</p>
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
          <p className="text-[3rem] font-bold text-verde md:text-[4rem]">300+</p>
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
}

function LogoItem({ src, fallbackSrc, alt, fallback }: LogoItemProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-white p-3 text-center text-xs font-semibold text-azzurro-intenso ring-1 ring-azzurro-chiaro/50 md:h-[180px] md:w-[180px]">
        {fallback}
      </div>
    )
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={180}
      height={180}
      loading="lazy"
      decoding="async"
      className="h-[110px] w-[110px] rounded-full bg-white object-contain p-2 ring-1 ring-azzurro-chiaro/50 md:h-[180px] md:w-[180px] md:p-3"
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
          return
        }
        setHasError(true)
      }}
    />
  )
}

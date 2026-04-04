import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SUBTITLE_LINE = 'Lista Civica · Santa Marinella · Santa Severa'

const CHIE_HEADING = 'Una persona di questa città, con le idee chiare.'

const CHIE_TITLE_WORD_CLASS = 'chie-title-word'

export function ChiE() {
  const sectionRef = useRef<HTMLElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageColRef = useRef<HTMLDivElement>(null)
  const imageEntranceRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const lineVerticalRef = useRef<HTMLDivElement>(null)
  const lineHorizontalRef = useRef<HTMLDivElement>(null)

  const [hasImageError, setHasImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState('/assets/images/alessio-bio.jpg')

  const headingWords = CHIE_HEADING.split(/\s+/).filter(Boolean)

  useEffect(() => {
    const section = sectionRef.current
    const subtitle = subtitleRef.current
    const imageBlock = imageEntranceRef.current
    const titleEl = titleRef.current
    const bioEl = bioRef.current
    const img = imgRef.current
    const lineV = lineVerticalRef.current
    const lineH = lineHorizontalRef.current

    if (!section || !subtitle || !titleEl || !bioEl) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      if (lineV) gsap.set(lineV, { scaleY: 1, transformOrigin: 'top center', force3D: true })
      if (lineH) gsap.set(lineH, { scaleX: 1, transformOrigin: 'left center', force3D: true })
      return
    }

    const animateDecorativeLines = window.innerWidth >= 768

    const lineTrigger =
      imageBlock != null && animateDecorativeLines
        ? {
            trigger: imageBlock,
            start: 'top 75%',
            toggleActions: 'play none none none' as const,
            invalidateOnRefresh: true,
          }
        : null

    const ctx = gsap.context(() => {
      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 1.15,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: subtitle,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        },
      )

      if (imageBlock) {
        gsap.fromTo(
          imageBlock,
          { opacity: 0, x: -48 },
          {
            opacity: 1,
            x: 0,
            duration: 1.35,
            ease: 'sine.out',
            force3D: true,
            scrollTrigger: {
              trigger: imageBlock,
              start: 'top 82%',
              toggleActions: 'play none none none',
              invalidateOnRefresh: true,
            },
          },
        )
      }

      if (img && !hasImageError) {
        gsap.to(img, {
          yPercent: -7,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        })
      }

      if (lineV && lineTrigger) {
        gsap.fromTo(
          lineV,
          { scaleY: 0, transformOrigin: 'top center', force3D: true },
          {
            scaleY: 1,
            duration: 1.45,
            ease: 'sine.out',
            force3D: true,
            scrollTrigger: lineTrigger,
          },
        )
      }

      if (lineH && lineTrigger) {
        gsap.fromTo(
          lineH,
          { scaleX: 0, transformOrigin: 'left center', force3D: true },
          {
            scaleX: 1,
            duration: 1.65,
            ease: 'sine.out',
            force3D: true,
            scrollTrigger: lineTrigger,
          },
        )
      }

      const titleWords = titleEl.querySelectorAll<HTMLElement>(`.${CHIE_TITLE_WORD_CLASS}`)
      if (titleWords.length > 0) {
        gsap.fromTo(
          titleWords,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: { each: 0.08 },
            ease: 'sine.out',
            scrollTrigger: {
              trigger: titleEl,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          },
        )
      }

      const bioBlocks = Array.from(bioEl.children) as HTMLElement[]
      if (bioBlocks.length > 0) {
        gsap.fromTo(
          bioBlocks,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: { each: 0.28, ease: 'sine.out' },
            ease: 'sine.out',
            force3D: true,
            scrollTrigger: {
              trigger: bioEl,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          },
        )
      }
    }, section)

    return () => {
      ctx.revert()
    }
  }, [hasImageError])

  const handleImageLoad = () => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
  }

  return (
    <section
      id="chi-e"
      ref={sectionRef}
      aria-labelledby="chie-heading"
      className="relative overflow-x-clip overflow-y-visible bg-white pt-0 pb-16 text-testo-scuro scroll-mt-24 md:py-24"
    >
      <p
        ref={subtitleRef}
        className="mx-auto mb-10 hidden max-w-6xl px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-azzurro-intenso/60 md:block md:text-sm lg:px-8"
      >
        {SUBTITLE_LINE}
      </p>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="relative flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-20">
          <div ref={imageColRef} className="relative z-0  lg:w-1/2">
            {!hasImageError ? (
              <div className="relative w-screen max-w-none -mx-7 min-h-[420px] overflow-hidden md:mx-0 md:min-h-0 md:w-full md:max-w-md md:rounded-2xl lg:max-w-none">
                <div ref={imageEntranceRef} className="relative h-full min-h-[420px] md:min-h-0">
                  <div className="h-full min-h-[420px] overflow-hidden rounded-none bg-azzurro-bg/80 md:min-h-0 md:rounded-2xl">
                    <div className="relative aspect-[4/5] min-h-[420px] w-full overflow-hidden md:aspect-[3/4] md:min-h-0">
                      <img
                        ref={imgRef}
                        src={imageSrc}
                        alt="Ritratto di Alessio Manuelli"
                        width={600}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top md:object-center"
                        onLoad={handleImageLoad}
                        onError={() => {
                          if (imageSrc.endsWith('.jpg')) {
                            setImageSrc('/assets/images/alessio-bio.svg')
                            return
                          }
                          setHasImageError(true)
                        }}
                      />
                    </div>
                  </div>
                  <p className="absolute bottom-4 left-0 right-0 z-20 px-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md backdrop-blur-sm md:hidden">
                    {SUBTITLE_LINE}
                  </p>
                </div>
                <div
                  ref={lineVerticalRef}
                  className="pointer-events-none absolute left-0 top-full z-0 h-28 w-px origin-top bg-azzurro-intenso/25"
                  aria-hidden="true"
                />
                <div
                  ref={lineHorizontalRef}
                  className="pointer-events-none absolute left-full top-0 z-0 h-px w-[min(70vw,40rem)] max-w-[640px] origin-left bg-azzurro-intenso/25"
                  aria-hidden="true"
                />
              </div>
            ) : (
              <div className="relative w-screen max-w-none -mx-7 min-h-[420px] overflow-hidden rounded-none md:mx-0 md:min-h-0 md:w-full md:max-w-md md:rounded-2xl lg:max-w-none">
                <div className="flex min-h-[420px] aspect-[4/5] items-center justify-center bg-gradient-to-br from-azzurro-chiaro to-ciano px-6 text-center md:aspect-[3/4] md:min-h-0">
                  <p className="text-lg font-semibold text-white">
                    Immagine non disponibile. Alessio è prima di tutto una persona che si prende cura degli
                    altri.
                  </p>
                </div>
                <p className="absolute bottom-4 left-0 right-0 z-20 px-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md backdrop-blur-sm md:hidden">
                  {SUBTITLE_LINE}
                </p>
              </div>
            )}
          </div>

          <div
            ref={contentRef}
            className="relative z-10 w-full space-y-0 border-l-0 pl-0 md:border-l-4 md:border-verde md:pl-6 lg:w-1/2 [&_strong]:text-azzurro-intenso"
          >
            <h2
              ref={titleRef}
              id="chie-heading"
              className="mb-4 text-[1.3rem] font-extrabold leading-tight text-azzurro-intenso md:mb-6 md:text-[2rem] md:font-bold lg:text-[2.25rem]"
            >
              {headingWords.map((word, i) => (
                <span key={`${i}-${word}`} className={`${CHIE_TITLE_WORD_CLASS} inline-block`}>
                  {word}
                  {i < headingWords.length - 1 ? '\u00A0' : ''}
                </span>
              ))}
            </h2>

            <div
              ref={bioRef}
              className="space-y-0 text-[0.93rem] text-testo-scuro md:text-[1.05rem]"
            >
              <p className="mb-0 leading-[1.9]">
                Ho trent'anni, sono cresciuto a Santa Marinella e ho scelto di restare — perché questa città
                vale la pena di essere curata.
              </p>
              <div>
                <div className="mt-6 mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-azzurro-intenso/60">
                  <span aria-hidden="true">🩺</span>
                  <span>Come Cardiologo</span>
                </div>
                <p className="mb-0 leading-[1.9]">
                  <strong>Cardiologo specializzato in Malattie dell'Apparato Cardiovascolare</strong> presso il
                  Policlinico Tor Vergata, con{' '}
                  <strong>
                    Master in Medicina d'Emergenza conseguito presso l'università Sapienza di Roma
                  </strong>. Ho imparato che davanti a un problema non ci si può permettere improvvisazione: serve{' '}
                  <strong>ascolto, analisi e cura</strong>. Lo stesso metodo che voglio portare{' '}
                  <strong>nella prossima amministrazione comunale</strong>.
                </p>
              </div>
              <div>
                <div className="mt-6 mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-azzurro-intenso/60">
                  <span aria-hidden="true">📌</span>
                  <span>Come Consigliere</span>
                </div>
                <p className="mb-0 leading-[1.9]">
                  Come <strong>Consigliere Comunale</strong> ho lavorato concretamente nelle deleghe a{' '}
                  <strong>Sanità e Turismo</strong> — dalla Città Cardio Protetta alle campagne informative sulla
                  prevenzione, dall'Archeobus alla riapertura e ripristino del Pit, punto di informazione
                  turistica. Ho portato risultati concreti, non promesse. Non da fuori, ma da dentro.
                </p>
              </div>
              <div>
                <div className="mt-6 mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-azzurro-intenso/60">
                  <span aria-hidden="true">🤝</span>
                  <span>Come Volontario</span>
                </div>
                <p className="mb-0 leading-[1.9]">
                  Cresciuto a Santa Marinella, dove vivo da sempre, ho sempre creduto nel valore del{' '}
                  <strong>volontariato e della partecipazione attiva</strong>. Perché una comunità forte si
                  costruisce insieme, giorno dopo giorno.
                </p>
              </div>
              <p className="mb-0 mt-6 leading-[1.9]">
                <strong>Oggi sono pronto a fare il passo successivo — insieme a chi ci tiene davvero.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

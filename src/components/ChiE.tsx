import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SUBTITLE_LINE = 'Lista Civica · Santa Marinella · Santa Severa'

export function ChiE() {
  const sectionRef = useRef<HTMLElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageColRef = useRef<HTMLDivElement>(null)
  const imageEntranceRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const lineVerticalRef = useRef<HTMLDivElement>(null)
  const lineHorizontalRef = useRef<HTMLDivElement>(null)

  const [hasImageError, setHasImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState('/assets/images/alessio-bio.jpg')

  useEffect(() => {
    const section = sectionRef.current
    const subtitle = subtitleRef.current
    const imageBlock = imageEntranceRef.current
    const content = contentRef.current
    const img = imgRef.current
    const lineV = lineVerticalRef.current
    const lineH = lineHorizontalRef.current

    if (!section || !subtitle || !content) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      if (lineV) gsap.set(lineV, { scaleY: 1, transformOrigin: 'top center', force3D: true })
      if (lineH) gsap.set(lineH, { scaleX: 1, transformOrigin: 'left center', force3D: true })
      return
    }

    const lineTrigger =
      imageBlock != null
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

      gsap.fromTo(
        content.children,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 1.05,
          stagger: { each: 0.24, ease: 'sine.out' },
          ease: 'sine.out',
          force3D: true,
          scrollTrigger: {
            trigger: content,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        },
      )
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
      className="relative overflow-x-clip overflow-y-visible bg-white py-16 text-testo-scuro scroll-mt-24 lg:py-20"
    >
      <p
        ref={subtitleRef}
        className="mx-auto mb-10 max-w-6xl px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-azzurro-intenso/60 md:text-sm lg:px-8"
      >
        {SUBTITLE_LINE}
      </p>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="relative flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-20">
          <div ref={imageColRef} className="relative z-0 w-full lg:w-1/2">
            {!hasImageError ? (
              <div className="relative w-full max-w-md lg:max-w-none">
                <div ref={imageEntranceRef}>
                  <div className="overflow-hidden rounded-none bg-azzurro-bg/80">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <img
                        ref={imgRef}
                        src={imageSrc}
                        alt="Ritratto di Alessio Manuelli"
                        width={600}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
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
              <div className="relative flex aspect-[3/4] w-full max-w-md items-center justify-center rounded-none bg-gradient-to-br from-azzurro-chiaro to-ciano px-6 text-center lg:max-w-none">
                <p className="text-lg font-semibold text-white">
                  Immagine non disponibile. Alessio è prima di tutto una persona che si prende cura degli
                  altri.
                </p>
              </div>
            )}
          </div>

          <div
            ref={contentRef}
            className="relative z-10 w-full space-y-0 lg:w-1/2 [&_strong]:text-azzurro-intenso"
          >
            <h2
              id="chie-heading"
              className="mb-4 text-[1.3rem] font-extrabold leading-tight text-azzurro-intenso md:mb-6 md:text-[2rem] md:font-bold lg:text-[2.25rem]"
            >
              Una persona di questa città, con le idee chiare.
            </h2>

            <div className="mb-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-full border border-ciano bg-azzurro-bg px-4 py-2 text-sm text-azzurro-intenso transition-colors hover:bg-azzurro-bg/90">
                <span aria-hidden="true">🩺</span>
                <span>Cardiologo</span>
              </span>
              <span className="flex items-center gap-2 rounded-full border border-ciano bg-azzurro-bg px-4 py-2 text-sm text-azzurro-intenso transition-colors hover:bg-azzurro-bg/90">
                <span aria-hidden="true">📌</span>
                <span>Consigliere Comunale</span>
              </span>
              <span className="flex items-center gap-2 rounded-full border border-ciano bg-azzurro-bg px-4 py-2 text-sm text-azzurro-intenso transition-colors hover:bg-azzurro-bg/90">
                <span aria-hidden="true">🤝</span>
                <span>Volontario</span>
              </span>
            </div>

            <div className="space-y-4 text-[0.93rem] leading-relaxed text-testo-scuro md:text-[1.05rem]">
              <p>
                Ho trent'anni, sono cresciuto a Santa Marinella e ho scelto di restare — perché questa città
                vale la pena di essere curata.
              </p>
              <p>
                <strong>Cardiologo specializzando in Malattie dell'Apparato Cardiovascolare</strong> presso il
                Policlinico Tor Vergata, con Master in Medicina d'Emergenza. Ho imparato che davanti a un
                problema non ci si può permettere improvvisazione: serve{' '}
                <strong>ascolto, analisi e cura</strong>. Lo stesso metodo che voglio portare in Comune.
              </p>
              <p>
                Come <strong>Consigliere Comunale</strong> ho lavorato concretamente sulle deleghe a{' '}
                <strong>Sanità e Turismo</strong> — dalla Città Cardio Protetta alle campagne informative sulla
                prevenzione, dall'Archeobus alla riapertura e ripristino del Pit, punto di informazione
                turistica. Ho portato risultati concreti, non promesse. Non da fuori, ma da dentro.
              </p>
              <p>
                Cresciuto a Santa Marinella, dove vivo da sempre, formato alla Sapienza Università di Roma, ho
                sempre creduto nel valore del <strong>volontariato e della partecipazione attiva</strong>.
                Perché una comunità forte si costruisce insieme, giorno dopo giorno.
              </p>
              <p>
                <strong>Oggi sono pronto a fare il passo successivo — insieme a chi ci tiene davvero.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

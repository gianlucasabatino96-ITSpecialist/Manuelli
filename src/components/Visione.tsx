import { useState } from 'react'
import { visioneCards } from '../data/content'
import { useFadeIn } from '../hooks/useFadeIn'

export function Visione() {
  const { ref, isVisible } = useFadeIn()
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title)
  }

  return (
    <section id="visione" aria-labelledby="visione-heading" className="scroll-mt-24 bg-azzurro-bg px-8 py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <h2
          id="visione-heading"
          className="section-title text-center text-[1.8rem] font-bold text-azzurro-intenso md:text-[2.5rem]"
        >
          Su cosa lavoreremo insieme
        </h2>
        <p className="section-subtitle mx-auto mt-4 max-w-3xl text-center text-[0.95rem] text-gray-600 md:text-[1rem]">
          Il programma è in costruzione — proprio come si costruisce una buona amministrazione: ascoltando prima di decidere. Torna presto, i punti saranno qui.
        </p>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visioneCards.map((card, index) => {
            const isExpanded = expandedCard === card.title
            
            return (
              <article
                key={card.title}
                className={`group flex w-full flex-col items-start gap-4 rounded-2xl border-t-4 border-verde bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-verde/20 md:p-8 ${
                  index === 4 ? 'md:col-span-2 md:mx-auto md:max-w-[50%] lg:col-span-1 lg:mx-0 lg:max-w-none' : ''
                } ${isVisible ? 'animate-cardReveal' : 'opacity-0'}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                <div className="flex w-full items-center gap-4 md:flex-col md:text-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-verde/10 text-[2rem] transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-verde/20 md:mb-2 md:h-20 md:w-20 md:text-[2.5rem]">
                    <span aria-hidden="true">{card.emoji}</span>
                  </div>
                  <div className="flex min-h-[3.5rem] flex-1 items-center text-left md:min-h-[4.5rem] md:justify-center md:text-center">
                    <h3 className="text-lg font-bold text-testo-scuro md:text-xl lg:text-2xl">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-auto w-full space-y-4">
                  <div
                    id={`card-detail-${index}`}
                    aria-hidden={!isExpanded}
                    className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {card.description ? (
                      <p className="whitespace-pre-line text-left text-[0.9rem] leading-relaxed text-gray-600 md:text-base md:leading-loose">
                        {card.description}
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleCard(card.title)}
                    aria-expanded={isExpanded}
                    aria-controls={`card-detail-${index}`}
                    aria-label={
                      isExpanded ? `Chiudi dettagli: ${card.title}` : `Scopri di più su: ${card.title}`
                    }
                    className="mx-auto flex items-center gap-2 rounded-full bg-verde/5 px-5 py-2.5 text-sm font-bold text-verde transition-all duration-300 hover:bg-verde/10 hover:text-verde-scuro md:text-[0.95rem]"
                  >
                    <span>{isExpanded ? 'Chiudi' : 'Scopri di più'}</span>
                    <svg
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

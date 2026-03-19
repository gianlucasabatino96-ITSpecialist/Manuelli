import { visioneCards } from '../data/content'
import { useFadeIn } from '../hooks/useFadeIn'

export function Visione() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="visione" className="scroll-mt-24 bg-azzurro-bg px-8 py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <h2 className="section-title text-center text-[1.8rem] font-bold text-azzurro-intenso md:text-[2.5rem]">
          Su cosa lavoreremo insieme
        </h2>
        <p className="section-subtitle mx-auto mt-4 max-w-3xl text-center text-[0.95rem] text-gray-600 md:text-[1rem]">
          Il programma è in costruzione — proprio come si costruisce una buona amministrazione: ascoltando prima di decidere. Torna presto, i punti saranno qui.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visioneCards.map((card, index) => (
            <article
              key={card.title}
              className="flex flex-row items-center gap-4 rounded-[10px] border-t-[3px] border-verde bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 md:flex-col md:p-8 md:text-center"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-[48px] text-[2rem] md:mb-4 md:w-auto md:text-[3rem]">{card.emoji}</div>
              <div className="flex-1 space-y-2 text-left md:text-center">
                <h3 className="text-lg font-semibold text-testo-scuro md:text-xl">
                  {card.title}
                </h3>
                <span className="inline-flex items-center rounded-[20px] bg-verde/[0.12] px-[0.6rem] py-[0.15rem] text-[0.75rem] font-semibold tracking-normal text-verde">
                  {card.status === 'prossimamente' ? 'Prossimamente' : 'Disponibile'}
                </span>
                {card.description ? (
                  <p className="mt-2 text-sm text-gray-600">{card.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


import { useFadeIn } from '../hooks/useFadeIn'
import { useTypewriter } from '../hooks/useTypewriter'

const LINE1_TEXT = 'Il futuro non si aspetta.'
const LINE2_TEXT = 'Si decide.'

const HERO_BG_SRC = '/assets/images/santa-marinella-e-loghi-manuelli.jpg'

export function PercheOra() {
  const { ref, isVisible } = useFadeIn()

  const line1 = useTypewriter(LINE1_TEXT, 55, isVisible)
  const line2Ready = line1.length === LINE1_TEXT.length
  const line2 = useTypewriter(LINE2_TEXT, 55, line2Ready)

  const isCursorVisible = line2.length < LINE2_TEXT.length

  return (
    <section
      ref={ref}
      aria-label="Perché ora — Santa Marinella merita di più"
      className="relative isolate overflow-hidden px-8 py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <img
          src={HERO_BG_SRC}
          alt=""
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="low"
          draggable={false}
          className="h-full min-h-full w-full object-cover object-[58%_42%] motion-safe:transition-[object-position] motion-safe:duration-700 sm:object-[62%_45%] md:object-[72%_48%] lg:object-[82%_50%] xl:object-[88%_50%] 2xl:object-right"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0c6393]/95 via-[#0c6393]/78 to-[#0c6393]/35 md:from-[#0c6393]/92 md:via-[#0c6393]/55 md:to-[#0c6393]/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a4d6e]/50 via-transparent to-[#0c6393]/25"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-8 text-left text-[1.8rem] font-bold drop-shadow-md md:text-[3rem]">
          Santa Marinella merita di più.
        </h2>

        <p className="mb-6 text-left text-[1rem] leading-[1.9] drop-shadow-sm md:text-[1.15rem]">
          Una città con un mare straordinario, un patrimonio storico invidiabile e una comunità viva — ma con un
          potenziale ancora in gran parte inespresso.
        </p>

        <p className="mb-6 text-left text-[1rem] leading-[1.9] drop-shadow-sm md:text-[1.15rem]">
          Negli ultimi anni abbiamo visto indebolirsi i servizi, raffreddare il senso di comunità, e una politica
          sempre più distante da chi ci vive davvero.
        </p>

        <p className="mb-6 text-left text-[1rem] leading-[1.9] drop-shadow-sm md:text-[1.15rem]">
          Noi crediamo che basti poco per cambiare rotta: una guida presente, competente e che abbia a cuore ogni
          angolo di questo territorio.
        </p>

        <div className="my-6 flex flex-wrap justify-center gap-2">
          {['Dialogo costante', 'Partecipazione', 'Presenza reale', 'Trasparenza', 'Appartenenza'].map((v) => (
            <span
              key={v}
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
            >
              {v}
            </span>
          ))}
        </div>

        <hr className="my-8 border-t border-ciano/30" />

        <div className="px-4 py-6 text-center md:py-12">
          <span className="break-words text-[clamp(1.5rem,4vw,1.8rem)] font-bold text-verde drop-shadow-md md:text-[clamp(1.8rem,3vw,3rem)]">
            {line1}
            {line1.length === LINE1_TEXT.length && (
              <>
                <br />
                {line2}
                {isCursorVisible && <span className="animate-pulse">|</span>}
              </>
            )}
          </span>
        </div>
      </div>
    </section>
  )
}

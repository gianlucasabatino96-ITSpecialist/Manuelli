import { useFadeIn } from '../hooks/useFadeIn'
import { useTypewriter } from '../hooks/useTypewriter'

const LINE1_TEXT = 'Il futuro non si aspetta.'
const LINE2_TEXT = 'Si decide.'

const HERO_BG_SRC = '/assets/images/santa-marinella-sfondo.jpg'

const BADGE_VALUES = [
  'Dialogo costante',
  'Partecipazione',
  'Presenza reale',
  'Trasparenza',
  'Appartenenza',
] as const

const OVERLAY_MOBILE =
  'linear-gradient(to top, rgba(26,26,46,0.95) 0%, rgba(26,26,46,0.6) 60%, rgba(26,26,46,0.2) 100%)'

const OVERLAY_DESKTOP =
  'linear-gradient(to right, rgba(26,26,46,0.92) 0%, rgba(26,26,46,0.7) 50%, rgba(26,26,46,0) 100%)'

export function PercheOra() {
  const { ref, isVisible, directionClasses } = useFadeIn()

  const line1 = useTypewriter(LINE1_TEXT, 55, isVisible)
  const line2Ready = line1.length === LINE1_TEXT.length
  const line2 = useTypewriter(LINE2_TEXT, 55, line2Ready)

  const isCursorVisible = line2.length < LINE2_TEXT.length

  return (
    <section
      id="perche-ora"
      aria-labelledby="perche-ora-heading"
      className="relative isolate min-h-screen overflow-hidden text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-no-repeat bg-[center_60%] md:bg-[center_50%] lg:bg-[center_40%]"
        style={{ backgroundImage: `url('${HERO_BG_SRC}')` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 lg:hidden"
        style={{ background: OVERLAY_MOBILE }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        style={{ background: OVERLAY_DESKTOP }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-8 py-20 lg:grid-cols-2 lg:items-start">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 lg:text-left ${directionClasses}`}
        >
          <h2
            id="perche-ora-heading"
            className="mb-8 text-center font-bold text-white text-[clamp(1.8rem,3.5vw,2.8rem)] lg:text-left"
          >
            Santa Marinella merita di più.
          </h2>

          <p className="mb-6 text-center text-[1rem] leading-[1.9] text-white/80 md:text-[1.15rem] lg:text-left">
            Una città con un mare straordinario, un patrimonio storico invidiabile e una comunità viva — ma con un
            potenziale ancora in gran parte inespresso.
          </p>

          <p className="mb-6 text-center text-[1rem] leading-[1.9] text-white/80 md:text-[1.15rem] lg:text-left">
            Negli ultimi anni abbiamo visto indebolirsi i servizi, raffreddare il senso di comunità, e una politica
            sempre più distante da chi ci vive davvero.
          </p>

          <p className="mb-6 text-center text-[1rem] leading-[1.9] text-white/80 md:text-[1.15rem] lg:text-left">
            Noi crediamo che basti poco per cambiare rotta: una guida presente, competente e che abbia a cuore ogni
            angolo di questo territorio.
          </p>

          <ul
            role="list"
            aria-label="Valori della campagna"
            className="my-6 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {BADGE_VALUES.map((v) => (
              <li key={v} className="list-none">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/20">
                  {v}
                </span>
              </li>
            ))}
          </ul>

          <hr className="my-8 border-white/20" aria-hidden="true" />

          <p
            aria-label="Il futuro non si aspetta. Si decide."
            aria-live="off"
            className="break-words px-4 py-6 text-center text-[clamp(1.6rem,3vw,2.5rem)] font-bold text-white md:py-12 lg:px-0 lg:text-left"
          >
            {line1}
            {line1.length === LINE1_TEXT.length && (
              <>
                <br />
                {line2}
                {isCursorVisible && (
                  <span aria-hidden="true" className="text-azzurro-chiaro animate-pulse">
                    |
                  </span>
                )}
              </>
            )}
          </p>
        </div>

        <div className="hidden min-h-0 lg:block" aria-hidden="true" />
      </div>
    </section>
  )
}

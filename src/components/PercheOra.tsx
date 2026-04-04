import type { CSSProperties, ReactNode } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { useTypewriter } from '../hooks/useTypewriter'

const STAGGER_MS = 78
const BADGE_STAGGER_BASE_MS = STAGGER_MS * 4
const BADGE_STAGGER_STEP_MS = 42

function staggerClassName(isVisible: boolean): string {
  return [
    'motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:animate-none',
    isVisible
      ? 'motion-safe:animate-fadeInUp motion-safe:opacity-100'
      : 'translate-y-5 opacity-0',
  ].join(' ')
}

function staggerStyle(isVisible: boolean, delayMs: number): CSSProperties | undefined {
  if (!isVisible) return undefined
  return {
    animationDelay: `${delayMs}ms`,
    animationFillMode: 'both',
  }
}

function StaggerBlock({ children, isVisible, delayMs }: { children: ReactNode; isVisible: boolean; delayMs: number }) {
  return (
    <div className={staggerClassName(isVisible)} style={staggerStyle(isVisible, delayMs)}>
      {children}
    </div>
  )
}

const LINE1_TEXT = 'Il futuro non si aspetta.'
const LINE2_TEXT = 'Si decide.'

const HERO_BG_MOBILE_TABLET = '/assets/images/santa-marinella-sfondo.jpg'
const HERO_BG_DESKTOP = '/assets/images/santa-marinella-e-loghi-manuelli.jpg'

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
  const { ref, isVisible } = useFadeIn()

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
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-no-repeat bg-[center_55%] md:bg-[center_50%] lg:hidden"
        style={{ backgroundImage: `url('${HERO_BG_MOBILE_TABLET}')` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-cover bg-no-repeat bg-[center_40%] lg:block"
        style={{ backgroundImage: `url('${HERO_BG_DESKTOP}')` }}
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
        <div ref={ref} className="text-center lg:text-left">
          <StaggerBlock isVisible={isVisible} delayMs={0}>
            <h2
              id="perche-ora-heading"
              className="mb-8 text-center font-bold text-white text-[clamp(1.8rem,3.5vw,2.8rem)] drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] lg:text-left"
            >
              Santa Marinella merita di più.
            </h2>
          </StaggerBlock>

          <StaggerBlock isVisible={isVisible} delayMs={STAGGER_MS * 1}>
            <p className="mb-6 text-center text-[1rem] leading-[1.9] text-white/80 md:text-[1.15rem] lg:text-left">
              Una città con un mare straordinario, un patrimonio storico invidiabile e una comunità viva — ma con un
              potenziale ancora in gran parte inespresso.
            </p>
          </StaggerBlock>

          <StaggerBlock isVisible={isVisible} delayMs={STAGGER_MS * 2}>
            <p className="mb-6 text-center text-[1rem] leading-[1.9] text-white/80 md:text-[1.15rem] lg:text-left">
              Negli ultimi anni abbiamo visto indebolirsi i servizi, raffreddare il senso di comunità, e una politica
              sempre più distante da chi ci vive davvero.
            </p>
          </StaggerBlock>

          <StaggerBlock isVisible={isVisible} delayMs={STAGGER_MS * 3}>
            <p className="mb-6 text-center text-[1rem] leading-[1.9] text-white/80 md:text-[1.15rem] lg:text-left">
              Noi crediamo che basti poco per cambiare rotta: una guida presente, competente e che abbia a cuore ogni
              angolo di questo territorio.
            </p>
          </StaggerBlock>

          <ul
            role="list"
            aria-label="Valori della campagna"
            className="my-6 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {BADGE_VALUES.map((v, i) => (
              <li
                key={v}
                className={`list-none ${staggerClassName(isVisible)}`}
                style={staggerStyle(isVisible, BADGE_STAGGER_BASE_MS + i * BADGE_STAGGER_STEP_MS)}
              >
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/20">
                  {v}
                </span>
              </li>
            ))}
          </ul>

          <StaggerBlock
            isVisible={isVisible}
            delayMs={
              BADGE_STAGGER_BASE_MS + BADGE_VALUES.length * BADGE_STAGGER_STEP_MS + STAGGER_MS
            }
          >
            <hr className="my-8 border-white/20" aria-hidden="true" />
          </StaggerBlock>

          <StaggerBlock
            isVisible={isVisible}
            delayMs={
              BADGE_STAGGER_BASE_MS + BADGE_VALUES.length * BADGE_STAGGER_STEP_MS + STAGGER_MS * 2
            }
          >
            <p
              aria-label="Il futuro non si aspetta. Si decide."
              aria-live="off"
              className="break-words px-4 py-6 text-center text-[clamp(1.6rem,3vw,2.5rem)] font-bold text-white drop-shadow-[0_0_24px_rgba(52,182,215,0.22)] md:py-12 lg:px-0 lg:text-left"
            >
              {line1}
              {line1.length === LINE1_TEXT.length && (
                <>
                  <br />
                  {line2}
                  {isCursorVisible && (
                    <span aria-hidden="true" className="text-azzurro-chiaro motion-safe:animate-pulse">
                      |
                    </span>
                  )}
                </>
              )}
            </p>
          </StaggerBlock>
        </div>

        <div className="hidden min-h-0 lg:block" aria-hidden="true" />
      </div>
    </section>
  )
}

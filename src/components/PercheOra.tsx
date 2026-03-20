import { useEffect, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { useTypewriter } from '../hooks/useTypewriter'

const LINE1_TEXT = 'Il futuro non si aspetta.'
const LINE2_TEXT = 'Si decide.'

export function PercheOra() {
  const { ref, isVisible } = useFadeIn()
  const [line2Ready, setLine2Ready] = useState(false)

  const line1 = useTypewriter(LINE1_TEXT, 55, isVisible)
  const line2 = useTypewriter(LINE2_TEXT, 55, line2Ready)

  useEffect(() => {
    if (line1.length === LINE1_TEXT.length) {
      setLine2Ready(true)
    }
  }, [line1])

  const isCursorVisible = line2.length < LINE2_TEXT.length

  return (
    <section
      ref={ref}
      aria-label="Perché ora — Santa Marinella merita di più"
      className="bg-gradient-to-r from-[#0c6393] to-[#308d95] px-8 py-20 text-white"
      style={{ background: 'linear-gradient(135deg, #0c6393 0%, #308d95 100%)' }}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-left text-[1.8rem] font-bold md:text-[3rem]">
          Santa Marinella merita di più.
        </h2>

        <p className="mb-6 text-left text-[1rem] leading-[1.9] md:text-[1.15rem]">
          Una città con un mare straordinario, un patrimonio storico invidiabile e una comunità viva — ma con un potenziale ancora in gran parte inespresso.
        </p>

        <p className="mb-6 text-left text-[1rem] leading-[1.9] md:text-[1.15rem]">
          Negli ultimi anni abbiamo visto indebolirsi i servizi, raffreddare il senso di comunità, e una politica sempre più distante da chi ci vive davvero.
        </p>

        <p className="mb-6 text-left text-[1rem] leading-[1.9] md:text-[1.15rem]">
          Noi crediamo che basti poco per cambiare rotta: una guida presente, competente e che abbia a cuore ogni angolo di questo territorio.
        </p>

        <div className="my-6 flex flex-wrap justify-center gap-2">
          {['Dialogo costante', 'Partecipazione', 'Presenza reale', 'Trasparenza', 'Appartenenza'].map(
            (v) => (
              <span
                key={v}
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                {v}
              </span>
            ),
          )}
        </div>

        <hr className="my-8 border-t border-ciano/30" />

        <div className="px-4 py-8 text-center">
          <span className="break-words text-[clamp(1.5rem,4vw,1.8rem)] font-bold text-verde md:text-[clamp(1.8rem,3vw,3rem)]">
            {line1}
            {line1.length === LINE1_TEXT.length && (
              <>
                <br />
                {line2}
                {isCursorVisible && (
                  <span className="animate-pulse">|</span>
                )}
              </>
            )}
          </span>
        </div>
      </div>
    </section>
  )
}

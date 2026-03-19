import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

export function ChiE() {
  const { ref, isVisible } = useFadeIn()
  const [hasImageError, setHasImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState('/assets/images/alessio-bio.jpg')

  return (
    <section id="chi-e" className="scroll-mt-24 bg-white px-8 py-20 md:px-12">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 transition-all duration-700 md:grid-cols-[1fr_1.5fr] md:gap-16 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="order-1 md:order-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-azzurro-chiaro to-ciano">
            {!hasImageError ? (
              <img
                src={imageSrc}
                alt="Alessio Manuelli"
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
                onError={() => {
                  if (imageSrc.endsWith('.jpg')) {
                    setImageSrc('/assets/images/alessio-bio.svg')
                    return
                  }
                  setHasImageError(true)
                }}
              />
            ) : (
              <div className="relative flex h-full w-full items-center justify-center px-6 text-center text-white">
                <p className="text-lg font-semibold">
                  Immagine non disponibile. Alessio è prima di tutto una persona che si prende cura
                  degli altri.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="order-2 md:order-2">
          <h3 className="mb-4 text-[1.3rem] font-extrabold leading-tight text-azzurro-intenso md:mb-6 md:text-[2rem] md:font-bold">
            Una persona di questa città, con le idee chiare.
          </h3>

          <div className="mb-6 flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-full border border-ciano bg-azzurro-bg px-4 py-2 text-sm text-azzurro-intenso">
              <span>🩺</span>
              <span>Cardiologo</span>
            </span>
            <span className="flex items-center gap-2 rounded-full border border-ciano bg-azzurro-bg px-4 py-2 text-sm text-azzurro-intenso">
              <span>📌</span>
              <span>Consigliere Comunale</span>
            </span>
            <span className="flex items-center gap-2 rounded-full border border-ciano bg-azzurro-bg px-4 py-2 text-sm text-azzurro-intenso">
              <span>🤝</span>
              <span>Volontario</span>
            </span>
          </div>

          <p className="mb-4 text-[0.93rem] leading-[1.8] md:text-[1.05rem]">
            Ho trent'anni, sono cresciuto a Santa Marinella e ho scelto di restare — perché questa città vale la pena di essere curata.
          </p>

          <p className="mb-4 text-[0.93rem] leading-[1.8] md:text-[1.05rem]">
            <strong>Cardiologo specializzando in Malattie dell'Apparato Cardiovascolare</strong> presso il Policlinico Tor Vergata, con Master in Medicina d'Emergenza. Ho imparato che davanti a un problema non ci si può permettere improvvisazione: serve <strong>ascolto, analisi e cura</strong>. Lo stesso metodo che voglio portare in Comune.
          </p>

          <p className="mb-4 text-[0.93rem] leading-[1.8] md:text-[1.05rem]">
            Come <strong>Consigliere Comunale</strong> ho lavorato concretamente sulle deleghe a <strong>Sanità e Turismo</strong> — dalla Città Cardio Protetta alle campagne informative sulla prevenzione, dall'Archeobus alla riapertura e ripristino del Pit, punto di informazione turistica. Ho portato risultati concreti, non promesse. Non da fuori, ma da dentro.
          </p>

          <p className="mb-4 text-[0.93rem] leading-[1.8] md:text-[1.05rem]">
            Cresciuto a Santa Marinella, dove vivo da sempre, formato alla Sapienza Università di Roma, ho sempre creduto nel valore del <strong>volontariato e della partecipazione attiva</strong>. Perché una comunità forte si costruisce insieme, giorno dopo giorno.
          </p>

          <p className="text-[0.93rem] leading-[1.8] md:text-[1.05rem]">
            <strong>Oggi sono pronto a fare il passo successivo — insieme a chi ci tiene davvero.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}


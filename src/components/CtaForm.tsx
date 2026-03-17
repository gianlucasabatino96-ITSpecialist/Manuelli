import type { FormEvent } from 'react'
import { useState } from 'react'
import { whatsappNumber } from '../data/content'

export function CtaForm() {
  const [nome, setNome] = useState('')
  const [telefono, setTelefono] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const text = encodeURIComponent(
      `Ciao, sono ${nome}. Il mio numero è ${telefono}. Vorrei unirmi alla campagna #PrendiamociCura.`
    )
    const url = `https://wa.me/${whatsappNumber}?text=${text}`
    window.open(url, '_blank', 'noopener')
    setSubmitted(true)
  }

  return (
    <section
      id="unisciti"
      className="bg-gradient-to-br from-verde to-ciano px-8 py-20 text-center text-white"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold md:text-4xl">Vuoi fare la differenza?</h2>
        <p className="mt-3 text-white/90">
          Lascia il tuo nome e numero: ti contatteremo su WhatsApp per tenerti aggiornato sugli eventi, le iniziative e come puoi contribuire.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-lg space-y-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome e cognome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
            className="w-full rounded-full px-6 py-4 text-[max(1rem,16px)] text-testo-scuro outline-none ring-0 focus:ring-2 focus:ring-white/60"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Numero di telefono"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
            required
            className="w-full rounded-full px-6 py-4 text-[max(1rem,16px)] text-testo-scuro outline-none ring-0 focus:ring-2 focus:ring-white/60"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-verde shadow-md transition hover:bg-gray-100"
          >
            <WhatsAppIcon />
            <span>Unisciti su WhatsApp</span>
          </button>
        </form>

        {submitted ? (
          <div className="mx-auto mt-6 max-w-lg rounded-2xl bg-white/20 p-6 text-sm backdrop-blur">
            <h3 className="text-lg font-bold">Grazie! 🎉</h3>
            <p className="mt-2">Ti contatteremo presto su WhatsApp.</p>
          </div>
        ) : null}

        <p className="mt-4 text-sm text-white/80">Nessuno spam. Solo aggiornamenti sulla campagna.</p>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="h-5 w-5"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#25D366"
        d="M16 3C9.383 3 4 8.383 4 15c0 2.398.773 4.617 2.082 6.434L4 29l7.777-2.027A11.9 11.9 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3z"
      />
      <path
        fill="#FFF"
        d="M22.354 18.708c-.383-.191-2.266-1.117-2.617-1.242s-.608-.191-.863.191-.992 1.242-1.219 1.5-.45.287-.833.096a7.28 7.28 0 0 1-3.842-3.359c-.291-.5.291-.463.825-1.541.092-.191.046-.354-.023-.5s-.863-2.078-1.183-2.848c-.312-.75-.633-.647-.863-.647-.223-.023-.48-.023-.736-.023s-.675.096-1.029.5-1.35 1.32-1.35 3.219 1.383 3.736 1.575 3.988.271.5.521.766a11.7 11.7 0 0 0 3.979 3.008c1.475.637 2.055.691 2.793.584.45-.07 2.266-.922 2.586-1.816.328-.887.328-1.645.23-1.807-.098-.164-.352-.262-.735-.453z"
      />
    </svg>
  )
}


import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { ChiE } from '../components/ChiE'
import Visione from '../components/Visione'
import { PercheOra } from '../components/PercheOra'
import { SocialProof } from '../components/SocialProof'
import { CtaForm } from '../components/CtaForm'
import { Footer } from '../components/Footer'
import { WhatsappFloat } from '../components/WhatsappFloat'

export function Home() {
  return (
    <div className="min-h-screen bg-white text-testo-scuro">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ChiE />
        <section
          id="visione"
          aria-labelledby="visione-heading"
          className="scroll-mt-24 bg-azzurro-bg px-8 py-20"
        >
          <header className="mx-auto mb-12 flex max-w-6xl flex-col items-center text-center">
            <span className="mb-4 inline-flex rounded-full bg-verde/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-verde">
              Il programma
            </span>
            <h2
              id="visione-heading"
              className="text-balance text-[1.75rem] font-bold tracking-tight text-azzurro-intenso md:text-[2.5rem]"
            >
              Le priorità per il nostro territorio
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-[0.95rem] text-gray-500 md:text-base">
              Il programma prende forma ascoltando il territorio: infrastrutture, cultura, ambiente, decoro e
              politiche per le nuove generazioni come pilastri concreti per Santa Marinella.
            </p>
          </header>
          <Visione />
        </section>
        <PercheOra />
        <SocialProof />
        <CtaForm />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  )
}


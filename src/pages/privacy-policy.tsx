import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { WhatsappFloat } from '../components/WhatsappFloat'

export function PrivacyPolicy() {
  return (
    <div id="top" className="min-h-screen bg-white text-testo-scuro">
      <Navbar />
      <main className="pt-24">
        <section className="mx-auto max-w-3xl px-8 py-12 md:px-12">
          <h1 className="mb-4 text-3xl font-bold text-azzurro-intenso">Privacy Policy</h1>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Questa pagina contiene informazioni generali sul trattamento dei dati personali. Inserisci qui
            i dettagli della tua privacy policy conforme alle normative applicabili.
          </p>
          <p className="mb-0 text-sm leading-relaxed text-gray-600">
            Ultimo aggiornamento: 2026.
          </p>
        </section>
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  )
}


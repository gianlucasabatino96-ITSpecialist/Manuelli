import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { ChiE } from '../components/ChiE'
import { Visione } from '../components/Visione'
import { PercheOra } from '../components/PercheOra'
import { SocialProof } from '../components/SocialProof'
import { CtaForm } from '../components/CtaForm'
import { Footer } from '../components/Footer'
import { WhatsappFloat } from '../components/WhatsappFloat'

export function Home() {
  return (
    <div className="min-h-screen bg-white text-testo-scuro">
      <Navbar />
      <main>
        <Hero />
        <ChiE />
        <Visione />
        <PercheOra />
        <SocialProof />
        <CtaForm />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  )
}


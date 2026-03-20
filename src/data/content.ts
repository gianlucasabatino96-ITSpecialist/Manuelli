import type { Testimonial, VisioneCard, NavLink, LogoLista } from '../types'

export const navLinks: NavLink[] = [
  { label: 'Chi è', href: '#chi-e' },
  { label: 'Visione', href: '#visione' },
  { label: 'Unisciti', href: '#unisciti' },
]

export const visioneCards: VisioneCard[] = [
  { emoji: '🏥', title: 'Sanità e servizi', status: 'prossimamente', description: 'Defibrillatori, prevenzione, sportelli d\'ascolto e servizi di prossimità.' },
  { emoji: '🏛️', title: 'Cultura e turismo', status: 'prossimamente', description: 'Archeobus, eventi estivi, Castello di Santa Severa e attrattori permanenti.' },
  { emoji: '🌊', title: 'Territorio e ambiente', status: 'prossimamente', description: 'Decoro urbano, gestione rifiuti, mobilità sostenibile e opere PNRR.' },
  { emoji: '👥', title: 'Comunità e partecipazione', status: 'prossimamente', description: 'Consiglio Comunale dei Giovani, dialogo costante e trasparenza reale.' },
  { emoji: '🚀', title: 'Futuro e lavoro', status: 'prossimamente', description: 'Innovazione, digitalizzazione, turismo accessibile e Bandiera Lilla.' },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Siamo in tantissimi a sostenerti in questa avventura elettorale perché sei una persona seria che merita stima e rispetto. Tu che pensi sempre agli altri e hai fatto della tua vita un esempio di altruismo e determinazione sarai un bravo Sindaco per Santa Marinella! Avanti tutta Alessio Manuelli!',
    author: 'Maria Teresa Vitali',
  },
  {
    quote:
      'Un profilo pragmatico, preparato e fortemente radicato nella città. La scelta giusta per Santa Marinella.',
    author: 'Sen. Francesco Giro',
    role: 'Senatore della Repubblica',
  },
  {
    quote:
      "Alessio ha un'identità che ha dimostrato in ogni tempo e in ogni ruolo, ed ha un futuro.",
    author: 'Ileana Giacomelli',
    role: 'Dirigente scolastica, Santa Marinella',
  },
  {
    quote:
      'Sarà un sindaco sostenuto da un gruppo di lavoro che sa fare sintesi e confrontarsi. Sono certa che sarà una bella avventura.',
    author: 'Giovanna Caratelli',
    role: 'Fondatrice PD Santa Marinella',
  },
]

export const logoListe: LogoLista[] = [
  {
    src: '/assets/logos/logo-noi-con-manuelli-round.svg',
    fallbackSrc: '/assets/logos/logo-manuelli.svg',
    alt: 'Noi con Manuelli Sindaco',
    fallback: 'Noi con Manuelli',
    name: 'Noi con Manuelli',
  },
  {
    src: '/assets/logos/logo-uniti-per-manuelli-round.svg',
    fallbackSrc: '/assets/logos/logo-uniti-per-manuelli.png',
    alt: 'Uniti per Manuelli Sindaco',
    fallback: 'Uniti per Manuelli',
    name: 'Uniti per Manuelli',
  },
  {
    src: '/assets/logos/logo-orizzonti-comuni-round.svg',
    fallbackSrc: '/assets/logos/logo-orizzonti-comuni.jpg',
    alt: 'Orizzonti Comuni',
    fallback: 'Orizzonti Comuni',
    name: 'Orizzonti Comuni',
  },
]

export const whatsappNumber = '393520190945'
export const instagramUrl = 'https://www.instagram.com/alessio_manuelli/'
export const facebookUrl = 'https://www.facebook.com/alessio.manuelli'


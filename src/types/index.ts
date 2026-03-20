export interface Testimonial {
  quote: string
  author: string
  role?: string
}

export interface VisioneCard {
  emoji: string
  title: string
  status: 'prossimamente' | 'disponibile'
  description?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface LogoLista {
  src: string
  fallbackSrc?: string
  alt: string
  fallback: string
  name: string
}


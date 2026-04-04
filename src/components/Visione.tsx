import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ChevronDown,
  Construction,
  Landmark,
  Leaf,
  PaintBucket,
  Zap,
} from 'lucide-react'
import { visioneCards } from '../data/content'
import type { VisioneCard } from '../types'
import { useFadeIn } from '../hooks/useFadeIn'

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

const VISIONE_THEMES: Record<string, { accent: string; tagline: string; Icon: LucideIcon }> = {
  'Infrastrutture e sicurezza stradale': {
    accent: '#2fa56a',
    tagline: 'Strade sicure, città che funziona',
    Icon: Construction,
  },
  'Cultura e turismo': {
    accent: '#308d95',
    tagline: 'Radici vive, porte aperte',
    Icon: Landmark,
  },
  'Ambiente e verde pubblico': {
    accent: '#0c6393',
    tagline: 'Più alberi, meno cemento',
    Icon: Leaf,
  },
  'Decoro urbano e arredo urbano': {
    accent: '#34b6d7',
    tagline: 'Orgoglio di vivere qui',
    Icon: PaintBucket,
  },
  'Sport e politiche giovani': {
    accent: '#2fa56a',
    tagline: 'Energie da non sprecare',
    Icon: Zap,
  },
}

const FALLBACK_THEME = {
  accent: '#2fa56a',
  tagline: '',
  Icon: Construction,
}

function getTheme(card: VisioneCard) {
  return VISIONE_THEMES[card.title] ?? FALLBACK_THEME
}

export default function Visione() {
  const { ref, isVisible } = useFadeIn()
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title)
  }

  const renderCard = (card: VisioneCard, index: number) => {
    const isExpanded = expandedCard === card.title
    const { accent, tagline, Icon } = getTheme(card)
    const isFeatured = index === 0

    const iconBoxClass = `flex shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
      isFeatured ? 'h-14 w-14' : 'h-11 w-11'
    }`

    const titleBlock = (
      <div className="min-w-0 space-y-1 text-left md:space-y-1.5">
        {tagline ? (
          <p className="text-xs font-semibold uppercase tracking-widest text-azzurro-intenso/60">
            {tagline}
          </p>
        ) : null}
        <h3 className="text-lg font-bold text-azzurro-intenso md:text-xl lg:text-2xl">{card.title}</h3>
      </div>
    )

    const expandAndButton = (
      <div className="relative mt-4 w-full space-y-4">
        <div
          id={`card-detail-${index}`}
          aria-hidden={!isExpanded}
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {card.description ? (
            <div className="max-h-40 overflow-y-auto pr-1">
              <p className="whitespace-pre-line text-left text-[0.9rem] leading-relaxed text-gray-600 md:text-base md:leading-loose">
                {card.description}
              </p>
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => toggleCard(card.title)}
          aria-expanded={isExpanded}
          aria-controls={`card-detail-${index}`}
          aria-label={
            isExpanded ? `Chiudi dettagli: ${card.title}` : `Scopri di più su: ${card.title}`
          }
          className="relative z-10 mx-auto flex items-center gap-2 rounded-full bg-verde/5 px-5 py-2.5 text-sm font-bold text-verde transition-all duration-300 hover:bg-verde/10 hover:text-testo-scuro md:text-[0.95rem]"
        >
          <span>{isExpanded ? 'Chiudi' : 'Scopri di più'}</span>
          <ChevronDown
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            strokeWidth={1.75}
          />
        </button>
      </div>
    )

    return (
      <article
        key={card.title}
        className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-md transition-shadow duration-300 hover:shadow-xl ${
          isFeatured ? 'p-5 md:p-8' : 'p-4 md:p-6'
        } ${isFeatured ? 'md:col-span-2' : ''} ${isVisible ? 'animate-cardReveal' : 'opacity-0'}`}
        style={{
          animationDelay: `${index * 100}ms`,
          animationFillMode: 'both',
        }}
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full transition-transform duration-500 group-hover:scale-125"
          style={{ backgroundColor: hexToRgba(accent, 0.06) }}
          aria-hidden="true"
        />

        {isFeatured ? (
          <div className="relative flex w-full flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <div className={iconBoxClass} style={{ backgroundColor: hexToRgba(accent, 0.1) }}>
              <Icon size={28} strokeWidth={1.75} color={accent} aria-hidden="true" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              {titleBlock}
              {expandAndButton}
            </div>
          </div>
        ) : (
          <div className="relative flex w-full flex-col gap-3">
            <div className={iconBoxClass} style={{ backgroundColor: hexToRgba(accent, 0.1) }}>
              <Icon size={22} strokeWidth={1.75} color={accent} aria-hidden="true" />
            </div>
            {titleBlock}
            {expandAndButton}
          </div>
        )}
      </article>
    )
  }

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-6xl transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        {visioneCards.map((card, i) => renderCard(card, i))}
      </div>
    </div>
  )
}

import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/content'

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: href })
      setIsOpen(false)
      return
    }

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) {
      return
    }
    const target = document.querySelector(location.hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash, location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white px-6 py-4 md:px-8 transition-shadow ${
        hasShadow ? 'shadow-md' : ''
      }`}
    >
      <nav className="mx-auto flex  items-center justify-between">
        <a href="/#top" className="text-2xl font-bold text-azzurro-intenso">
          Manuelli Sindaco
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="text-sm font-medium text-testo-scuro transition-colors hover:text-verde"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative flex min-h-11 min-w-11 items-center justify-center rounded-full text-testo-scuro md:hidden"
          aria-label={isOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 rounded bg-current transition-transform duration-200 ${
              isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 rounded bg-current transition-all duration-200 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-0.5 w-5 -translate-x-1/2 rounded bg-current transition-transform duration-200 ${
              isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <ul className="space-y-2 px-2 pt-3 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="block rounded-full px-4 py-2 text-sm font-medium text-testo-scuro hover:bg-azzurro-bg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}


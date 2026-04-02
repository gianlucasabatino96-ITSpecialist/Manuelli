import type { HTMLAttributes, MouseEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/content'

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

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

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const menu = menuRef.current
    if (!menu) {
      return
    }

    const getFocusable = () =>
      Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute('disabled'))

    const focusFirst = () => {
      requestAnimationFrame(() => {
        const list = getFocusable()
        list[0]?.focus()
      })
    }
    focusFirst()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') {
        return
      }

      const currentList = getFocusable()
      const currentFirst = currentList[0]
      const currentLast = currentList[currentList.length - 1]
      if (!currentFirst || !currentLast) {
        return
      }

      if (e.shiftKey) {
        if (document.activeElement === currentFirst) {
          e.preventDefault()
          currentLast.focus()
        }
      } else if (document.activeElement === currentLast) {
        e.preventDefault()
        currentFirst.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm px-6 py-4 md:px-8 transition-shadow ${
        hasShadow ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <a href="/#top" aria-label="Torna alla home" className="text-2xl font-bold text-azzurro-intenso">
          Manuelli Sindaco
        </a>

        <nav aria-label="Menu principale" className="hidden md:block">
          <ul className="flex items-center gap-8">
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
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="relative flex min-h-11 min-w-11 items-center justify-center rounded-full text-testo-scuro md:hidden"
          aria-label={isOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
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
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Menu di navigazione"
        aria-modal={isOpen}
        aria-hidden={!isOpen}
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? 'max-h-[min(100vh,24rem)]' : 'max-h-0'
        }`}
        {...(!isOpen ? ({ inert: true } as HTMLAttributes<HTMLDivElement>) : {})}
      >
        <nav aria-label="Menu mobile" className="px-2 pt-3 pb-4">
          <ul className="space-y-2">
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
        </nav>
      </div>
    </header>
  )
}

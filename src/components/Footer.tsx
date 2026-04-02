import { facebookUrl, instagramUrl } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-testo-scuro px-8 py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-verde">Alessio Manuelli</h3>
          <p className="text-sm text-white/90">Candidato Sindaco</p>
          <p className="footer-claim mt-2 text-[1.1rem] font-semibold text-verde">#PrendiamociCura</p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-verde">Seguici</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profilo Instagram di Alessio Manuelli"
              className="inline-flex items-center gap-3 rounded bg-white/10 px-4 py-2 text-sm transition hover:bg-verde"
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pagina Facebook di Alessio Manuelli"
              className="inline-flex items-center gap-3 rounded bg-white/10 px-4 py-2 text-sm transition hover:bg-verde"
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-verde">Informazioni</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/privacy" className="text-white/80 transition hover:text-verde">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/cookie" className="text-white/80 transition hover:text-verde">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-white/80">
          © 2026 Alessio Manuelli – Candidato Sindaco Santa Marinella e Santa Severa
        </p>
        <p className="mt-2 text-[0.75rem] text-white/60">
          Sito realizzato ai sensi del D.Lgs. 196/2003 e GDPR 2016/679
        </p>
      </div>
    </footer>
  )
}

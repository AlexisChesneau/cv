import { ArrowUp } from 'lucide-react'
import { contact, profile } from '../../data/cv'
import { LinkedinIcon } from '../ui/Icon'

/** Pied de page simple. */
export function Footer() {
  return (
    <footer className="border-t border-accent/15 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        {/* L'année peut différer de celle du HTML pré-généré au build : pas d'alerte */}
        <p className="font-mono text-xs text-muted" suppressHydrationWarning>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          <span aria-hidden="true" className="text-accent">
            {' '}
            ·{' '}
          </span>
          <span className="block sm:inline">Conçu avec React, Tailwind CSS & Framer Motion</span>
        </p>
        <div className="flex items-center gap-3">
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="Mon profil LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-accent/30 text-muted transition-all hover:border-accent hover:text-accent-light hover:shadow-[0_0_16px_rgb(6_182_212/0.5)]"
            >
              <LinkedinIcon className="size-4" />
              <span className="sr-only">Mon profil LinkedIn (s'ouvre dans un nouvel onglet)</span>
            </a>
          )}
          <a
            href="#accueil"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/30 px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent-light"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            Haut de page
          </a>
        </div>
      </div>
    </footer>
  )
}

import { useSyncExternalStore } from 'react'

/**
 * Renvoie `true` si la media query CSS correspond, et se met à jour
 * automatiquement (redimensionnement, changement de préférence système…).
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

/** Raccourcis utilisés dans le site. */
export const MOBILE_QUERY = '(max-width: 767px)'
export const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)'
/**
 * Préférence « réduire les animations ». À utiliser à la place de useReducedMotion
 * de Framer Motion : vaut `false` pendant l'hydratation (comme le HTML pré-généré)
 * puis la vraie valeur juste après, ce qui évite les erreurs d'hydratation.
 */
export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

/**
 * Rendu HTML de la page au moment du build (voir scripts/prerender.mjs).
 * Le navigateur affiche ce HTML immédiatement, sans attendre le JavaScript ;
 * React s'y « branche » ensuite (hydratation) dans src/main.tsx.
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

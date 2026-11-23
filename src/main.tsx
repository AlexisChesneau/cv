import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Polices auto-hébergées (pas de requête vers Google : meilleur score Lighthouse et RGPD)
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import './index.css'
import App from './App'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// En production, le HTML est pré-généré au build (scripts/prerender.mjs) :
// React se branche dessus au lieu de tout reconstruire. En dev, la page est vide.
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)

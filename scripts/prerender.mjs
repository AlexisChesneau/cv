/**
 * Pré-rendu du site au build : injecte le HTML de la page dans dist/index.html.
 * Sur mobile, le contenu s'affiche ainsi dès réception du HTML, sans attendre
 * le téléchargement et l'exécution du JavaScript.
 *
 * Lancé automatiquement par `npm run build`, après :
 *   vite build                                          → dist/
 *   vite build --ssr src/entry-server.tsx --outDir dist-ssr
 */
import { readFile, rm, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const ssrDir = new URL('../dist-ssr/', import.meta.url)

const { render } = await import(new URL('entry-server.js', ssrDir).href)
const appHtml = render()

let html = await readFile(new URL('index.html', dist), 'utf8')
const placeholder = '<div id="root"></div>'
if (!html.includes(placeholder)) throw new Error(`prerender : « ${placeholder} » introuvable dans dist/index.html`)
html = html.replace(placeholder, `<div id="root">${appHtml}</div>`)

await writeFile(new URL('index.html', dist), html)
await rm(ssrDir, { recursive: true, force: true })
console.log(`✓ prerender : ${Math.round(appHtml.length / 1024)} Ko de HTML`)

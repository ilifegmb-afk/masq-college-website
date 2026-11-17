/** Shortest time the loading screen stays up, so it never just flashes on a fast connection. */
const MIN_VISIBLE_MS = 1500
/** Longest the loading screen waits for the site font. After that the page shows anyway. */
const FONT_TIMEOUT_MS = 3000
/** Time for the browser to redraw the page in the font once it has arrived. */
const REDRAW_MS = 150
/** Same length as the fade-out transition on #splash in index.html. */
const FADE_MS = 500

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms))

// Start downloading the site font (Poppins, see --font-sans in index.css) in every weight the site uses
// as soon as this file loads. Otherwise the text switches font, and jumps, just after the screen fades.
const fontDownloads = Promise.all(
  ['400', '500', '600', '700'].map((weight) => document.fonts.load(`${weight} 1em Poppins`)),
).catch(() => {}) // If the font cannot load, the page simply uses the fallback font.

let hiding = false

/** Fades out the loading screen (the college logo in index.html) once the site font has arrived, then removes it. */
export function hideSplash() {
  const splash = document.getElementById('splash')
  if (!splash || hiding) return
  hiding = true

  const minimumTime = wait(MIN_VISIBLE_MS - performance.now())
  // The downloads, then the page redrawn in the font (document.fonts.ready + a moment), but never longer than the timeout.
  const fontReady = fontDownloads.then(() => document.fonts.ready).then(() => wait(REDRAW_MS))
  const font = Promise.race([fontReady, wait(FONT_TIMEOUT_MS)])

  Promise.all([minimumTime, font]).then(() => {
    splash.classList.add('splash-hidden')
    window.setTimeout(() => splash.remove(), FADE_MS)
  })
}

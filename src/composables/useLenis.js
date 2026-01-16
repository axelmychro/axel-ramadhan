import Lenis from 'lenis'

let lenis = null
let rafId = null
let onClick = null

export const initializeLenis = () => {
  lenis = new Lenis({ smooth: true, lerp: 0.09, wheelMultiplier: 0.9 })

  const raf = time => {
    lenis?.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)

  onClick = e => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return

    e.preventDefault()
    lenis?.scrollTo(link.getAttribute('href'))
  }

  document.addEventListener('click', onClick)
}

export const destroyLenis = () => {
  if (onClick) {
    document.removeEventListener('click', onClick)
    onClick = null
  }

  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = null
  }

  lenis?.destroy()
  lenis = null
}

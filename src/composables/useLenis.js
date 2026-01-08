import Lenis from 'lenis'
let lenis
let rafId

export const initializeLenis = () => {
  lenis = new Lenis({ smooth: true, lerp: 0.09, wheelMultiplier: 0.9 })
  const raf = time => {
    lenis?.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)
  const onClick = e => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return

    e.preventDefault()
    lenis?.scrollTo(link.getAttribute('href'))
  }

  document.addEventListener('click', onClick)
}
export const destroyLenis = () => {
  document.removeEventListener('click', onClick)
  cancelAnimationFrame(rafId)
  lenis?.destroy()
}

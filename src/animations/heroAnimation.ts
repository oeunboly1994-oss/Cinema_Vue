import gsap from 'gsap'

export function animateHeroTitle(element: HTMLElement) {
  gsap.fromTo(element,
    { opacity: 0, y: 50, scale: 0.8 },
    { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.2)' }
  )
}
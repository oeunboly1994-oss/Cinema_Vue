import gsap from 'gsap'

export function animateSeatSelect(element: HTMLElement) {
  gsap.fromTo(element,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out' }
  )
}

export function animateSeatPulse(element: HTMLElement) {
  gsap.to(element, {
    scale: 1.1,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
    ease: 'power2.inOut'
  })
}
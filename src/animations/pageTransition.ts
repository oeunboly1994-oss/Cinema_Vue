import gsap from 'gsap'

export function pageTransitionIn(element: Element) {
  gsap.fromTo(element,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  )
}

export function pageTransitionOut(element: Element) {
  return gsap.to(element, {
    opacity: 0,
    y: -30,
    duration: 0.4,
    ease: 'power2.in'
  })
}
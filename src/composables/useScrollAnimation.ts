import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  onMounted(() => {
    // "Responsive": Skip heavy scroll animations on small screens
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    gsap.utils.toArray('[data-scroll]').forEach((element: any) => {
      gsap.fromTo(element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  })
  
  // Call this after dynamic content updates (like filtering)
  const refreshAnimations = () => {
    ScrollTrigger.refresh()
  }

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return { refreshAnimations }
}
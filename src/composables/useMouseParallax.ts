import { ref, onMounted, onUnmounted } from 'vue'

export function useMouseParallax(strength = 0.05) {
  const x = ref(0)
  const y = ref(0)
  
  const handleMouseMove = (e: MouseEvent) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    x.value = (e.clientX - centerX) * strength
    y.value = (e.clientY - centerY) * strength
  }
  
  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })
  
  return { x, y }
}
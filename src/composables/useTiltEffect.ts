import { ref, onMounted, onUnmounted } from 'vue'

export function useTiltEffect(element: HTMLElement) {
  const rotation = ref({ x: 0, y: 0 })
  
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rotation.value = { x: y * 20, y: x * 20 }
  }
  
  const handleMouseLeave = () => {
    rotation.value = { x: 0, y: 0 }
  }
  
  onMounted(() => {
    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)
  })
  
  onUnmounted(() => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
  })
  
  return rotation
}
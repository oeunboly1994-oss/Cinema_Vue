import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useTiltEffect(target: Ref<HTMLElement | null>) {
  const rotation = ref({ x: 0, y: 0 })
  
  // Check for touch device to prevent unnecessary calculations/stutter
  const isTouchDevice = typeof window !== 'undefined' && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  const handleMouseMove = (e: MouseEvent) => {
    if (!target.value) return
    const rect = target.value.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    rotation.value = { x: (y - 0.5) * -20, y: (x - 0.5) * 20 }
  }
  
  const handleMouseLeave = () => {
    rotation.value = { x: 0, y: 0 }
  }
  
  onMounted(() => {
    if (isTouchDevice) return
    target.value?.addEventListener('mousemove', handleMouseMove)
    target.value?.addEventListener('mouseleave', handleMouseLeave)
  })
  
  onUnmounted(() => {
    if (isTouchDevice) return
    target.value?.removeEventListener('mousemove', handleMouseMove)
    target.value?.removeEventListener('mouseleave', handleMouseLeave)
  })
  
  return rotation
}
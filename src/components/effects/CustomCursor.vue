<template>
  <div 
    class="fixed w-8 h-8 pointer-events-none z-[9999] rounded-full border-2 border-neon transition-transform duration-100"
    :style="{ transform: `translate(${x}px, ${y}px) scale(${isHovering ? 1.5 : 1})` }"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
const isHovering = ref(false)

const onMouseMove = (e: MouseEvent) => {
  x.value = e.clientX - 16
  y.value = e.clientY - 16
}

const onMouseOver = (e: MouseEvent) => {
  if ((e.target as HTMLElement).tagName === 'BUTTON' || 
      (e.target as HTMLElement).closest('button') ||
      (e.target as HTMLElement).classList?.contains('movie-card')) {
    isHovering.value = true
  }
}

const onMouseOut = () => {
  isHovering.value = false
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseover', onMouseOver)
  document.addEventListener('mouseout', onMouseOut)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseover', onMouseOver)
  document.removeEventListener('mouseout', onMouseOut)
})
</script>
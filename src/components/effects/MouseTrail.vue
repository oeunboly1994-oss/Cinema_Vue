<template>
  <div
    v-for="(dot, i) in dots"
    :key="i"
    class="fixed w-2 h-2 rounded-full bg-neon pointer-events-none z-[9998]"
    :style="{ left: dot.x + 'px', top: dot.y + 'px', opacity: 1 - i / dots.length }"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const dots = ref<{ x: number; y: number }[]>([])
const positions = ref<{ x: number; y: number }[]>([])
const trailLength = 15

onMounted(() => {
  for (let i = 0; i < trailLength; i++) {
    dots.value.push({ x: 0, y: 0 })
    positions.value.push({ x: 0, y: 0 })
  }
  
  const onMouseMove = (e: MouseEvent) => {
    positions.value.unshift({ x: e.clientX, y: e.clientY })
    positions.value.pop()
    dots.value = [...positions.value]
  }
  
  document.addEventListener('mousemove', onMouseMove)
  onUnmounted(() => document.removeEventListener('mousemove', onMouseMove))
})
</script>
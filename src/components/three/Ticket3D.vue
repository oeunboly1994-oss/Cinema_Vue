<template>
  <TresCanvas class="w-64 h-64" clear-color="transparent">
    <TresPerspectiveCamera :position="[0, 0, 2]" />
    <TresGroup :rotation="[rotation.x, rotation.y, 0]">
      <TresMesh :position="[0, 0, 0]">
        <TresBoxGeometry :args="[1.6, 0.8, 0.05]" />
        <TresMeshStandardMaterial color="#B026FF" :metalness="0.8" :roughness="0.2" emissive="#00F3FF" :emissiveIntensity="0.3" />
      </TresMesh>
      <TresMesh :position="[0, 0, 0.04]">
        <TresBoxGeometry :args="[1.4, 0.6, 0.01]" />
        <TresMeshStandardMaterial color="#ffffff" />
      </TresMesh>
    </TresGroup>
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { ref, onMounted } from 'vue'

const rotation = ref({ x: 0, y: 0 })

onMounted(() => {
  let time = 0
  const animate = () => {
    time += 0.01
    rotation.value = { x: Math.sin(time) * 0.5, y: Math.cos(time * 0.7) * 0.5 }
    requestAnimationFrame(animate)
  }
  animate()
})
</script>
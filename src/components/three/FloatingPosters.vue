<template>
  <TresCanvas class="absolute inset-0 z-0" clear-color="#0A0A0F">
    <TresPerspectiveCamera :position="[0, 2, 8]" :fov="45" />
    <TresOrbitControls v-if="false" />
    
    <TresAmbientLight :intensity="0.5" />
    <TresDirectionalLight :position="[5, 5, 5]" :intensity="1" />
    <TresPointLight :position="[-2, 3, 4]" :intensity="2" color="#00F3FF" />
    
    <TresGroup ref="postersGroup">
      <TresMesh v-for="(poster, i) in posters" :key="i" :position="poster.position" :rotation="poster.rotation">
        <TresPlaneGeometry :args="[2.5, 3.7]" />
        <TresMeshStandardMaterial :map="poster.texture" :emissive="0xB026FF" :emissiveIntensity="0.2" />
      </TresMesh>
    </TresGroup>
  </TresCanvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TresCanvas } from '@tresjs/core'
import * as THREE from 'three'

const postersGroup = ref()
const posters = ref<any[]>([])

onMounted(() => {
  const textureLoader = new THREE.TextureLoader()
  const posterImages = [
    'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=500',
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500',
    'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500',
    'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500'
  ]
  
  posters.value = posterImages.map((url, i) => ({
    texture: textureLoader.load(url),
    position: [(-3 + i * 2) * 1.2, Math.sin(i) * 0.5, -1 + i * 0.5],
    rotation: [0, Math.sin(i) * 0.3, 0]
  }))
  
  // Animate floating effect
  let time = 0
  const animate = () => {
    time += 0.01
    if (postersGroup.value) {
      postersGroup.value.children.forEach((child: THREE.Mesh, idx: number) => {
        child.position.y = Math.sin(time + idx) * 0.2
        child.rotation.y = Math.sin(time * 0.5 + idx) * 0.2
      })
    }
    requestAnimationFrame(animate)
  }
  animate()
})
</script>
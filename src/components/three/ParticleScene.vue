<template>
  <TresCanvas class="absolute inset-0 pointer-events-none" clear-color="#000000">
    <TresPerspectiveCamera :position="[0, 0, 10]" />
    <TresPoints>
      <TresBufferGeometry :attributes="attributes" />
      <TresPointsMaterial :color="0x00F3FF" :size="0.1" :transparent="true" :opacity="0.6" />
    </TresPoints>
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import * as THREE from 'three'

const particleCount = 1000
const positions = new Float32Array(particleCount * 3)

for (let i = 0; i < particleCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 20
  positions[i * 3 + 1] = (Math.random() - 0.5) * 10
  positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5
}

const attributes = {
  position: new THREE.BufferAttribute(positions, 3)
}
</script>
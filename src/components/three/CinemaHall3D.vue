<template>
  <TresCanvas class="w-full h-[500px] rounded-xl" clear-color="#11111A">
    <TresPerspectiveCamera :position="[0, 4, 12]" :fov="50" />
    <TresOrbitControls enableZoom enablePan />
    
    <TresAmbientLight :intensity="0.4" />
    <TresDirectionalLight :position="[5, 10, 5]" :intensity="1" />
    <TresPointLight :position="[0, 3, 0]" :intensity="0.8" color="#B026FF" />
    
    <!-- Screen -->
    <TresMesh :position="[0, 2.5, -4]" :scale="[5, 3, 1]">
      <TresPlaneGeometry />
      <TresMeshStandardMaterial color="#ffffff" emissive="#00f3ff" :emissiveIntensity="0.3" />
    </TresMesh>
    
    <!-- Seats Grid -->
    <TresGroup v-for="row in 8" :key="row" :position="[(-(row - 4.5) * 0.5), 0, (row - 4) * 0.8]">
      <TresMesh v-for="seat in 12" :key="seat" :position="[(seat - 6.5) * 0.6, 0.2, 0]">
        <TresBoxGeometry :args="[0.5, 0.4, 0.5]" />
        <TresMeshStandardMaterial :color="row % 2 === 0 ? '#00F3FF' : '#B026FF'" :roughness="0.3" :metalness="0.7" />
      </TresMesh>
    </TresGroup>
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>
<template>
  <DefaultLayout>
    <div class="cinema-container py-32">
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-5xl font-display font-bold mb-4">Premium <span class="neon-text">Hall Preview</span></h1>
        <p class="text-gray-400">Experience our state-of-the-art cinema halls</p>
      </div>
      
      <div class="glass-card p-8 mb-12" data-aos="zoom-in">
        <CinemaHall3D />
      </div>
      
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="hall in halls" :key="hall.name" class="glass-card p-6 text-center" data-aos="fade-up">
          <h3 class="text-2xl font-bold mb-2">{{ hall.name }}</h3>
          <p class="text-gray-400 mb-4">{{ hall.capacity }} seats • {{ hall.features }}</p>
          <button class="text-neon hover:underline">View Showtimes →</button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
import CinemaHall3D from '../components/three/CinemaHall3D.vue'

const halls = [
  { name: 'IMAX Hall', capacity: 350, features: 'IMAX Laser • Dolby Atmos' },
  { name: 'Premium Hall', capacity: 200, features: 'Recliners • 4K Projection' },
  { name: 'Classic Hall', capacity: 150, features: 'Standard Seating • Digital Sound' }
]
</script>
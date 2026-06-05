<template>
  <section class="relative h-screen overflow-hidden">
    <!-- 3D Floating Posters Background -->
    <FloatingPosters />
    
    <!-- Dynamic Spotlight -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/20 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <div class="relative z-10 h-full flex items-center justify-center text-center">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 class="text-6xl md:text-8xl font-display font-bold mb-6 animate-glow">
          Cinematic <span class="neon-text">Experience</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl px-4">
          Immerse yourself in the ultimate movie experience with stunning visuals and premium sound
        </p>
        <div class="flex gap-4 justify-center">
          <button class="px-8 py-4 bg-neon-gradient rounded-full font-semibold hover:scale-110 transition-transform">
            Book Now
          </button>
          <button class="px-8 py-4 glass-card rounded-full font-semibold hover:scale-110 transition-transform">
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import FloatingPosters from './three/FloatingPosters.vue'
</script>
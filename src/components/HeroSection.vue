<template>
  <section 
    class="relative h-screen overflow-hidden transition-colors duration-300"
    :class="uiStore.isDarkMode ? 'bg-cinema-black' : 'bg-white'"
  >
    <!-- 3D Background layers -->
    <div class="absolute inset-0 z-0">
      <Suspense>
        <template #default>
          <div class="contents">
            <FloatingPosters :mouse-x="mouseX" :mouse-y="mouseY" />
            <ParticleScene />
          </div>
        </template>
        <template #fallback>
          <div class="absolute inset-0 bg-cinema-black"></div>
        </template>
      </Suspense>
    </div>

    <!-- Dynamic Spotlight -->
    <div class="absolute inset-0 pointer-events-none">
      <div 
        class="absolute w-[800px] h-[800px] bg-neon/15 rounded-full blur-[120px] transition-transform duration-700 ease-out"
        :style="spotlightStyle"
      ></div>
    </div>
    
    <div class="relative z-10 h-full flex items-center justify-center text-center">
      <div ref="contentRef" class="opacity-0 translate-y-8" :style="textParallaxStyle">
        <h1 class="text-6xl md:text-9xl font-display font-bold mb-6 tracking-tight leading-tight md:leading-none" :class="uiStore.isDarkMode ? 'text-white' : 'text-cinema-black'">
          Cinematic <span class="neon-text drop-shadow-[0_0_20px_rgba(0,243,255,0.3)]">Experience</span>
        </h1>
        <p class="text-lg md:text-2xl mb-10 max-w-2xl px-6 mx-auto leading-relaxed" :class="uiStore.isDarkMode ? 'text-gray-300' : 'text-gray-600'">
          Immerse yourself in the ultimate movie experience with stunning visuals and premium sound
        </p>
        <div class="flex gap-4 justify-center">
          <button class="px-10 py-4 bg-neon-gradient rounded-full font-bold text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all">
            Book Now →
          </button>
          <button class="px-10 py-4 glass-card rounded-full font-bold hover:bg-white/10 transition-all">
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted, defineAsyncComponent } from 'vue'
import gsap from 'gsap'
import { useUiStore } from '../stores/ui'

// Optimization: Fix large chunks by lazy-loading heavy 3D components
const FloatingPosters = defineAsyncComponent(() => import('./three/FloatingPosters.vue'))
const ParticleScene = defineAsyncComponent(() => import('./three/ParticleScene.vue'))

const uiStore = useUiStore()
const contentRef = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)

const spotlightStyle = computed(() => ({
  transform: `translate(${mouseX.value - 400}px, ${mouseY.value - 400}px)`
}))

// "Cooler" Animation: Text Parallax Effect
const textParallaxStyle = computed(() => ({
  transform: `
    perspective(1000px) 
    translate3d(${(mouseX.value / window.innerWidth - 0.5) * -20}px, ${(mouseY.value / window.innerHeight - 0.5) * -20}px, 0)
    rotateY(${(mouseX.value / window.innerWidth - 0.5) * 5}deg)
  `,
  transition: 'transform 0.1s ease-out'
}))

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  
  // Smooth reveal animation
  gsap.to(contentRef.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power4.out',
    delay: 0.8
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
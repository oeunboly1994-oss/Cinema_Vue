<template>
  <DefaultLayout>
    <div v-if="movie" class="relative">
      <div class="absolute inset-0 h-[70vh] overflow-hidden">
        <img :src="movie.backdrop" alt="" class="w-full h-full object-cover opacity-30">
        <div class="absolute inset-0 bg-gradient-to-t from-cinema-black via-cinema-black/80 to-transparent"></div>
      </div>
      
      <div class="relative cinema-container pt-32 pb-20">
        <div class="grid md:grid-cols-3 gap-12">
          <div class="md:col-span-1" data-aos="fade-right">
            <div class="rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <img :src="movie.poster" :alt="movie.title" class="w-full">
            </div>
          </div>
          
          <div class="md:col-span-2" data-aos="fade-left">
            <h1 class="text-4xl md:text-5xl font-display font-bold mb-4">{{ movie.title }}</h1>
            <div class="flex flex-wrap gap-3 mb-6">
              <span v-for="genre in movie.genre" :key="genre" class="px-3 py-1 bg-cinema-gray rounded-full text-sm">
                {{ genre }}
              </span>
            </div>
            <div class="flex items-center gap-6 mb-6 text-gray-300">
              <span>⭐ {{ movie.rating }}/5</span>
              <span>⏱️ {{ movie.duration }}</span>
              <span>📅 {{ movie.releaseDate }}</span>
            </div>
            <p class="text-gray-300 leading-relaxed mb-8">{{ movie.description }}</p>
            <button class="px-8 py-3 bg-neon-gradient rounded-full font-semibold hover:scale-105 transition-transform">
              Book Tickets
            </button>
          </div>
        </div>
        
        <div class="mt-20" data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-6">Official Trailer</h2>
          <div class="aspect-video rounded-2xl overflow-hidden">
            <iframe :src="movie.trailer" frameborder="0" allowfullscreen class="w-full h-full"></iframe>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useMoviesStore } from '../stores/movies'

const route = useRoute()
const moviesStore = useMoviesStore()
const movie = ref<any>(null)

onMounted(() => {
  const id = route.params.id as string
  movie.value = moviesStore.fetchMovieById(id)
})
</script>

<style scoped>
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.02);
}
</style>
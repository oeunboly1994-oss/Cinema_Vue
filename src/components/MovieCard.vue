<template>
  <div class="movie-card group cursor-pointer" @click="goToDetail">
    <div class="relative rounded-2xl overflow-hidden">
      <img :src="movie.poster" :alt="movie.title" class="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
        <button class="w-full py-2 bg-neon-gradient rounded-full text-sm font-semibold">Book Now</button>
      </div>
    </div>
    <div class="mt-4">
      <h3 class="font-bold text-lg">{{ movie.title }}</h3>
      <div class="flex justify-between text-sm text-gray-400">
        <span>{{ movie.duration }}</span>
        <span>⭐ {{ movie.rating }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  movie: any
}>()

const router = useRouter()

function goToDetail() {
  router.push(`/movie/${props.movie.id}`)
}
</script>

<style scoped>
.movie-card {
  transition: transform 0.3s ease;
}
.movie-card:hover {
  transform: translateY(-8px);
}
</style>
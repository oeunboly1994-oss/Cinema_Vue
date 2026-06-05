<template>
  <DefaultLayout>
    <div class="cinema-container py-32">
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-5xl md:text-6xl font-display font-bold mb-4">Movie <span class="neon-text">Library</span></h1>
        <p class="text-gray-400">Discover our collection of blockbusters and classics</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <MovieCard
          v-for="movie in moviesStore.movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
import MovieCard from '../components/MovieCard.vue'
import { useMoviesStore } from '../stores/movies'

const moviesStore = useMoviesStore()
</script>

<template>
  <DefaultLayout>
    <div class="cinema-container py-32">
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-5xl md:text-6xl font-display font-bold mb-4" :class="uiStore.isDarkMode ? 'text-white' : 'text-gray-900'">Movie <span class="neon-text">Library</span></h1>
        <p :class="uiStore.isDarkMode ? 'text-gray-400' : 'text-gray-600'">Discover our collection of blockbusters and classics</p>
      </div>
      
      <!-- Search and Filter Bar: Added for advanced options -->
      <div class="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between glass-card p-6" data-aos="fade-up">
        <div class="relative w-full md:max-w-md">
          <input 
            v-model="moviesStore.searchQuery"
            type="text" 
            placeholder="Search movies..." 
            class="w-full border rounded-full px-6 py-3 outline-none focus:border-neon transition placeholder:text-gray-500"
            :class="uiStore.isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'"
          >
        </div>
        
        <div class="flex gap-4 w-full md:w-auto">
          <select 
            v-model="moviesStore.selectedGenre"
            class="flex-1 md:w-40 border rounded-full px-4 py-3 outline-none focus:border-neon cursor-pointer text-sm"
            :class="uiStore.isDarkMode ? 'bg-cinema-black border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'"
          >
            <option v-for="genre in moviesStore.genres" :key="genre" :value="genre">{{ genre }}</option>
          </select>
          
          <select 
            v-model="moviesStore.sortBy"
            class="flex-1 md:w-40 border rounded-full px-4 py-3 outline-none focus:border-neon cursor-pointer text-sm"
            :class="uiStore.isDarkMode ? 'bg-cinema-black border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'"
          >
            <option value="title">Title</option>
            <option value="rating">Rating</option>
            <option value="releaseDate">Newest</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <MovieCard
          v-for="movie in moviesStore.filteredMovies"
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
import { useUiStore } from '../stores/ui'

const moviesStore = useMoviesStore()
const uiStore = useUiStore()
</script>

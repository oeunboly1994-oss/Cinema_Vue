<template>
  <DefaultLayout>
    <HeroSection />
    
    <div class="cinema-container py-20">
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-4">
          Now <span class="neon-text">Showing</span>
        </h2>
        <p class="text-gray-400 text-lg">Experience the best of cinema in stunning 4K</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <MovieCard
          v-for="movie in moviesStore.featuredMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
    
    <div class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-neon-gradient/10 blur-3xl"></div>
      <div class="cinema-container relative">
        <div class="glass-card p-12 text-center" data-aos="zoom-in">
          <h3 class="text-3xl md:text-4xl font-bold mb-4">Premium Cinema Experience</h3>
          <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
            Immersive sound, crystal clear projection, and luxurious seating for the ultimate movie experience
          </p>
          <button class="px-8 py-3 bg-neon-gradient rounded-full font-semibold hover:scale-105 transition-transform">
            Book Your Ticket
          </button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HeroSection from '../components/HeroSection.vue'
import MovieCard from '../components/MovieCard.vue'
import { useMoviesStore } from '../stores/movies'

const moviesStore = useMoviesStore()
</script>
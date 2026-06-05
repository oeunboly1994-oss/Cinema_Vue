import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockMovies } from '../mock/movies'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref(mockMovies)
  const featuredMovies = ref(mockMovies.slice(0, 4))
  const selectedMovie = ref<any>(null)

  function fetchMovieById(id: string) {
    selectedMovie.value = movies.value.find(m => m.id === id)
    return selectedMovie.value
  }

  return { movies, featuredMovies, selectedMovie, fetchMovieById }
})
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mockMovies } from '../mock/movies'
import { sort } from 'radashi'

interface Movie {
  id: string
  title: string
  description: string
  poster: string
  backdrop: string
  genre: string[]
  rating: number
  duration: string
  releaseDate: string
  trailer: string
}

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>(mockMovies)
  const searchQuery = ref('')
  const selectedGenre = ref('All')
  const sortBy = ref<'rating' | 'releaseDate' | 'title'>('title')

  const featuredMovies = ref(mockMovies.slice(0, 4))
  const selectedMovie = ref<any>(null)

  // "More Options": Real-time search, genre filtering, and dynamic sorting
  const filteredMovies = computed(() => {
    const filtered = movies.value.filter((movie: Movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      const matchesGenre = selectedGenre.value === 'All' || movie.genre.includes(selectedGenre.value)
      return matchesSearch && matchesGenre
    })

    return sort(filtered, 
      (m: any) => m[sortBy.value], 
      sortBy.value === 'title' ? false : true // Descending for rating/date, Ascending for title
    )
  })

  const genres = computed(() => ['All', ...new Set(movies.value.flatMap(m => m.genre))])

  // EZ Use: Reset all filters
  function resetFilters() {
    searchQuery.value = ''
    selectedGenre.value = 'All'
    sortBy.value = 'title'
  }

  function fetchMovieById(id: string) {
    selectedMovie.value = movies.value.find(m => m.id === id)
    return selectedMovie.value
  }

  return { 
    movies, 
    featuredMovies, 
    selectedMovie, 
    searchQuery, 
    selectedGenre, 
    sortBy,
    filteredMovies, 
    genres, 
    fetchMovieById,
    resetFilters
  }
})
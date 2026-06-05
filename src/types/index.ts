export interface Movie {
  id: string
  title: string
  poster: string
  backdrop: string
  genre: string[]
  duration: string
  rating: number
  releaseDate: string
  description: string
  trailer: string
}

export interface Seat {
  id: string
  row: string
  number: number
  status: 'available' | 'booked' | 'selected'
}

export interface FoodItem {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
}

export interface Showtime {
  id: string
  movieId: string
  hall: string
  time: string
  date: string
}
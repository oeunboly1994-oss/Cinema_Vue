import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mockSeats } from '../mock/seats'

export const useBookingStore = defineStore('booking', () => {
  const selectedSeats = ref<string[]>([])
  const selectedShowtime = ref<any>(null)
  const ticketPrice = ref(15)
  
  const totalPrice = computed(() => selectedSeats.value.length * ticketPrice.value)
  
  function toggleSeat(seatId: string) {
    if (selectedSeats.value.includes(seatId)) {
      selectedSeats.value = selectedSeats.value.filter(id => id !== seatId)
    } else {
      selectedSeats.value.push(seatId)
    }
  }
  
  function clearSeats() {
    selectedSeats.value = []
  }
  
  function getSeatStatus(seatId: string): 'available' | 'selected' | 'booked' {
    if (selectedSeats.value.includes(seatId)) return 'selected'
    if (mockSeats.booked.includes(seatId)) return 'booked'
    return 'available'
  }
  
  return { selectedSeats, selectedShowtime, ticketPrice, totalPrice, toggleSeat, clearSeats, getSeatStatus }
})
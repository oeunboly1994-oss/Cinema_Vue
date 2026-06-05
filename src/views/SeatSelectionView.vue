<template>
  <DefaultLayout>
    <div class="cinema-container py-32">
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-5xl font-display font-bold mb-4">Select Your <span class="neon-text">Seats</span></h1>
        <p class="text-gray-400">Choose your preferred seats for the best experience</p>
      </div>
      
      <div class="glass-card p-8 mb-8">
        <div class="text-center mb-8">
          <div class="w-32 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto mb-4"></div>
          <p class="text-gray-400">SCREEN</p>
        </div>
        
        <SeatMap />
      </div>
      
      <div class="glass-card p-6 flex flex-wrap justify-between items-center gap-4" data-aos="fade-up">
        <div>
          <p class="text-gray-400">Selected Seats: <span class="text-white font-bold">{{ bookingStore.selectedSeats.join(', ') || 'None' }}</span></p>
          <p class="text-2xl font-bold">Total: ${{ bookingStore.totalPrice }}</p>
        </div>
        <button 
          @click="proceedToCheckout"
          class="px-8 py-3 bg-neon-gradient rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SeatMap from '../components/SeatMap.vue'
import { useBookingStore } from '../stores/booking'

const router = useRouter()
const bookingStore = useBookingStore()

function proceedToCheckout() {
  if (bookingStore.selectedSeats.length === 0) {
    alert('Please select at least one seat')
    return
  }
  router.push('/checkout')
}
</script>
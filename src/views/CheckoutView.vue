<template>
  <DefaultLayout>
    <div class="cinema-container py-32">
      <div v-if="!paymentSuccess" class="max-w-2xl mx-auto" data-aos="fade-up">
        <h1 class="text-4xl font-display font-bold text-center mb-8">Complete Your <span class="neon-text">Booking</span></h1>
        
        <div class="glass-card p-8 mb-6">
          <h2 class="text-2xl font-bold mb-4">Booking Summary</h2>
          <div class="space-y-3 text-gray-300">
            <div class="flex justify-between pb-2 border-b border-white/10">
              <span>Tickets ({{ bookingStore.selectedSeats.length }})</span>
              <span>${{ bookingStore.totalPrice }}</span>
            </div>
            <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between items-center pb-2 border-b border-white/10">
              <div class="flex items-center gap-3">
                <img :src="item.image" :alt="item.name" class="w-10 h-10 object-cover rounded border border-white/5">
                <span class="text-sm text-gray-300">{{ item.name }} (x{{ item.quantity }})</span>
              </div>
              <span class="text-sm font-medium text-white">${{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-xl font-bold pt-2">
              <span>Total</span>
              <span class="neon-text">${{ totalAmount }}</span>
            </div>
          </div>
        </div>
        
        <div class="glass-card p-8 mb-6">
          <h2 class="text-2xl font-bold mb-4">Payment Details</h2>
          <div class="space-y-4">
            <input 
              type="text" 
              placeholder="Card Number" 
              class="w-full px-4 py-3 rounded-lg border focus:border-neon outline-none"
              :class="uiStore.isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'"
            >
            <div class="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="MM/YY" 
                class="px-4 py-3 rounded-lg border focus:border-neon outline-none"
                :class="uiStore.isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'"
              >
              <input 
                type="text" 
                placeholder="CVC" 
                class="px-4 py-3 rounded-lg border focus:border-neon outline-none"
                :class="uiStore.isDarkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'"
              >
            </div>
          </div>
        </div>
        
        <button 
          @click="processPayment"
          class="w-full py-4 bg-neon-gradient rounded-full font-bold text-lg hover:scale-105 transition-transform"
        >
          Pay ${{ totalAmount }}
        </button>
      </div>
      
      <div v-else class="text-center" data-aos="zoom-in">
        <div class="animate-bounce mb-6">
          <svg class="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 class="text-4xl font-display font-bold mb-4">Payment Successful!</h1>
        <p class="text-gray-400 mb-8">Your tickets have been booked. Check your email for confirmation.</p>
        
        <div class="glass-card p-8 max-w-md mx-auto mb-8">
          <h3 class="text-xl font-bold mb-4">Your Ticket QR Code</h3>
          <div class="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center">
            <div class="w-40 h-40 bg-black flex items-center justify-center">
              <div class="grid grid-cols-3 gap-1">
                <div v-for="i in 9" :key="i" class="w-3 h-3 bg-white" :class="{ 'bg-black': i % 2 === 0 }"></div>
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-400 mt-4">Show this QR at the cinema entrance</p>
        </div>
        
        <button @click="goHome" class="px-8 py-3 bg-neon-gradient rounded-full font-semibold">
          Back to Home
        </button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useBookingStore } from '../stores/booking'
import { useCartStore } from '../stores/cart'
import { useUiStore } from '../stores/ui'

const router = useRouter()
const bookingStore = useBookingStore()
const cartStore = useCartStore()
const uiStore = useUiStore()
const paymentSuccess = ref(false)

const totalAmount = computed(() => bookingStore.totalPrice + cartStore.totalPrice)

function processPayment() {
  paymentSuccess.value = true
  setTimeout(() => {
    bookingStore.clearSeats()
    cartStore.clearCart()
  }, 100)
}

function goHome() {
  router.push('/')
}
</script>
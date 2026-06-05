<template>
  <div class="overflow-x-auto">
    <div class="min-w-[600px]">
      <div v-for="row in rows" :key="row" class="flex justify-center mb-2">
        <div class="w-12 flex items-center justify-center font-bold text-gray-400">{{ row }}</div>
        <div class="flex gap-2">
          <button
            v-for="seatNum in seatsPerRow"
            :key="`${row}${seatNum}`"
            :data-seat-id="`${row}${seatNum}`"
            class="seat w-10 h-10 rounded-t-lg transition-all"
            :class="seatClass(`${row}${seatNum}`)"
            @click="onSeatClick(`${row}${seatNum}`)"
          >
            {{ seatNum }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookingStore } from '../stores/booking'

const bookingStore = useBookingStore()
const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const seatsPerRow = 12

function seatClass(seatId: string) {
  const status = bookingStore.getSeatStatus(seatId)
  if (status === 'selected') return 'bg-neon text-black shadow-lg shadow-neon/50 scale-105'
  if (status === 'booked') return 'bg-gray-700 cursor-not-allowed opacity-50'
  return 'bg-cinema-gray hover:bg-neon/50 cursor-pointer'
}

function onSeatClick(seatId: string) {
  const status = bookingStore.getSeatStatus(seatId)
  if (status !== 'booked') {
    bookingStore.toggleSeat(seatId)
  }
}
</script>
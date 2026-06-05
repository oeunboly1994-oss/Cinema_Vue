<template>
  <DefaultLayout>
    <div class="cinema-container py-32">
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-5xl font-display font-bold mb-4">Admin <span class="neon-text">Dashboard</span></h1>
        <p class="text-gray-400">Monitor your cinema's performance</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div v-for="stat in stats" :key="stat.label" class="glass-card p-6 text-center" data-aos="fade-up">
          <div class="text-3xl mb-2">{{ stat.icon }}</div>
          <div class="text-3xl font-bold neon-text">{{ stat.value }}</div>
          <div class="text-gray-400">{{ stat.label }}</div>
        </div>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="glass-card p-6" data-aos="fade-right">
          <h3 class="text-xl font-bold mb-4">Ticket Sales (Last 7 Days)</h3>
          <canvas ref="salesChart"></canvas>
        </div>
        
        <div class="glass-card p-6" data-aos="fade-left">
          <h3 class="text-xl font-bold mb-4">Movie Popularity</h3>
          <canvas ref="popularityChart"></canvas>
        </div>
      </div>
      
      <div class="glass-card p-6 mt-8" data-aos="fade-up">
        <h3 class="text-xl font-bold mb-4">Recent Bookings</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="border-b border-white/10">
              <tr>
                <th class="py-3">Movie</th>
                <th class="py-3">Seats</th>
                <th class="py-3">Amount</th>
                <th class="py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="booking in recentBookings" :key="booking.id" class="border-b border-white/5">
                <td class="py-3">{{ booking.movie }}</td>
                <td class="py-3">{{ booking.seats }}</td>
                <td class="py-3">${{ booking.amount }}</td>
                <td class="py-3"><span class="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Confirmed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const stats = ref([
  { icon: '🎬', label: 'Total Movies', value: '24' },
  { icon: '🎟️', label: 'Tickets Sold', value: '1,847' },
  { icon: '💰', label: 'Revenue', value: '$24.5K' },
  { icon: '👥', label: 'Users', value: '3,421' }
])

const recentBookings = ref([
  { id: 1, movie: 'Dune: Part Two', seats: 'A5, A6', amount: 30 },
  { id: 2, movie: 'Oppenheimer', seats: 'C12', amount: 15 },
  { id: 3, movie: 'Spider-Verse', seats: 'B3, B4, B5', amount: 45 },
])

const salesChart = ref<HTMLCanvasElement | null>(null)
const popularityChart = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (salesChart.value) {
    new Chart(salesChart.value, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Tickets Sold',
          data: [45, 62, 78, 85, 120, 210, 189],
          borderColor: '#00F3FF',
          backgroundColor: 'rgba(0, 243, 255, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { labels: { color: 'white' } }
        }
      }
    })
  }
  
  if (popularityChart.value) {
    new Chart(popularityChart.value, {
      type: 'bar',
      data: {
        labels: ['Dune 2', 'Oppenheimer', 'John Wick', 'Spider-Verse'],
        datasets: [{
          label: 'Bookings',
          data: [245, 312, 189, 278],
          backgroundColor: '#B026FF',
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { labels: { color: 'white' } }
        }
      }
    })
  }
})
</script>
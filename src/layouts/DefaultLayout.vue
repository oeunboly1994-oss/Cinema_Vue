<template>
  <div 
    class="min-h-screen transition-colors duration-300" 
    :class="uiStore.isDarkMode ? 'bg-cinema-gradient text-white' : 'bg-gray-50 text-gray-900'"
  >
    <AppNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
    
    <!-- Mobile Sidebar: Fix for mobile options -->
    <transition name="slide-left">
      <div v-if="uiStore.isSidebarOpen" class="fixed inset-0 z-[60] md:hidden">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="uiStore.toggleSidebar"></div>
        <div class="absolute top-0 left-0 w-72 h-full glass-card rounded-none p-8 flex flex-col">
          <div class="flex justify-between items-center mb-12">
            <span class="neon-text">REN</span>
            <span class="text-2xl font-display font-bold">CINEMA</span>
            <button @click="uiStore.toggleSidebar" class="text-2xl">✕</button>
          </div>
          <div class="flex flex-col gap-8 text-lg font-medium">
            <router-link to="/" @click="uiStore.toggleSidebar" class="hover:text-neon transition">Home</router-link>
            <router-link to="/movies" @click="uiStore.toggleSidebar" class="hover:text-neon transition">Movies</router-link>
            <router-link to="/cinema" @click="uiStore.toggleSidebar" class="hover:text-neon transition">Cinema</router-link>
            <router-link to="/food" @click="uiStore.toggleSidebar" class="hover:text-neon transition">Food</router-link>
            <router-link to="/admin" @click="uiStore.toggleSidebar" class="hover:text-neon transition">Admin</router-link>
          </div>
          <div class="mt-auto pt-8 border-t border-white/10 text-gray-500 text-sm">
            © 2024 CinemaHub
          </div>
        </div>
      </div>
    </transition>

    <!-- Animated Notification -->
    <transition name="slide-up">
      <div v-if="uiStore.showNotification" class="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass-card rounded-full">
        <p class="text-sm" :class="{
          'text-green-500': uiStore.notificationType === 'success',
          'text-red-500': uiStore.notificationType === 'error',
          'text-neon': uiStore.notificationType === 'info'
        }">
          {{ uiStore.notificationMessage }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '../components/layout/AppNavbar.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import { useUiStore } from '../stores/ui'

const uiStore = useUiStore()
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
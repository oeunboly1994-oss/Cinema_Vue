<template>
  <div class="min-h-screen bg-cinema-gradient">
    <AppNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
    
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
</style>
<template>
  <LoadingScreen v-if="loading" />
  <ScrollProgress />
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadingScreen from './components/ui/LoadingScreen.vue'
import ScrollProgress from './components/ui/ScrollProgress.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2500)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --font-display: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
}

/* Force visibility of the standard system pointer across the whole site */
*, html, body {
  cursor: auto !important;
  font-family: var(--font-body);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Restore specific pointers for interaction and text input */
a, button, .cursor-pointer, .movie-card, [role="button"] {
  cursor: pointer !important;
}

input, textarea {
  cursor: text !important;
}

.font-display {
  font-family: var(--font-display);
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
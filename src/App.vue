<template>
  <LoadingScreen v-if="loading" />
  <CustomCursor />
  <MouseTrail />
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
import CustomCursor from './components/effects/CustomCursor.vue'
import MouseTrail from './components/effects/MouseTrail.vue'
import ScrollProgress from './components/ui/ScrollProgress.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2500)
})
</script>

<style>
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
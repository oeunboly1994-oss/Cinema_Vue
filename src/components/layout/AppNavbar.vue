<template>
  <nav class="fixed top-0 w-full z-50 glass-card rounded-none border-t-0 border-x-0 px-6 py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-display font-bold">
        <span class="neon-text">REN CINEMA</span>
      </router-link>
      
      <div class="hidden md:flex gap-8">
        <router-link to="/" class="hover:text-neon transition">Home</router-link>
        <router-link to="/movies" class="hover:text-neon transition">Movies</router-link>
        <router-link to="/cinema" class="hover:text-neon transition">Cinema</router-link>
        <router-link to="/food" class="hover:text-neon transition">Food</router-link>
        <router-link to="/admin" class="hover:text-neon transition">Admin</router-link>
      </div>
      
      <div class="flex items-center gap-4">
        <button @click="uiStore.toggleTheme" class="p-2 rounded-full glass-card">
          {{ uiStore.isDarkMode ? '🌞' : '🌙' }}
        </button>
        <button @click="uiStore.toggleSidebar" class="md:hidden p-2 rounded-full glass-card">
          ☰
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUiStore } from '../../stores/ui'

const uiStore = useUiStore()
</script>
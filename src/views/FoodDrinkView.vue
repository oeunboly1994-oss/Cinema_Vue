<template>
  <DefaultLayout>
    <div class="cinema-container py-32">
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-5xl font-display font-bold mb-4">Food & <span class="neon-text">Drinks</span></h1>
        <p class="text-gray-400">Enhance your movie experience with our premium snacks</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="item in foodItems" 
          :key="item.id"
          class="glass-card p-6 hover-scale cursor-pointer"
          data-aos="flip-left"
          @click="addToCart(item)"
        >
          <div class="aspect-square rounded-xl overflow-hidden mb-4">
            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
          </div>
          <h3 class="text-xl font-bold mb-2">{{ item.name }}</h3>
          <p class="text-gray-400 text-sm mb-4">{{ item.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold neon-text">${{ item.price }}</span>
            <button class="px-4 py-2 bg-neon-gradient rounded-full text-sm font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      <!-- Floating Cart -->
      <div 
        class="fixed bottom-8 right-8 glass-card p-4 rounded-full cursor-pointer hover-scale z-50"
        @click="showCart = !showCart"
      >
        <div class="relative">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 15v6"></path>
          </svg>
          <span v-if="cartStore.totalItems > 0" class="absolute -top-2 -right-2 bg-neon text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {{ cartStore.totalItems }}
          </span>
        </div>
      </div>
      
      <!-- Cart Sidebar -->
      <transition name="slide-right">
        <div v-if="showCart" class="fixed top-0 right-0 w-full max-w-md h-full glass-card rounded-l-2xl z-50 p-6 overflow-y-auto">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">Your Cart</h2>
            <button @click="showCart = false" class="text-gray-400 hover:text-white">✕</button>
          </div>
          <div v-if="cartStore.items.length === 0" class="text-center py-12 text-gray-400">
            Your cart is empty
          </div>
          <div v-else>
            <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
              <div>
                <p class="font-semibold">{{ item.name }}</p>
                <p class="text-sm text-gray-400">${{ item.price }} x {{ item.quantity }}</p>
              </div>
              <button @click="cartStore.removeItem(item.id)" class="text-red-500">Remove</button>
            </div>
            <div class="mt-6 pt-4 border-t border-white/20">
              <p class="text-xl font-bold">Total: ${{ cartStore.totalPrice }}</p>
              <button @click="checkout" class="w-full mt-4 px-6 py-3 bg-neon-gradient rounded-full font-semibold">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useCartStore } from '../stores/cart'
import { useUiStore } from '../stores/ui'
import { foodItems } from '../mock/foodItems'

const router = useRouter()
const cartStore = useCartStore()
const uiStore = useUiStore()
const showCart = ref(false)

function addToCart(item: any) {
  cartStore.addItem({
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image
  })
  uiStore.showToast(`${item.name} added to cart!`, 'success')
}

function checkout() {
  showCart.value = false
  router.push('/checkout')
}
</script>

<style scoped>
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: translateY(-8px);
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
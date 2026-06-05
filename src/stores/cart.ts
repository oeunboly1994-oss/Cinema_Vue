import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export const useCartStore = defineStore('cart', () => {
  // "EZ Use": Load cart from local storage on init
  const items = ref<CartItem[]>(
    JSON.parse(localStorage.getItem('cinema-cart') || '[]')
  )

  watch(items, (newItems) => {
    localStorage.setItem('cinema-cart', JSON.stringify(newItems))
  }, { deep: true })
  
  const totalItems = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))
  
  const totalPrice = computed(() => items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0))
  
  function addItem(item: Omit<CartItem, 'quantity'>) {
    const existing = items.value.find(i => i.id === item.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ ...item, quantity: 1 })
    }
  }
  
  function removeItem(id: string) {
    const index = items.value.findIndex(i => i.id === id)
    if (index !== -1) {
      if (items.value[index].quantity > 1) {
        items.value[index].quantity--
      } else {
        items.value.splice(index, 1)
      }
    }
  }
  
  function clearCart() {
    items.value = []
  }
  
  return { items, totalItems, totalPrice, addItem, removeItem, clearCart }
})
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isDarkMode = ref(true)
  const showNotification = ref(false)
  const notificationMessage = ref('')
  const notificationType = ref<'success' | 'error' | 'info'>('info')
  
  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    notificationMessage.value = message
    notificationType.value = type
    showNotification.value = true
    setTimeout(() => {
      showNotification.value = false
    }, 3000)
  }
  
  return { isDarkMode, showNotification, notificationMessage, notificationType, toggleTheme, showToast }
})
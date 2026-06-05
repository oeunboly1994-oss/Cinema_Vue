import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isDarkMode = ref(localStorage.getItem('theme') !== 'light')
  const showNotification = ref(false)
  const notificationMessage = ref('')
  const notificationType = ref<'success' | 'error' | 'info'>('info')
  
  const isSidebarOpen = ref(false)
  const isLoading = ref(false)
  const activeModal = ref<string | null>(null)

  // Sync theme class with document and localStorage
  watch(isDarkMode, (val) => {
    localStorage.setItem('theme', val ? 'dark' : 'light')
    if (val) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value
  }
  
  function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    notificationMessage.value = message
    notificationType.value = type
    showNotification.value = true
    setTimeout(() => {
      showNotification.value = false
    }, 3000)
  }
  
  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function setLoading(val: boolean) {
    isLoading.value = val
  }

  function openModal(modalId: string) {
    activeModal.value = modalId
  }

  function closeModal() {
    activeModal.value = null
  }

  return { 
    isDarkMode, showNotification, notificationMessage, notificationType, 
    isSidebarOpen, isLoading, activeModal,
    toggleTheme, showToast, toggleSidebar, setLoading,
    openModal, closeModal
  }
})
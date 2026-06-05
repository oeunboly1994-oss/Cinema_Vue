import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

// Import Lenis for smooth scroll
import Lenis from 'lenis'
import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)

// Initialize smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
})

app.use(createPinia())
app.use(router)

app.mount('#app')
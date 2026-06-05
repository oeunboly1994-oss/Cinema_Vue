/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'aos' {
  interface AosOptions {
    duration?: number
    once?: boolean
    offset?: number
    [key: string]: unknown
  }

  const AOS: {
    init(options?: AosOptions): void
    refresh(): void
    refreshHard(): void
  }

  export default AOS
}

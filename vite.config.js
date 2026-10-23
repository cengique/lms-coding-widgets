import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      // Point the input to your custom HTML file
      input: {
        main: resolve(__dirname, 'slides.html'), 
      },
    },
  },
})

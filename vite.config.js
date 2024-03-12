import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://arturohub.github.io/FoodApp/",
  plugins: [react()],
})

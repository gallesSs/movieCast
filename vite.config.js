import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/movieCast/', // Замени на имя твоего репозитория на GitHub
  plugins: [react()],
})

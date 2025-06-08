import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {join} from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: [
        {find: '@', replacement: join(__dirname, "src")},
    ],
},
})

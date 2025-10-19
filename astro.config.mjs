// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: ['912c99381bfe.ngrok-free.app'] 
    }
  },
  output: 'static'
});
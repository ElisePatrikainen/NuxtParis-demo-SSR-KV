import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    // Production
    storage: {
      'db': { driver: 'cloudflare-kv-binding', binding: 'testkv' }
    },
    // Development
    devStorage: {
      'db': { driver: 'fs', base: './data/db' }
    }
  }
})

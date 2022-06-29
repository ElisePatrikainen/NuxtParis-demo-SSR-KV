import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    env: process.env.NODE_ENV
  },
  modules: ['@nuxtjs/tailwindcss']
})

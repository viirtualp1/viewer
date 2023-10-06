// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/globals.scss'],
  modules: ['@pinia/nuxt'],
  ssr: false,
  nitro: {
    baseURL: 'http://localhost:8000',
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
})

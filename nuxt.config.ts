// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@unocss/reset/tailwind.css', './assets/css/main.css'],
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@nuxt/content', '@nuxt/image'],

  app: {
    head: {
      title: 'DimplesY\'s Site'
    }
  },
  compatibilityDate: '2024-11-03'
})

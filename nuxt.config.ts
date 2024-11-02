// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-11-03',
  css: ['@unocss/reset/tailwind.css', './assets/css/main.css'],
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@nuxt/content', '@nuxt/image'],

  app: {
    head: {
      title: 'DimplesY\'s Site',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-11-03',
  css: ['@unocss/reset/tailwind.css', './assets/css/main.css'],
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  site: {
    url: 'https://dimples.top',
    name: 'DimplesY\'s Site',
  },
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
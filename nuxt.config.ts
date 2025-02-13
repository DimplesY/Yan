import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-11-03',
  css: ['./assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },

  app: {
    head: {
      title: 'DimplesY',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
})

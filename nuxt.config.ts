// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        class: 'no-js',
      },
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Xolio - Creative Agency Template' }
      ],
      title: 'Victory Studio - Video Production Company',
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: 'img/favicon.png' },
        { rel: 'stylesheet', href: 'css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'css/animate.min.css' },
        { rel: 'stylesheet', href: 'css/magnific-popup.css' },
        { rel: 'stylesheet', href: 'css/fontawesome-all.min.css' },
        { rel: 'stylesheet', href: 'css/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: 'css/odometer.css' },
        { rel: 'stylesheet', href: 'css/slick.css' },
        { rel: 'stylesheet', href: 'css/default.css' },
        { rel: 'stylesheet', href: 'css/style.css' },
        { rel: 'stylesheet', href: 'css/responsive.css' }
      ],
    }
  },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss'],
})
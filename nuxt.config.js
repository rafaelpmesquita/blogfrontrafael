const apiTarget = process.env.API_BASE_URL || 'http://localhost:5000/'

export default {
  head: {
    title: 'Rafael Mesquita | Desenvolvedor Backend',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfólio de Rafael Mesquita, desenvolvedor backend com foco em C#, .NET, APIs, AWS e sistemas distribuídos.'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['@assets/css/global.css'],
  plugins: ['@/plugins/accessor'],
  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true
  },

  // API_BASE_URL must be the API origin, without /v1.
  // Calls under /api/* are forwarded after removing the /api prefix.
  proxy: {
    '/api/': {
      target: apiTarget,
      pathRewrite: { '^/api/': '' }
    }
  }
}

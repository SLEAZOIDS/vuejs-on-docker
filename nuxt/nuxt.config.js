module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: "/sample.js" }
    ],
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "/sample.css" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  vendor: [
    'element-ui',
    'vue-typer',
    'vue-chara-builder',
  ],
  plugins: [
    '~plugins/element-ui',
    { src: '~plugins/vue-typer.js', ssr: false },
    { src: '~plugins/vue-chara-builder.js', ssr: false },
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ]
}

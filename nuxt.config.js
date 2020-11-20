const webpack = require('webpack')

export default {

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Triple Sun Auto Supply',
    titleTemplate: '%s | Triple Sun Auto Supply',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Wholesale & Retail Of Kia Bonggo And Other Automotive Parts Both Brand New And Surplus' },
      { hid: 'keywords', name: 'keywords', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css'
      },

      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
      }
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        type: 'text/javascript'
      },

      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js',
        type: 'text/javascript'
      },

      {
        src: '/js/main.js',
        type: 'text/javascript'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '@/assets/css/style.scss', lang: 'scss' },
    '@/assets/icofont/icofont.min.css',
    'aos/dist/aos.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/aos.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-fb-customer-chat.js',
      ssr: false
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ],
    extend (config, ctx) {
      // Add this to your build config
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      })
    }
  },

  generate: {
    routes () {
      const r = []

      const contentful = require('contentful')
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN
      })

      Promise.all([
        client.getEntries({
          content_type: 'autoParts',
          order: '-sys.createdAt'
        }),
        client.getEntries({
          content_type: 'category',
          order: '-sys.createdAt'
        })
      ]).then(([autoparts, categories]) => {
        r.concat(autoparts.items.map(item => `product/${item.fields.path}`))
        r.concat(categories.items.map(item => `products/${item.fields.slug}`))
      })

      return r
    }
  }
}

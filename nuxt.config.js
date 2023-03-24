import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - gameChange',
    title: 'gameChange',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/auth.js', mode: 'client' }
  ],
  publicRuntimeConfig: {
    auth: {
      domain: 'dev-7n0ue64h1ce2zq3z.us.auth0.com',
      clientId: 'ZOqSBJcW46y5XOAnqNXLp2ClcLr9Hpvi'
    }
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],
  /* auth: {
    strategies: {
      auth0: {
        domain: 'dev-7n0ue64h1ce2zq3z.us.auth0.com',
        clientId: 'ZOqSBJcW46y5XOAnqNXLp2ClcLr9Hpvi',
        audience: 'https://localhost:3000/',
        responseType: 'code',
        scope: ['openid', 'profile', 'email'],
        options: {
          auth: {
            responseType: 'token id_token',
            scope: 'openid profile email'
          },
          languageDictionary: {
            title: 'Game change'
          },
          allowShowPassword: true, // Show password visibility toggle
          allowedConnections: ['Username-Password-Authentication', 'google-oauth2', 'github'] // Add the social connections you enabled in the Auth0 dashboard
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
      callback: '/personal'
    }
  }, */
  compilerOptions: {
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'cookie-universal-nuxt'
  ],
  store: true,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://127.0.0.1:8000/api/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

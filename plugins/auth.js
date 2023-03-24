import Vue from 'vue'
import Auth0Lock from 'auth0-lock'
import auth0Config from '../auth0.config'

const auth = {
  lock: null,

  async init () {
    this.lock = new Auth0Lock(auth0Config.clientId, auth0Config.domain, {
      auth: {
        redirectUrl: auth0Config.redirectUri,
        responseType: 'token id_token',
        audience: 'https://' + auth0Config.domain + '/userinfo',
        params: {
          scope: 'openid profile email'
        }
      },
      theme: {
        logo: 'https://your-logo-url.com', // Replace with your logo URL
        primaryColor: 'black' // Replace with your desired primary color
      },
      languageDictionary: {
        title: 'Game change' // Replace with your app's name
      },
    })

    this.lock.on('authenticated', async (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          console.error(error)
          return
        }

        localStorage.setItem('id_token', authResult.idToken)
        localStorage.setItem('profile', JSON.stringify(profile))

        this.$router.push('/')
      })
    })
  },

  login () {
    if (!this.lock) {
      this.init()
    }
    this.lock.show()
  },

  logout () {
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    this.$router.push('/')
  }
}

Vue.prototype.$auth = auth

<!-- components/AuthLock.vue -->
<template>
  <div id="auth0-lock-container" />
</template>

<script>
import Auth0Lock from 'auth0-lock'

export default {
  props: {
    clientId: {
      type: String,
      required: true
    },
    domain: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      lock: null
    }
  },
  mounted () {
    this.lock = new Auth0Lock(this.clientId, this.domain, {
      container: 'auth0-lock-container',
      auth: {
        responseType: 'token id_token',
        scope: 'openid profile email'
      },
      theme: {
        logo: 'https://media.discordapp.net/attachments/990816789246124032/1087730322176753694/luciferb6b_make_me_a_logo_with_moon_29d91ca2-1fe9-48b8-bf95-7b38e130df00.png?width=606&height=606',
        primaryColor: 'primary'
      },
      languageDictionary: {
        title: 'Game change'
      },
      allowShowPassword: true,
      allowedConnections: ['Username-Password-Authentication', 'google-oauth2', 'github', 'twitter']
    })

    this.lock.on('authenticated', (authResult) => {
      this.$auth.handleRedirectCallback()
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          console.error('Error getting user info:', error)
          return
        }
        this.$auth.setUser(profile)
      })
    })

    this.lock.show()
  },
  beforeDestroy () {
    this.lock.hide()
  }
}
</script>

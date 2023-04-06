<template>
  <v-app>
    <v-navigation-drawer
      :value="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      @resize="updateOnResize"
    >
      <v-list>
        <v-icon style="padding: 0px 0px 12px 12px;" @click.stop="drawer = !drawer">
          mdi-arrow-left
        </v-icon>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click.stop="drawer = !drawer"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app class="transparent-app-bar">
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text">
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container style="max-width: 100%">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/personal'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Coleção',
          to: '/collection'
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Game Change'
    }
  },
  mounted () {
    this.updateOnResize()
  },
  async login () {
    const auth0 = this.$auth.getInstance()
    await auth0.loginWithRedirect()
  },
  methods: {
    updateOnResize () {
      if (window.innerWidth > 960) {
        this.drawer = false
      }
    }
  },
  logout () {
    const auth0 = this.$auth.getInstance()
    auth0.logout({ returnTo: window.location.origin })
  }
}
</script>
<style scoped>
.transparent-app-bar {
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.v-icon,
.v-list-item-title {
  color: white !important;
}
</style>

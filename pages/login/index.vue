<template>
  <div>
    <h1>Login</h1>
    <v-btn @click="login">
      Faça seu login para mudar o jogo!
    </v-btn>
  </div>
</template>

<script>
export default {
  mounted () {
    this.login()
  },
  methods: {
    login () {
      this.$auth.login()
    }
  }
}
</script>

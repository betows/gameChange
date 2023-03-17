<template>
  <div class="register-page">
    <h2>Register</h2>
    <form @submit.prevent="onSubmit">
      <v-text-field
        v-model="email"
        label="Email"
        required
      />
      <v-text-field
        v-model="username"
        label="Username"
        required
      />
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
      />
      <v-text-field
        v-model="passwordConfirm"
        label="Confirm Password"
        type="password"
        required
      />
      <v-btn type="submit">
        Register
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      username: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.password !== this.passwordConfirm) {
        alert('Passwords do not match')
        return
      }

      this.$axios
        .$post('/authentication/register/', {
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then((response) => {
          console.log(response)
          this.$router.push('/login')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.register-page {
  width: 100%;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>

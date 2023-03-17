<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="form-holder">
        <h4 style="margin-top:0px;">
          Bem-vindo!
        </h4>
        <p class="subtitle-form">
          Todas as informações sobre a sua equipe, você encontra aqui
        </p>
        <form @submit.prevent="onSubmit()">
          <v-text-field
            id="new-username"
            v-model="username"
            :error-messages="showError ? error.username : null"
            name="new-username"
            outlined
            autocomplete="new-username"
            label="Username"
            color="primary"
            value=""
            style="margin-bottom: 0px"
            @focus="onFocus('new-username')"
            @input="error.username = usernameValidate(username)"
          />
          <v-text-field
            id="new-email"
            v-model="email"
            :error-messages="showError ? error.email : null"
            name="new-email"
            outlined
            autocomplete="new-email"
            label="E-mail"
            color="primary"
            value=""
            style="margin-bottom: 0px"
            @focus="onFocus('new-email')"
            @input="error.email = emailValidate(email)"
          />
          <v-text-field
            id="new-password"
            v-model="password"
            outlined
            :error-messages="showError ? error.password : null"
            name="new-password"
            autocomplete="new-password"
            value=""
            label="Senha"
            :append-icon="showPassword ? showPasswordIcon : dontShowPasswordIcon"
            color="primary"
            style="margin-bottom: 0px"
            :type="showPassword ? 'text' : 'password'"
            @focus="onFocus('new-password')"
            @click:append="showPassword = !showPassword"
            @input="error.password = passwordValidate(password)"
          />
          <v-btn
            color="primary"
            style="text-transform: none !important; color: white; width: 100%; font-weight: normal"
            type="submit"
            :disabled="loginLoader"
          >
            <v-progress-circular
              v-if="loginLoader"
              color="white"
              :size="22"
            />
            <span v-else>
              Entrar
            </span>
          </v-btn>
          <span
            class="subtitle-form d-flex"
            style="align-items:center;margin-top:32px;margin-bottom: 0;height:auto;"
          >
            Não lembra sua senha?
            <v-btn
              id="no-background-hover"
              text
              :ripple="false"
              color="primary"
              style="text-transform: none !important;padding: 0;margin-left:6px;"
              @click="$router.push('/forgot-password')"
            >
              Clique aqui.
            </v-btn>
          </span>
          <span
            class="subtitle-form d-flex"
            style="align-items:center;margin-bottom: 0;height:auto;"
          >
            Se deseja se registrar
            <v-btn
              id="no-background-hover"
              text
              :ripple="false"
              color="primary"
              style="text-transform: none !important;padding: 0;margin-left:6px;"
              @click="$router.push('/register')"
            >
              Clique aqui.
            </v-btn>
          </span>
        </form>
      </div>
    </div>
    <div class="side-auth-container">
      <img
        loading="lazy"
        src="@/assets/allcharacters2.png"
        class="image-holder"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { mapActions } from 'vuex'

export default {
  name: 'AdminAuthPage',
  components: {
  },
  layout: 'login',
  data () {
    return {
      email: '',
      password: '',
      username: '',
      checkbox: false,
      loginLoader: false,
      showPassword: false,
      showPasswordIcon: mdiEyeOutline,
      dontShowPasswordIcon: mdiEyeOffOutline,
      error: {
        email: null,
        password: null
      },
      showError: false
    }
  },
  head () {
    return 'aoba'
  },
  computed: {
  },
  mounted () {
    /* const accesToken = this.$cookies.get('access-token')
    if (accesToken !== undefined) {
      this.$axios.post('/token-verify/', {
        token: this.$cookies.get('access-token')
      }).then(() =>
        this.$router.push('/')
      ).catch(() => {
        const cookieConsent = localStorage.getItem('cookieConsent')
        localStorage.clear()
        localStorage.setItem('cookieConsent', cookieConsent)
      })
    } */
  },
  methods: {
    emailValidate (input) {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      return input.match(validRegex) ? null : 'Insira um e-mail válido.'
    },
    passwordValidate (input) {
      return input.length < 6 ? 'A senha deve ter mais de 6 caracteres.' : null
    },
    usernameValidate (input) {
      return input.length < 6 ? 'A senha deve ter mais de 6 caracteres.' : null
    },
    onFocus (id) {
      document.getElementById(id).setAttribute('autocomplete', 'true')
    },
    ...mapActions('auth', ['login']), // Include the login action from the store
    async onSubmit () {
      this.loginLoader = true
      this.showError = true

      try {
        await this.login({ // Call the login action from the store
          email: this.email,
          password: this.password,
          username: this.username
        })
        this.$router.push('/personal') // Move the redirect line here
      } catch (e) {
        if (e.response !== null && e.response !== undefined) {
          this.$toast.global.defaultError(e.response)
        }
        // Remove the redirect line from the catch block
        this.loginLoader = false
      }
    }
  }
}
</script>

<style scoped>
#no-background-hover::before {
   background-color: transparent !important;
}
.auth-page {
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: row;
  overflow-y: hidden;
}
.image-holder::-webkit-scrollbar {
  display: none; /* Chrome opera and Safari */
  width: 0px;
  background: transparent;
}
.side-auth-container {
  background-repeat: no-repeat;
  background-size: cover;
  width:40%;
  height:100vh;
  display: flex;
  left:0;
  flex-direction: column;
  text-align: left;
}
.logo-holder {
  position:absolute;
  top:24px;
  left: 41px;
}
.image-holder {
  position: absolute;
  object-fit: cover;
  min-width:40%;
  width:40%;
  min-height: 100%;
  justify-self: flex-end;
  overflow: hidden;
}
.form-holder{
  width:65%;
  min-width: 492px;
  padding: 64px;
  margin:auto;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
}
.subtitle-form {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 170%;
  color: #868E96;
  margin-bottom: 32px;
}
.auth-container {
  display: flex;
  flex-direction: column;
  width: 60%;
  height:100vh;
  background-size: 100%;
  margin: auto;
  padding: 10px;
  justify-content: center;
  overflow: hidden;
}
::v-deep .v-text-field--filled:not(.v-text-field--single-line) input {
    margin-top: 18px;
}
@media (max-width: 800px) {
  .side-auth-container {
    display: none;
  }
  .auth-container {
    width: 100%;
    padding:20px;
  }
  .logo-holder {
    position:absolute;
    top:24px;
    left: 0px;
    right:0px;
    margin-left: auto;
    margin-right: auto;
  }
  .form-holder{
    width:100%;
    min-width: 0px;
    margin:auto;
    padding: 32px 24px;
  }
}
</style>

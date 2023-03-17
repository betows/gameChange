/* eslint-disable no-useless-catch */
export const state = () => ({
  user: null,
  accessToken: null,
  refreshToken: null
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setTokens (state, tokens) {
    state.accessToken = tokens.access
    state.refreshToken = tokens.refresh
  }
}

export const actions = {
  async login ({ commit }, credentials) {
    try {
      const { data } = await this.$axios.post('/login', credentials)
      commit('setUser', data.user)
      commit('setTokens', { access: data.access, refresh: data.refresh })
    } catch (error) {
      console.error('Error during login:', error)
      throw error
    }
  }
}

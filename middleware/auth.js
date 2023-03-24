export default async function ({ app, route, redirect }) {
  if (process.client) {
    const auth0 = app.$auth.getInstance()
    const isAuthenticated = await auth0.isAuthenticated()

    if (!isAuthenticated && route.name !== 'index') {
      await auth0.loginWithRedirect({ appState: { targetUrl: route.fullPath } })
    }
  }
}

import { get_auth_header } from '~/static/functions'

export const state = () => ({
  user: null,
  usersByStore: [],
  userByStore: null,
  notificationsPageSize: 8,
  notifications: null,
  notificationsMaxPage: null,
  unreadAnnouncements: true,
  unseenNotificationsCount: 0
})

export const mutations = {
  concatNotifications (state, notifications) {
    state.notifications = state.notifications.concat(notifications)
  },
  setUsersByStore (state, users) {
    state.usersByStore = users
  },
  setUserByStore (state, user) {
    state.userByStore = user
  },
  setUser (state, user) {
    state.user = user
  },
  setNotifications (state, notifications) {
    state.notifications = notifications
  },
  setNotificationsMaxPage (state, notificationsMaxPage) {
    state.notificationsMaxPage = notificationsMaxPage
  },
  updateClickStatus (state, id) {
    const i = state.notifications.findIndex(r => r.id === id)
    state.notifications[i].is_clicked = true
  },
  updateSeenStatus (state, id_arr) {
    for (let j = 0; j < id_arr.length; j++) {
      const i = state.notifications.findIndex(r => r.id === id_arr[j])
      state.notifications[i].is_seen = true
    }
  },
  updateUnseenNotificationsCount (state, count) {
    state.unseenNotificationsCount = count
  }
}

export const actions = {
  loadUnseenNotificationsCount (context) {
    const cfg = get_auth_header(this)
    return this.$axios.get('/authentication/count-unread/', cfg).then((r) => {
      context.commit('updateUnseenNotificationsCount', r.data)
    })
  },
  seeNotification (context, obj) {
    const cfg = get_auth_header(this)
    return this.$axios.post('/authentication/notifications/seen/', obj, cfg).then(() => {
      context.commit('updateSeenStatus', obj)
    })
  },
  seeAllNotifications () {
    const cfg = get_auth_header(this)
    return this.$axios.post('/authentication/notifications/seen/all/', null, cfg).then(() => {
      /* context.commit("updateSeenStatus", obj.notif_array); */
    })
  },
  clickNotification (context, id) {
    const cfg = get_auth_header(this)
    return this.$axios.post('/authentication/notifications/clicked/' + id + '/', null, cfg).then(() =>
      context.commit('updateClickStatus', id)
    )
  },
  loadNotifications (context, query) {
    const cfg = get_auth_header(this)
    cfg.params = query
    return this.$axios.get('authentication/notifications/', cfg)
  },
  setUsersByStore (context, { store, user_id, filter }) {
    const cfg = get_auth_header(this)
    cfg.params = {
      store: store.id,
      is_active: filter.status || '',
      profile_group: filter.profile || ''
    }
    return this.$axios.get('/authentication/list-by-store/', cfg).then((r) => {
      const users = r.data
      context.commit('setUsersByStore', users)
      let user = users.find(u => u.id === user_id)
      if (user === undefined) { user = users.find(u => u.id === context.state.user.id) }
      if (user === undefined) { user = users.length ? users[0] : null }
      return user
    })
  },
  setUserByStore (context, user_id) {
    const cfg = get_auth_header(this)
    return this.$axios.get('/authentication/users/' + user_id + '/', cfg).then((r) => {
      context.commit('setUserByStore', r.data)
    })
  },
  getAuthUsers (context, { store, filter }) {
    const cfg = get_auth_header(this)
    cfg.params = {
      store: store.id,
      is_active: filter.status || '',
      profile_group: filter.profile || ''
    }
    return this.$axios.get('/authentication/users/', cfg).then((r) => {
      const users = r.data
      context.commit('setUsersByStore', users)
      return users
    })
  }
}

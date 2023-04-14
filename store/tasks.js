export const state = () => ({
  tasks: []
})

export const mutations = {
  addTask (state, task) {
    state.tasks.push(task)
  }
}

export const actions = {
  createTask ({ commit }, task) {
    commit('addTask', task)
  }
}

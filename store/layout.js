export const state = () => ({
  drawer: false,
})



export const mutations = {
  drawer(state, value) {
    state.drawer = value
  },
}

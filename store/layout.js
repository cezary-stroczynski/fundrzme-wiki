export const state = () => ({
  drawer: false,
  keke: 'kaka'
})



export const mutations = {
  drawer(state, value) {
    state.drawer = value
  },
  keke(state) {
    state.keke = 'akuku'
  },
}

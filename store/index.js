import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      user: {
        isUserAuthenticated: false,
        login: ''
      }
    },

    mutations: {
      setIsUserAuthenticated (state, user) {
        state.user.isUserAuthenticated = user.isUserAuthenticated
        state.user.login = user.login
      }
    }
  })
}

export default store
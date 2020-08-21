import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
// export default new Vuex.Store({
  state: {
    search: ''
  },
  mutations: {
    change(state, search) {
      state.search = search
    }
  },
  getters: {
    search: state => state.search
  }
})

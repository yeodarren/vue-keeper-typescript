import Vue from 'vue'
import Vuex from 'vuex'

import globalModules from './modules/global/index'
import notesModules from './modules/notes/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    global: globalModules,
    notes: notesModules
  }
})

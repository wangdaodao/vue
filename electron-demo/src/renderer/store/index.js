import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

let state = {
  isCollapse: false,
};
let mutations = {
  switch(state) {   
    state.isCollapse = !state.isCollapse
  },
};

export default new Vuex.Store({
  state,
  mutations,
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})

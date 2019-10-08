import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
var state = {
  isCollapse: false,
  lists:[],
};

let mutations = {
  switch(state) {   
    state.isCollapse = !state.isCollapse
  },
  getMenuTree (state,val) {
    state.lists = val
  }
};
let actions = {
  getMenuTree ({commit},val) {
    commit('getMenuTree',val)
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
});
export default store;
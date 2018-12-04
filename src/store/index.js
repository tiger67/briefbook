import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex);

const state = {
  name: "jkring1000"
}

// 定义所需的 mutations
const mutations = {

}

var sign = {
  namespaced: true,
  state: {
    klt: "ggwww",
    count: 1
  },
  getters: {
    kltgetter(state) {
      return state.klt + "ppppp"
    }
  },
  mutations: {
    add(state, n) {
      n = +n;
      n = typeof n == 'number' ? n : 1;
      state.count = state.count + n;
    },
    initcount(state, count) {
      this.commit("sign/add", count);
    },
  },
  actions: {
    actionfn({ commit, getters }, n) {
      return getters.kltgetter + commit('add', n);
    }
  }
}
// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
    sign: sign
  }
})

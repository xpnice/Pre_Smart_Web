
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {

  show_tree_view: false, // 是否展示左侧树状图
  show_node_inf: false // 是否展示右侧节点详情

}
const getters = {
  // 实时监听state值的变化(最新状态)
  isshow_tree_view () {
    return state.show_tree_view
  },
  isshow_node_inf () {
    return state.show_node_inf
  }
}
const mutations = {
  change_show_tree_view () {
    state.show_tree_view = !state.show_tree_view
  },
  change_show_node_inf () {
    state.show_node_inf = !state.show_node_inf
  }
}
const actions = {
  change_show_tree_view ({ commit }) {
    commit('change_show_tree_view')
  },
  change_show_node_inf ({ commit }) {
    commit('change_show_node_inf')
  }
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  // 要设置的全局访问的state对象
  show_tree_view: false,
  show_node_inf: false
  // 要设置的初始属性值
}
const getters = {
  // 实时监听state值的变化(最新状态)
  isshow_tree_view () {
    // 方法名随意,主要是来承载变化的showFooter的值
    return state.show_tree_view
  },
  isshow_node_inf () {
    // 方法名随意,主要是用来承载变化的changableNum的值
    return state.show_node_inf
  }
}
const mutations = {

}
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store

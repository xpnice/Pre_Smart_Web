import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Blockboard from '@/Blockboard'
import Dashboard from '@/Dashboard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/blockboard',
      name: 'blockboard',
      component: Blockboard
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

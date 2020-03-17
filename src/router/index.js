import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Login from 'components/Login'

import NotFound from 'components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [

      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})

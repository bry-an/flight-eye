import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AirportInput from './components/AirportInput'
import Numbers from './components/Numbers'
import Stepper from './components/Stepper'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/airportinput',
      name: 'AirportInput',
      component: AirportInput
    },
    {
      path: '/numbers',
      name: 'Numbers',
      component: Numbers
    },
    {
      path: '/stepper',
      name: 'stepper',
      component: Stepper
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

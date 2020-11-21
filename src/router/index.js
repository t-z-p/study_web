/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import WebFlux from '../components/WebFlux.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/webflux' },
  { path: '/webflux', component: WebFlux }
]

const router = new VueRouter({
  routes
})

export default router

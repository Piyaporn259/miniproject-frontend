import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>import('../views/RegisterView.vue')
  },
  {
    path: '/reserve',
    name: 'reserve',
    component: ()=> import('../components/Reserve.vue')
  },
  {
    path: '/Admin',
    name: 'addmin',
    component: ()=> import('../components/Admin.vue')
  },
  {
    path: '/HomeAdmin',
    name: 'HomeAdminView',
    component: ()=> import('../views/HomeAdminView.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

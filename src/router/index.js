import Vue from 'vue'
import VueRouter from 'vue-router' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/registerSuccess',
    name: 'registerSuccess',
    component: () => import('../views/registerSuccess.vue')
  },
  {
    path: '/loginSuccess',
    name: 'loginSuccess',
    component: () => import('../views/loginSuccess.vue')
  },
  {
    path: '/leadAddSuccess',
    name: 'leadAddSuccess',
    component: () => import('../views/leadAddSuccess.vue')
  },
  {
    path: '/leads',
    name: 'leads',
    component: () => import('../views/leads.vue')
  },
  {
    path: '/addLead',
    name: 'addLead',
    component: () => import('../views/addLead.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

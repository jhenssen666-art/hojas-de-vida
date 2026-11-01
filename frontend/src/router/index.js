

import { createRouter, createWebHashHistory } from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Luis from '../views/Luis.vue'
import Jhenssen from '../views/Jhenssen.vue'
import Admin from '../views/Admin.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/luis', component: Luis },
  { path: '/jhenssen', component: Jhenssen },
  { path: '/admin', component: Admin }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router

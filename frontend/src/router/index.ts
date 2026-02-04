import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')

  },

  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')

  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    component: () => import('@/layouts/Layout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/Ver-camisa',
    name: 'Ver-camisa',
    component: () => import('@/views/VerCamisaView.vue')
  },
  {
    path: '/Horarios',
    name: 'Horarios',
    component: () => import('@/views/HorariosView.vue')
  }

    ]

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')

  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

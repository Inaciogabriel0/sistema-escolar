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

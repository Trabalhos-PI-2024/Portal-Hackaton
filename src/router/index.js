import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/davi',
      name: 'davi',
      component: () => import('../views/DaviView.vue')
    },
    {
      path: '/henrique',
      name: 'henrique',
      component: () => import('../views/HenriqueView.vue')
    },
    {
      path: '/larissa',
      name: 'larissa',
      component: () => import('../views/LarissaView.vue')
    },
    {
      path: '/gabriel',
      name: 'gabriel',
      component: () => import('../views/GbView.vue')
    },
    {
      path: '/enzo',
      name: 'enzo',
      component: () => import('../views/EnzoView.vue')
    },
    {
      path: '/murilo',
      name: 'murilo',
      component: () => import('../views/MuriloView.vue')
    },
  ]
})

export default router

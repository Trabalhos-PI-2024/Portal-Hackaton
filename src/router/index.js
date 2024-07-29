import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HenriqueView from '../views/HenriqueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Murilo',
      name: 'Murilo',
      component: () => import('../views/MuriloView.vue')
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
  ]
})

export default router

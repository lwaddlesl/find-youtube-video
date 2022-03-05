import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: () => import('@/views/Favorite.vue')
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: () => import('@/views/SearchResult.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

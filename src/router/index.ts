import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/index.vue'
/* import Detail from '@/views/Detail.vue' */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
       component: HomeView 
    },
     {
      path: '/Detail',
      name: 'Detail',
      component: () => import('@/views/Datail.vue')
    } 
  ]
})

export default router

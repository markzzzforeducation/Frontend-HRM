import { createRouter, createWebHistory } from 'vue-router'
import OffsiteWorkView from '../views/OffsiteWorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/offsite-work', // <--- redirect หน้าแรกไป /offsite-work
    },
    {
      path: '/offsite-work',
      name: 'offsite-work',
      component: OffsiteWorkView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

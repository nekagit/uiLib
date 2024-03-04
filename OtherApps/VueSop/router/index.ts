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
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/SportView.vue')
    },
    {
      path: '/sportDays',
      name: 'sportDays',
      component: () => import('../views/SportView.vue')
    },
    {
      path: '/sportPosts',
      name: 'sportPosts',
      component: () => import('../views/SportView.vue')
    },
    {
      path: '/schoolNews',
      name: 'schoolNews',
      component: () => import('../views/SchoolView.vue')
    },
    {
      path: '/schoolContact',
      name: 'schoolContact',
      component: () => import('../views/SchoolView.vue')
    },
    {
      path: '/school',
      name: 'school',
      component: () => import('../views/SchoolView.vue')
    },
    {
      path: '/schoolGallery',
      name: 'schoolGallery',
      component: () => import('../views/SchoolView.vue')
    },
    {
      path: '/socialMedia',
      name: 'socialMedia',
      component: () => import('../views/SOPView.vue')
    },
    {
      path: '/sop',
      name: 'sop',
      component: () => import('../views/SOPView.vue')
    },
    {
      path: '/sopContact',
      name: 'sopContact',
      component: () => import('../views/SOPView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'),
    },

    {
      path: '/faq',
      name: 'faq',
    component: () => import('../pages/FAQ.vue'),
    },
    {
      path: '/quote',
      name: 'quote',
      component: () => import('../pages/Quote.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../pages/Products.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../pages/GalleryFull.vue'),
    },
    {
      path: '/gallery-commercial',
      name: 'gallery-commercial',
      component: () => import('../pages/Gallery.vue'),
      props: { title: 'Commercial Lighting Gallery' }
    },
    {
      path: '/gallery-residential',
      name: 'gallery-residential',
      component: () => import('../pages/Gallery.vue'),
      props: { title: 'Residential Lighting Gallery' }
    },
    {
      path: '/lighting-residential',
      name: 'lighting-residential',
      component: () => import('../pages/Lighting.vue'),
      props: { title: 'Residential Christmas Light Installation' }
    },
    {
      path: '/lighting-commercial',
      name: 'lighting-commercial',
      component: () => import('../pages/Lighting.vue'),
      props: { title: 'Commercial Christmas Light Installation' }
    },
  ],
})

export default router


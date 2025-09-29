import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Brightland Lights"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'),
      meta: { title: 'About Us | Brightland Lights' }
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
      meta: { title: 'Free Quote Request Form| Brightland Lights' }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../pages/Products.vue'),
      meta: {
        title: "Products | Brightland Lights"
      }
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
      props: { title: 'Residential Holiday Light Installation' },
      meta: { title: 'Residential Holiday Light Installation | Brightland Lights' }
    },
    {
      path: '/lighting-commercial',
      name: 'lighting-commercial',
      component: () => import('../pages/Lighting.vue'),
      props: { title: 'Commercial Holiday Light Installation' },
      meta: { title: 'Commercial Christmas Light Installation | Brightland Lights' }
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ],
})

router.afterEach((to) => {
  const pageTitle = to && to.meta && to.meta.title || 'Brightland Lights';
  document.title = pageTitle;
})


export default router


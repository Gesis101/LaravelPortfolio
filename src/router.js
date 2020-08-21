import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/views/Portfolio')
    },
    {
      path: '/contact-me',
      name: 'Contact',
      component: () => import('@/views/Contact')
    }
  ]
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router

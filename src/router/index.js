import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Guide from '@/pages/Guide/Guide'
import PageNotFound from '@/pages/PageNotFound/PageNotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})

export default router;

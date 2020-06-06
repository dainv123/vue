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

// router.beforeEach((to, from, next) => {
//   const isLoggedIn = store.getters['Authen/isLoggedIn']
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if(
//     requiresAuth &&
//     !isLoggedIn
//   ) {
//     if(to.name !== 'NotFound') {
//       localStorage.setItem('currentUrl', to.fullPath || '/');
//     }
//     next({ path: '/ep/authen/login' })
//   } else {
//     next();
//   }
// });

export default router;

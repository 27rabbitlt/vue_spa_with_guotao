// router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import PrivacyPolicy from '../views/PrivacyPolicy/index.vue'
// import 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/impact',
    // redirect: '/'
    name: 'Impact',
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: About,
  // },
]

const router = createRouter({
  // history: createWebHistory(),
  // history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log(import.meta.env.BASE_URL)
      console.log('to.hash', to.hash)
      return new Promise((resolve) => {
        const checkExist = () => {
          const el = document.querySelector(to.hash)
          if (el) {
            console.log(el)
            resolve({ el: to.hash, behavior: 'smooth' })
          } else {
            console.log('not yet')
            setTimeout(checkExist, 100)
          }
        }
        checkExist()
      })
    }
    return { top: 0 }
  }
})

export default router
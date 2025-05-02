// router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import PrivacyPolicy from '../views/PrivacyPolicy/index.vue'

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
  }
]

const router = createRouter({
  // history: createWebHistory(),
  // history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth'
          })
        }, 500) // 延迟确保组件已渲染
      })
    }
    return { top: 0 }
  }
})

export default router
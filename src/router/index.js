// router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import PrivacyPolicy from '../views/PrivacyPolicy/index.vue'
import News from '../views/News/index.vue'
import NewsDetail from '../views/NewsDetail/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: NewsDetail,
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
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log(import.meta.env.BASE_URL)
      console.log('to.hash', to.hash)
      if (to.hash) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: 'smooth',
            })
          }, 300) // 延迟 300ms，等待页面内容渲染
        })
      }
    }
    return { top: 0 }
  }
})

export default router
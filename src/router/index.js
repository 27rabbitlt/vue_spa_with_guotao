// router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import PrivacyPolicy from '../views/PrivacyPolicy/index.vue'
import News from '../views/News/index.vue'
import NewsDetail from '../views/NewsDetail/index.vue'
import SignIn from '../views/Auth/index.vue'
import Layout from '../views/Layout/index.vue'
import Admin from '../views/Admin/index.vue'
import UserList from '../views/Admin/components/UserList.vue'
import NewsList from '../views/Admin/components/NewsList.vue'
import AddNews from '@/views/Admin/components/AddNews.vue'
import EditNews from '@/views/Admin/components/EditNews.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/news',
//     name: 'News',
//     component: News,
//   },
//   {
//     path: '/news/:id',
//     name: 'NewsDetail',
//     component: NewsDetail,
//   },
//   {
//     path: '/signin',
//     name: 'SignIn',
//     component: SignIn,
//   },
//   {
//     path: '/privacy-policy',
//     name: 'PrivacyPolicy',
//     component: PrivacyPolicy,
//   }
// ]

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
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
        path: '/signin',
        name: 'SignIn',
        component: SignIn,
      },
      {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
      },
      {
        path: '/admin',
        component: Admin,
        children: [
          {
            path: '',
            redirect: '/admin/users'
          },
          {
            path: 'users',
            name: 'UserList',
            component: UserList
          },
          {
            path: 'news',
            name: 'NewsList',
            component: NewsList
          },
          {
            path: 'news/add',
            name: 'AddNews',
            component: AddNews
          },
          {
            path: 'news/edit/:id',
            name: 'EditNews',
            component: EditNews,
            props: true
          }
        ]
      }
    ],
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
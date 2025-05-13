import './styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import DOMPurify from 'dompurify'

// 引入element-plus/icons-vue
import 'element-plus/theme-chalk/src/index.scss';

import '@/styles/wangEditor.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Add DOMPurify directive
app.directive('dompurify-html', {
  mounted(el, binding) {
    el.innerHTML = DOMPurify.sanitize(binding.value)
  },
  updated(el, binding) {
    el.innerHTML = DOMPurify.sanitize(binding.value)
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')

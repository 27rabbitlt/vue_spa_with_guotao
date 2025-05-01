<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">Vue SPA</div>
      <ul class="nav-list">
        <li v-for="link in links" :key="link.name" :class="{ active: isActive(link) }" @click="navigate(link)">
          {{ link.text }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const links = ref([
  { name: 'home', text: '首页', hash: '#home' },
  { name: 'team', text: '团队', hash: '#team' },
  { name: 'contact', text: '联系方式', hash: '#contact' },
  { name: 'about', text: '关于', path: '/about' }
])

// 当前高亮的链接
const activeLink = ref(null)

// 判断是否激活
const isActive = (link) => {
  if (link.path) {
    return route.path === link.path
  } else {
    // 如果是 hash 链接，当 activeLink 的 name 与 link 的 name 相同时，也认为是激活状态
    return activeLink.value?.name === link.name
  }
}

// 防抖函数
const debounce = (fn, delay) => {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 滚动检测逻辑
const handleScroll = () => {
  if (route.path !== '/') return // 仅在首页生效

  const scrollPosition = window.scrollY + 100 // 加偏移量（根据导航栏高度调整）

  let foundActive = false // 标记是否找到当前激活的 section

  // 遍历所有可滚动模块，找出当前最接近顶部的模块
  for (const link of links.value) {
    if (!link.hash) continue

    const section = document.querySelector(link.hash)
    if (!section) continue

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      activeLink.value = link
      // 更新 URL hash，但不要在用户点击导航时立即更新，避免覆盖点击行为
      if (route.hash !== link.hash && !isNavigating.value) {
        history.replaceState(null, null, link.hash)
      }
      foundActive = true
      break // 找到一个匹配的就停止遍历
    }
  }

  // 如果没有找到匹配的 section，并且当前不在顶部，则取消高亮 hash 导航（可选逻辑）
  if (!foundActive && window.scrollY > 0 && !isNavigating.value) {
    activeLink.value = null;
    if (route.hash) {
      history.replaceState(null, null, window.location.pathname);
    }
  } else if (!foundActive && window.scrollY === 0 && !activeLink.value && links.value.length > 0) {
    // 滚动到顶部时，默认高亮第一个 hash 导航
    activeLink.value = links.value.find(link => link.hash) || null;
    if (activeLink.value?.hash && route.hash !== activeLink.value.hash && !isNavigating.value) {
      history.replaceState(null, null, activeLink.value.hash);
    }
  }
}

// 创建一个 ref 来标记当前是否正在通过点击导航进行跳转
const isNavigating = ref(false)

// 创建防抖后的滚动处理函数
const debouncedScroll = debounce(handleScroll, 100)

// 导航跳转
const navigate = (link) => {
  activeLink.value = link // 立即更新高亮状态
  isNavigating.value = true // 设置为正在导航

  if (link.path) {
    router.push(link.path).finally(() => {
      isNavigating.value = false // 导航结束后重置
    })
  } else {
    if (route.path === '/') {
      const el = document.querySelector(link.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        // 延迟一段时间后重置 isNavigating，确保滚动完成
        setTimeout(() => {
          isNavigating.value = false
        }, 300) // 可以根据你的平滑滚动动画时长调整
      } else {
        isNavigating.value = false // 如果元素不存在，也要重置
      }
    } else {
      router.push({ path: '/', hash: link.hash }).finally(() => {
        isNavigating.value = false // 导航结束后重置
      })
    }
  }
}

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', debouncedScroll)
  handleScroll() // 初始化时检测一次
})

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  width: 100vw;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
}

.nav-list {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  cursor: pointer;
  padding: 0.5rem 0;
  color: #4a5568;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  position: relative;
}

.nav-list li:hover {
  color: #42b983;
}

.nav-list li.active {
  color: #42b983;
  font-weight: 500;
}

.nav-list li.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #42b983;
  border-radius: 1px;
}

@media (max-width: 1024px) {
  .nav-container {
    padding: 0 1rem;
  }

  .nav-list {
    gap: 1.5rem;
  }
}
</style>
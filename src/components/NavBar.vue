<template>
  <nav class="navbar" :class="{ 'navbar-hidden': isHidden }">
    <div class="nav-container">
      <div class="logo" @click="handleLogoClick">
        <img src="@/assets/logo.svg" alt="Logo">
      </div>
      <ul class="nav-list">
        <li v-for="link in links" :key="link.name" class="nav-item" :class="{ 'nav-item-active': isActive(link) }"
          @click="handleNavigation(link)">
          {{ link.text }}
        </li>
        <div class="social">
          <a href="https://www.youtube.com/@MPowerVentures" target="_blank">
            <img src="@/assets/img/youtube-icon.png" alt="youtube">
          </a>
          <a href="https://www.linkedin.com/company/eride-africa/posts/?feedView=all" target="_blank">
            <img src="@/assets/img/linked-in-icon.png" alt="linkedin">
          </a>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNavigationStore } from '@/stores/navigation'

// 路由和状态管理
const route = useRoute()
const router = useRouter()
const navigationStore = useNavigationStore()

// 配置数据
const links = ref([
  { name: 'home', text: 'HOME', hash: '#home' },
  { name: 'about', text: 'ABOUT', hash: '#about' },
  { name: 'offering', text: 'OFFERING', hash: '#offering' },
  { name: 'impact', text: 'IMPACT', hash: '#impact' },
  { name: 'team', text: 'TEAM', hash: '#team' },
  { name: 'contact', text: 'CONTACT', hash: '#contact' }
])

// 响应式状态
const activeLink = ref(null) // 当前激活的导航链接
const isNavigating = ref(false) // 是否正在导航中（防止滚动检测干扰点击行为）
const isHidden = ref(false) // 导航栏是否隐藏
const lastScrollY = ref(0) // 上次滚动位置，用于计算滚动方向

// 工具函数
const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

// 核心逻辑
// 判断链接是否处于激活状态
const isActive = (link) => {
  if (link.path) return route.path === link.path // 普通路由链接直接比较路径
  if (route.path === '/') return activeLink.value?.name === link.name // 首页的hash链接比较name
  return false // 非首页的hash链接不激活
}

// 更新当前激活的导航链接（根据滚动位置）
const updateActiveLink = () => {
  console.log('route.path', route.path)
  console.log('route.hash', route.hash)
  if (route.path !== '/') return // 仅在首页生效

  const scrollPosition = window.scrollY
  let foundActive = false

  // 遍历所有可滚动模块，找到当前可见的section
  for (const link of links.value) {
    if (!link.hash) continue

    const section = document.querySelector(link.hash)
    if (!section) continue

    const { offsetTop, offsetHeight } = section
    console.log('current section: ', link.hash)
    console.log('current pos: ', scrollPosition)
    console.log('offsetTop: ', offsetTop)
    console.log('offsetHeight: ', offsetHeight)

    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
      // if (!isNavigating.value) {
      activeLink.value = link
      // if (route.hash !== link.hash) {
      console.log('base: ', router.options.history.base)
      // router.replace({ hash: link.hash })
      history.replaceState(null, null, router.options.history.base + '/' + link.hash)
      // }
      // }
      foundActive = true
      break
    }
  }

  console.log('-----------------------------------')

  // 处理未找到匹配的情况
  if (!foundActive) {
    if (window.scrollY > 0 && !isNavigating.value) {
      // 滚动位置大于0且没有找到匹配的section，清除激活状态
      activeLink.value = null
      console.log('window.location.pathname: ', window.location.pathname)
      if (route.hash) history.replaceState(null, null, window.location.pathname)
    } else if (window.scrollY === 0 && !activeLink.value) {
      // 滚动到顶部且没有激活的链接，激活第一个hash链接
      const firstHashLink = links.value.find(link => link.hash)
      console.log('link, link.hash: ', link, link.hash)
      if (firstHashLink && !isNavigating.value) {
        activeLink.value = firstHashLink
        if (route.hash !== firstHashLink.hash) {
          history.replaceState(null, null, firstHashLink.hash)
        }
      }
    }
  }
}

// 更新导航栏透明度
const updateTransparency = () => {
  if (route.path !== '/') {
    // 非首页完全不透明
    document.documentElement.style.setProperty('--navbar-bg-alpha', '1')
    return
  }

  const firstSection = document.querySelector('#home')
  if (!firstSection) {
    document.documentElement.style.setProperty('--navbar-bg-alpha', '1')
    return
  }

  // 根据滚动位置计算透明度
  const scrollRatio = Math.min(1, window.scrollY / (firstSection.offsetHeight * 0.8))
  document.documentElement.style.setProperty('--navbar-bg-alpha', scrollRatio.toString())
}

// 处理导航栏显示/隐藏（根据滚动方向）
const handleScrollDirection = () => {
  if (isNavigating.value || route.path !== '/') return // 导航中或非首页不处理

  const currentScrollY = window.scrollY
  const scrollDelta = currentScrollY - lastScrollY.value

  if (scrollDelta > 0 && currentScrollY > 100) {
    // 向下滚动且超过100px时隐藏
    isHidden.value = true
  } else if (scrollDelta < 0) {
    // 向上滚动时显示
    isHidden.value = false
  }

  lastScrollY.value = currentScrollY
}

// 处理导航链接点击
const handleNavigation = (link) => {
  isNavigating.value = true

  if (link.path) {
    // 跳转到其他页面时，设置完全不透明且显示导航栏
    document.documentElement.style.setProperty('--navbar-bg-alpha', '1')
    isHidden.value = false
  } else {
    // 首页内的锚点跳转时，根据当前页面决定是否隐藏
    isHidden.value = route.path === '/'
  }

  navigationStore.navigate(link)

  // 1秒后重置导航状态
  setTimeout(() => {
    isNavigating.value = false
    lastScrollY.value = window.scrollY
  }, 1000)
}

// 处理logo点击
const handleLogoClick = () => {
  navigationStore.navigate({ name: 'home', hash: '#home' })
}

// 生命周期和监听
// 监听路由变化
watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    // 切换到首页时，更新透明度
    updateTransparency()
  } else {
    // 切换到其他页面时，设置完全不透明且显示导航栏
    document.documentElement.style.setProperty('--navbar-bg-alpha', '1')
    isHidden.value = false
  }
  isNavigating.value = false
})

// 创建防抖后的滚动处理函数
const debouncedScroll = debounce(updateActiveLink, 50)
const debouncedScrollDirection = debounce(handleScrollDirection, 100)

// 组件挂载时初始化
onMounted(() => {
  if (route.path === '/') {
    // 首页顶部时完全透明
    document.documentElement.style.setProperty('--navbar-bg-alpha', '0')
    const firstHashLink = links.value.find(link => link.hash)
    if (firstHashLink) activeLink.value = firstHashLink
  } else {
    // 非首页时完全不透明
    document.documentElement.style.setProperty('--navbar-bg-alpha', '1')
    isHidden.value = false
  }

  // 添加滚动事件监听
  window.addEventListener('scroll', debouncedScroll)
  window.addEventListener('scroll', updateTransparency)
  window.addEventListener('scroll', debouncedScrollDirection)
})

// 组件卸载时清理
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedScroll)
  window.removeEventListener('scroll', updateTransparency)
  window.removeEventListener('scroll', debouncedScrollDirection)
})
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px;
  z-index: 1000;
  transition: transform 0.6s ease, background 0.2s linear;
  background: linear-gradient(135deg, 
      rgba(10, 10, 10, var(--navbar-bg-alpha, 1)) 70%,
      rgba(31, 22, 12, var(--navbar-bg-alpha, 1)));

  &-hidden {
    transform: translateY(-100%);
  }
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  img {
    height: 50px;
  }
}

.nav-list {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-item {
  cursor: pointer;
  transition: all 0.2s ease;
  color: #ffffff;

  &:hover {
    color: var(--color-secondary);
  }

  &-active {
    color: var(--color-secondary);
  }
}

.social {
  display: flex;
  gap: 1rem;

  img {
    width: 18px;
    height: 18px;
  }
}
</style>
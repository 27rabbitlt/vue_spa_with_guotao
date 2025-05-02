import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export const useNavigationStore = defineStore('navigation', () => {
  const router = useRouter()
  const route = useRoute()

  // 用于标记是否是程序触发的滚动
  const isProgrammaticScroll = ref(false)

  // 平滑滚动到指定元素
  const smoothScrollTo = (element, duration = 300) => {
    const start = window.scrollY
    const target = element.offsetTop
    const distance = target - start
    const startTime = performance.now()

    // 缓动函数：快速启动的缓动
    const quickStartEase = (t) => {
      // 快速启动阶段
      if (t < 0.2) {
        return 4 * t * t // 更强的初始加速度
      }
      // 平滑结束阶段
      return 1 - Math.pow(1 - t, 2) / 2
    }

    const animation = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = quickStartEase(progress)

      window.scrollTo(0, start + distance * easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animation)
      } else {
        isProgrammaticScroll.value = false
      }
    }

    requestAnimationFrame(animation)
  }

  // 导航到指定链接
  const navigate = async (link) => {
    isProgrammaticScroll.value = true

    if (link.path) {
      // 跳转到其他页面
      await router.push(link.path)
      isProgrammaticScroll.value = false
    } else {
      if (route.path === '/') {
        // 首页内的锚点跳转
        const el = document.querySelector(link.hash)
        if (el) {
          // 使用自定义的平滑滚动
          smoothScrollTo(el)
        }
      } else {
        // 从其他页面跳转到首页的锚点
        await router.push({ path: '/', hash: link.hash })
        // 等待页面加载完成后再滚动
        setTimeout(() => {
          const el = document.querySelector(link.hash)
          if (el) {
            smoothScrollTo(el)
          }
        }, 100)
      }
    }
  }

  return {
    isProgrammaticScroll,
    navigate
  }
})
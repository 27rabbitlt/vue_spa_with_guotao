<template>
  <section id="impact" class="impact-section">
    <div class="slider-container">
      <div class="slider-nav-arrows">
        <button class="slider-prev" @click="prevSlide">
          <img src="@/assets/img/arrow-left.svg" alt="Previous" />
        </button>
        <button class="slider-next" @click="nextSlide">
          <img src="@/assets/img/arrow-right.svg" alt="Next" />
        </button>
      </div>
      <div class="impact-slider">
        <div class="slider-track" :style="{ transform: `translateX(${currentPosition}px)` }"
          @transitionend="handleTransitionEnd" :class="{ 'no-transition': isJumping }">
          <div v-for="(image, index) in extendedImages" :key="index" class="slider-item">
            <div class="image-holder">
              <img :src="image" :alt="'Impact ' + (index)" class="slider-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="impact-container">
        <div class="video-container">
          <button class="video-button" @click="openVideo">
            <span class="button-text">Watch video</span>
            <img src="@/assets/img/icon-play.svg" alt="Play" class="play-icon" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const currentPosition = ref(0)
const slideWidth = 540 // 每个幻灯片的宽度
const images = ref([])
const extendedImages = ref([])
let autoPlayTimer = null
const autoPlayInterval = 3000 // 自动播放间隔，单位毫秒
const currentIndex = ref(3)
const isJumping = ref(false)

// 自动读取图片
const loadImages = async () => {
  const modules = import.meta.glob('@/assets/img/impacts/*.{jpg,jpeg,png}')
  const imagePromises = Object.keys(modules).map(async (path) => {
    const module = await modules[path]()
    return module.default
  })

  const loadedImages = await Promise.all(imagePromises)
  images.value = loadedImages
  extendedImages.value = [
    loadedImages[loadedImages.length - 3], // 克隆最后一张
    loadedImages[loadedImages.length - 2], // 克隆最后一张
    loadedImages[loadedImages.length - 1], // 克隆最后一张
    ...loadedImages,                      // 原始图片
    loadedImages[0],                       // 克隆第一张
    loadedImages[1],                       // 克隆第一张
    loadedImages[2],                       // 克隆第一张
  ]
}

// 更新位置
const updatePosition = () => {
  currentPosition.value = -currentIndex.value * slideWidth
}

// 上一张
const prevSlide = () => {
  resetAutoPlay()
  if (currentIndex.value === 3) {
    isJumping.value = true
    currentIndex.value = images.value.length + 3
    updatePosition()
    nextTick(() => {
      document.querySelector('.slider-track').offsetHeight
      isJumping.value = false
      currentIndex.value -= 1
      updatePosition()
    })
  } else {
    currentIndex.value = currentIndex.value - 1
    updatePosition()
  }
}

// 下一张
const nextSlide = () => {
  resetAutoPlay()
  if (currentIndex.value === images.value.length + 3) {
    isJumping.value = true
    currentIndex.value = 3
    updatePosition()
    nextTick(() => {
      document.querySelector('.slider-track').offsetHeight
      isJumping.value = false
      currentIndex.value += 1
      updatePosition()
    })
  } else {
    currentIndex.value += 1
    updatePosition()
  }
}

// 自动播放
const startAutoPlay = () => {
  autoPlayTimer = setInterval(() => {
    nextSlide()
  }, autoPlayInterval)
}

// 重置自动播放
const resetAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
  }
  startAutoPlay()
}

const openVideo = () => {
  // 打开视频弹窗的逻辑
  console.log('Open video')
}

onMounted(() => {
  loadImages()
  startAutoPlay()
})

onUnmounted(() => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
  }
})
</script>

<style scoped lang="scss">
.impact-section {
  background-color: #ffffff;
  padding: 100px 0;
}

.impact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
}

.impact-title {
  text-align: center;
  margin-bottom: 40px;
}

.slider-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.slider-nav-arrows {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 29px;
      height: 29px;
    }
  }
}

.impact-slider {
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.no-transition {
  transition: none !important;
}

.slider-item {
  flex: 0 0 540px;
  padding: 0 10px;
}

.image-holder {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.video-container {
  text-align: center;
  margin-top: 40px;
}

.video-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: linear-gradient(226deg, #1a438e, #101c32);
  border: none;
  border-radius: 9999px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .play-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
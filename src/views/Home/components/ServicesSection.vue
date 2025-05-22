<template>
  <section id="services" class="services-section">
    <div class="container">
      <div class="services-container">
        <div class="services-heading wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="text-primary text-7xl font-bold title">Fleet management and IoT monitoring
          </h2>
        </div>
        <div class="services-content-container">
          <div class="services-content">
            <!-- <h3 class="title text-primary text-3xl font-bold wow animate__animated animate__fadeInUp"
              data-wow-duration="1s">
              Electric Products</h3> -->
            <p class="text-primary text-3xl font-medium wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              Our in-house developed monitoring solution allows you to fully control your vehicles and battery packs.
              Completely customizable towards the need of B2B clients and fleet managers.
            </p>
            <a href="https://eride.africa" class="btn-primary wow animate__animated animate__fadeInUp"
              data-wow-duration="1s" target="_blank">
              <span>PRODUCT PORTFOLIO</span>
            </a>
          </div>
        </div>
        <!-- <div class="services-items-grid">
          <servicesItem title="Free access to our online monitoring dashboard
" :img="dashBoard" />
          <servicesItem title="Container Tracker" :img="lightingImg" />
          <servicesItem title="Remote Monitoring & Controling" :img="applianceImg" />
          <servicesItem title="E-MOBILITY" :img="eMobilityImg" />
        </div> -->
        <!-- 按钮 -->
        <!-- <div class="flex justify-between mb-6">
          <button @click="prev" class="text-2xl px-4 py-2">Prev</button>
          <button @click="next" class="text-2xl px-4 py-2">Next</button>
        </div> -->

        <!-- 卡片容器 -->
        <!-- <div class="flex justify-center items-center"> -->
        <!-- <div v-for="(card, index) in cards" :key="index"
            class="relative transition-all duration-500 ease-in-out transform origin-center" :class="cardClass(index)"
            @mouseenter="currentCard = index">
            <img :src="card.image" alt="card" class="w-[350px] h-80 object-cover -2xl shadow-lg" />
            <div
              class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-black/60 px-4 py-1 rounded">
              {{ card.title }}
            </div> -->
        <!-- <div class="absolute transition-all duration-500 ease-in-out transform origin-center" :class="cardClass(1)"
            @mouseenter="currentCard = 1">
            <img :src="cards[1].image" alt="card" class="w-[1000px] object-cover -2xl shadow-lg" />
          </div>

          <div class="absolute transition-all duration-500 ease-in-out transform origin-center" :class="cardClass(2)"
            @mouseenter="currentCard = 2">
            <img :src="cards[2].image" alt="card" class="w-[500px] object-cover -2xl shadow-lg" />

          </div>
        </div> -->
      </div>
    </div>
    <SoftwareSection />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SoftwareSection from './SoftwareSection.vue'
import dashBoard from '@/assets/img/dashboard_deb.png'
import dashBoardSaved from '@/assets/img/db_saved.png'
import dashBoardGPS from '@/assets/img/db_GPS.png'
import dashBoardMetrics from '@/assets/img/db_metrics.png'

const cards = [
  // { image: dashBoard, title: 'Speed' },
  { image: dashBoardGPS, title: 'Power' },
  { image: dashBoardSaved, title: 'Design' },
  { image: dashBoardMetrics, title: 'Eco' },
]

const currentCard = ref(0);

const prev = () => {
  currentCard.value = (currentCard.value - 1 + cards.length) % cards.length
}
const next = () => {
  currentCard.value = (currentCard.value + 1) % cards.length
}

const cardClass = (index) => {
  const offset = (index - currentCard.value + cards.length) % cards.length

  // switch (offset) {
  //   case 0:
  //     return 'z-30 scale-105'
  //   case 1:
  //     return '-rotate-6 scale-90 opacity-70 -translate-x-10 z-20'
  //   case 2:
  //     return 'rotate-6 scale-90 opacity-70 translate-x-10 z-10'
  //   case 3:
  //     return '-rotate-12 scale-75 opacity-50 -translate-x-20 z-0'
  //   default:
  //     return 'hidden'
  // }

  switch (offset) {
    case 0:
      // 当前卡片：居中，最大尺寸，最上层
      return 'z-30 scale-105 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
    case 1:
      // 第二张卡片：稍微向右偏移，倾斜，略小
      return 'z-20 scale-90 opacity-70 rotate-6 translate-x-16 -translate-y-8'; // 调整 translate 值来控制堆叠效果
    case 2:
      // 第三张卡片：稍微向左偏移，倾斜，更小
      return 'z-10 scale-80 opacity-60 -rotate-6 -translate-x-16 -translate-y-4'; // 调整 translate 值
    case 3:
      // 第四张卡片：更远的偏移，更小，更透明
      return 'z-0 scale-70 opacity-40 -rotate-12 translate-x-24 -translate-y-0'; // 调整 translate 值
    default:
      return 'hidden'; // 隐藏超出4个卡片的情况
  }
}
</script>

<style scoped lang="scss">
.services-section {
  background-color: #ffffff;
}

.services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

.services-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.services-content-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

.services-content {
  // width: 630px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
}

.services-items-grid {
  flex: 1;
  min-width: 0;
  display: grid;
  grid-column-gap: 14px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 10px;
}
</style>
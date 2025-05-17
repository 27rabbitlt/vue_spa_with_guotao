<template>
  <section id="home" class="home-section">
    <div class="container">
      <div class="hero-headings wow animate__animated animate__fadeInUp" data-wow-duration="1s">
        <h1 class="title pl-20 pr-20 text-white font-bold text-7xl text-shadow-md text-center" data-wow-offset="1">
          Powering Zambia’s Green Future </h1>
        <h2 class="pl-20 pr-20 text-white text-3xl text-shadow-md text-center">We delivers affordable,
          reliable electric mobility solutions, reduce
          costs and cut carbon. Join us in driving sustainable change.</h2>
      </div>
      <div class="arrow-down" @click="scrollToNext">
        <img src="@/assets/img/arrow-down.svg" alt="Scroll down" class="animate-bounce cursor-pointer">
      </div>
    </div>
  </section>
</template>

<script setup>
import { useNavigationStore } from '@/stores/navigation'

const navigationStore = useNavigationStore()

const scrollToNext = () => {
  navigationStore.navigate({ name: 'about', hash: '#about' })
}
</script>

<style scoped lang="scss">
.home-section {
  background-image: url('@/assets/img/home-bg.jpeg');
  background-size: cover;
  background-position: 50%;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.hero-headings {
  max-width: 1220px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 140px;
  padding-bottom: 100px;
}

.arrow-down {
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  img {
    width: 40px;
    height: 40px;
  }
}

@keyframes fadeInUpSmall {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInUpSmall {
  animation-name: fadeInUpSmall;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}
</style>
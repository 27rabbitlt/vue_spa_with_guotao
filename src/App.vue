<!-- App.vue
<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <Footer />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'

onMounted(() => {
    // WOW.js 初始化
    if (typeof WOW !== 'undefined') {
        new WOW().init()
    }
})
</script>

<style></style> -->

<!-- App.vue -->
<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  // WOW.js 初始化
  if (typeof WOW !== 'undefined') {
    new WOW().init()
  }
})
</script>

<style></style>
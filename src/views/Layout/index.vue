<!-- App.vue -->
<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <Footer />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style></style>
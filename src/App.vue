<!-- App.vue -->
<template>
  <NavBar />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style></style>
<template>
  <div>
    <!-- <HeroScroll /> -->
    <HomeSection />
    <AboutSection />
    <OfferingSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import OfferingSection from './components/OfferingSection.vue'

</script>

<style scoped></style>
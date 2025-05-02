<template>
  <div>
    <!-- <HeroScroll /> -->
    <HomeSection />
    <AboutSection />
    <OfferingSection />
    <SoftwareSection />
    <FinanceSection />
    <ProjectSection />
    <ImpactSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import OfferingSection from './components/OfferingSection.vue'
import SoftwareSection from './components/SoftwareSection.vue'
import FinanceSection from './components/FinanceSection.vue'
import ImpactSection from './components/ImpactSection.vue'
import ProjectSection from './components/ProjectSection.vue'
</script>

<style scoped></style>
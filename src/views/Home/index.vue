<template>
  <div>
    <!-- <HeroScroll /> -->
    <HomeSection />
    <Countdown showDays="false" showLabels="false" />
    <!-- <FlipClock /> -->
    <FlipClock :target="new Date('2025-12-31T23:59:59')" :onEnd="onCountdownEnd" />
    <AboutSection />
    <PhotoGallarSection />
    <VideoSection />
    <!-- <ModelShowcase /> -->
    <ServicesSection />
    <ProjectSection />
    <!-- <FinanceSection /> -->
    <!-- <ImpactSection /> -->
    <!-- <LearnmoreSection /> -->
    <!-- <GreenFactSection /> -->
    <TeamSection />
    <PartnerSection />
    <LocationSection />
    <ContactSection />
    <!-- <PartnerSection /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import SoftwareSection from './components/SoftwareSection.vue'
import FinanceSection from './components/FinanceSection.vue'
import ImpactSection from './components/ImpactSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import LearnmoreSection from './components/LearnmoreSection.vue'
import GreenFactSection from './components/GreenFactSection.vue'
import TeamSection from './components/TeamSection.vue'
import LocationSection from './components/LocationSection.vue'
import ContactSection from './components/ContactSection.vue'
import PartnerSection from './components/PartnerSection.vue'
import HeroScroll from './components/HeroScroll.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ModelShowcase from './components/ModelShowcase.vue'
import PhotoGallarSection from './components/PhotoGallarSection.vue'
import VideoSection from './components/VideoSection.vue'
// import FlipClock from './components/FlipClock.vue'
import { Countdown } from 'vue3-flip-countdown'
import { Clock } from 'three'
import FlipClock from './components/FlipClock.vue'


const route = useRoute()

onMounted(() => {
  if (typeof WOW !== 'undefined') {
    new WOW().init()
  }
  const rawHash = window.location.hash // 比如 "#/impact"
})
</script>

<style scoped></style>
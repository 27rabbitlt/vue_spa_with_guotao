<template>
  <div>
    <!-- <HeroScroll /> -->
    <HomeSection />
    <!-- <Countdown showDays="false" showLabels="false" /> -->
    <!-- <FlipClock /> -->
    <AboutSection />
    <VideoSection />
    <PortfolioSection />
    <FleetManageSection />
    <UseCaseSection />
    <TestimonialSection />
    <TeamSection />
    <PartnerSection />
    <LocationSection />
    <!-- <ContactSection /> -->
    <!-- <PartnerSection /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import HomeSection from './components/HomeSection.vue'
import UseCaseSection from './components/UseCaseSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import SoftwareSection from './components/SoftwareSection.vue'
import FinanceSection from './components/FinanceSection.vue'
import ImpactSection from './components/ImpactSection.vue'
import FleetManageSection from './components/FleetManageSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
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
import PortfolioSection from './components/PortfolioSection.vue'
import VideoSection from './components/VideoSection.vue'
// import FlipClock from './components/FlipClock.vue'
import { Countdown } from 'vue3-flip-countdown'
import { Clock } from 'three'
import FlipClock from './components/FlipClock.vue'
import LusakaPathSection from './components/LusakaPathSection.vue'


const route = useRoute()

onMounted(() => {
  if (typeof WOW !== 'undefined') {
    new WOW().init()
  }
  const rawHash = window.location.hash // 比如 "#/impact"
})
</script>

<style scoped></style>
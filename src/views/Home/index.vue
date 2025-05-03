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
    <LearnmoreSection />
    <GreenFactSection />
    <TeamSection />
    <LocationSection />
    <ContactSection />
    <PartnerSection />
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
import LearnmoreSection from './components/LearnmoreSection.vue'
import GreenFactSection from './components/GreenFactSection.vue'
import TeamSection from './components/TeamSection.vue'
import LocationSection from './components/LocationSection.vue'
import ContactSection from './components/ContactSection.vue'
import PartnerSection from './components/PartnerSection.vue'
import HeroScroll from './components/HeroScroll.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  if (typeof WOW !== 'undefined') {
    new WOW().init()
  }
  const rawHash = window.location.hash // 比如 "#/impact"
  // console.log('rawHash:', rawHash)
  // console.log('route: ', route)
  // console.log('route.hash', route.hash)
  // if (route.hash) {
  //   // 等待 DOM 渲染完成再滚动
  //   setTimeout(() => {
  //     const el = document.querySelector(route.hash)
  //     if (el) {
  //       el.scrollIntoView({ behavior: 'smooth' })
  //     }
  //   }, 300)
  // }
})
</script>

<style scoped></style>
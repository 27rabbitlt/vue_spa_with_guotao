<template>
  <div>
    <!-- <HeroScroll /> -->
    <!-- <section id="home" ref="homeRef"> -->
    <HomeSection />
    <!-- </section> -->

    <!-- <section id="team" ref="teamRef"> -->
    <TeamSection />
    <!-- </section> -->

    <!-- <section id="contact" ref="contactRef"> -->
    <ContactSection />
    <!-- </section> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import HomeSection from './components/HomeSection.vue'
import TeamSection from './components/TeamSection.vue'
import ContactSection from './components/ContactSection.vue'
import HeroScroll from './components/HeroScroll.vue'

const homeRef = ref(null)
const teamRef = ref(null)
const contactRef = ref(null)

</script>

<style scoped></style>
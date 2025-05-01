<template>
  <div>
    <HeroScroll />
    <section id="home" ref="homeRef">
      <HomeSection @learn-more="scrollToTeam" />
    </section>

    <section id="team" ref="teamRef">
      <TeamSection />
    </section>

    <section id="contact" ref="contactRef">
      <ContactSection />
    </section>
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

<style scoped>
section {
  min-height: 100vh;
  padding: 2rem;
  /* width: 100vw; */
}

#home {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

#team {
  background-color: #ffffff;
}

#contact {
  background-color: #f5f7fa;
}
</style>
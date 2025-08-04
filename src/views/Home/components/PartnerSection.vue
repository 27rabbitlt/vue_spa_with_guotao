<template>
  <section id="partners" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 uppercase">Our Partners</h2>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
        <a v-for="(logo, index) in partnerLogos" :key="index" :href="logo.link" :target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="logo.src" alt="Partner Logo" class="max-h-full max-w-full object-contain" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import HGT from '@/assets/img/HGT-converted.png'
import Zemia from '@/assets/img/Zemia-converted.png'

const partnerLogos = [
  { src: HGT, link: 'https://hollandgreentech.com/' },
  { src: Zemia, link: 'https://www.zemia.org/' }
]
</script>

<style scoped></style>

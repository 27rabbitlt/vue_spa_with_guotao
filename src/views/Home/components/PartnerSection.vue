<template>
  <section id="partners" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 uppercase">Our Partners</h2>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
        
        <!-- Holland Green Tech -->
        <a href="https://hollandgreentech.com/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="HGT" alt="Holland Green Tech" class="max-h-full max-w-full object-contain hollandgreentech-logo" />
        </a>
        
        <!-- Zemia -->
        <a href="https://www.zemia.org/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="Zemia" alt="Zemia" class="max-h-full max-w-full object-contain" />
        </a>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import HGT from '@/assets/img/HGT-converted-resized.png'
import Zemia from '@/assets/img/Zemia-converted.png'
</script>

<style scoped>
.hollandgreentech-logo {
  transform: scale(1.5);
  transform-origin: center;
}
</style>

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

        <a href="https://sph.ethz.ch/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="ethsph" alt="ETHSPH" class="max-h-full max-w-full object-contain" />
        </a>

        <a href="https://www.amz.co.zm/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="amz" alt="AMZ" class="max-h-full max-w-full object-contain" />
        </a>  

        <a href="https://www.bongohive.co.zm/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="bongohive" alt="Bongohive" class="max-h-full max-w-full object-contain" />
        </a>

        <a href="https://www.entrepreneur-club.org/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="ethclub" alt="ETH Entrepreneur Club" class="max-h-full max-w-full object-contain" />
        </a>

        <a href="https://www.presecure.co.zm/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="ps" alt="PreSecure" class="max-h-full max-w-full object-contain" />
        </a>

        <a href="https://www.repic.ch/en/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="repic" alt="REPIC" class="max-h-full max-w-full object-contain" />
        </a>

        <a href="https://www.sika.com/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="sika" alt="Sika" class="max-h-full max-w-full object-contain" />
        </a>

        <a href="https://www.unza.zm/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="University_of_Zambia" alt="University of Zambia" class="max-h-full max-w-full object-contain" />
        </a>

        <a href="https://www.venturelab.swiss/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="venturelab" alt="VentureLab" class="max-h-full max-w-full object-contain" />
        </a>

        <a href="https://zam.co.zm/" target="_blank"
          class="w-40 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
          <img :src="zam" alt="Zambia Association of Manufacturers" class="max-h-full max-w-full object-contain" />
        </a>

      </div>
    </div>
  </section>
</template>

<script setup>
import HGT from '@/assets/img/HGT-converted-resized.png'
import Zemia from '@/assets/img/Zemia-converted.png'
import ethsph from '@/assets/img/ethsph_logo-converted.png'
import amz from '@/assets/img/amz_logo-converted.png'
import bongohive from '@/assets/img/bongohive_logo-converted.png'
import ethclub from '@/assets/img/ethclub_logo-converted.png'
import ps from '@/assets/img/ps_logo-converted.png'
import repic from '@/assets/img/repic_logo-converted.png'
import sika from '@/assets/img/sika_logo-converted.png'
import University_of_Zambia from '@/assets/img/University_of_Zambia_logo-converted.png'
import venturelab from '@/assets/img/venturelab_logo-converted.png'
import zam from '@/assets/img/zam_logo-converted.png'

</script>

<style scoped>
.hollandgreentech-logo {
  transform: scale(1.5);
  transform-origin: center;
}
</style>

<template>
  <footer class="inserted-footer">
    <div class="container">
      <div class="footer-container">
        <div class="footer-logo-container">
          <a href="#" class="link-block" rel="noopener noreferrer">
            <img src="@/assets/logo.svg" loading="lazy" alt="MPower logo" class="footer-logo" />
          </a>
        </div>
        <div class="get-in-touch-container flex">
          <h4 class="text-secondary title text-gray-400 text-lg font-bold uppercase mb-4">Get in touch</h4>
          <div class="contact-address-container text-sm flex flex-col gap-4">
            <div class="contact-address-item flex flex-col">
              <span class="text-white">MPower Cameroon - Yaoundé</span>
              <a href="mailto:hellocameroon@mpower.africa" class="text-white" target="_blank"
                rel="noopener noreferrer">hellocameroon@mpower.africa</a>
            </div>
            <div class="contact-address-item flex flex-col">
              <span class="text-white">MPower Ghana - Accra</span>
              <a href="mailto:helloghana@mpower.africa" class="text-white" target="_blank"
                rel="noopener noreferrer">helloghana@mpower.africa</a>
            </div>
            <div class="contact-address-item flex flex-col">
              <span class="text-white">MPower Namibia - Windhoek</span>
              <a href="mailto:hellonamibia@mpower.africa" class="text-white" target="_blank"
                rel="noopener noreferrer">hellonamibia@mpower.africa</a>
            </div>
            <div class="contact-address-item flex flex-col">
              <span class="text-white">MPower Togo - Lomé</span>
              <a href="mailto:hellotogo@mpower.africa" class="text-white" target="_blank"
                rel="noopener noreferrer">hellotogo@mpower.africa</a>
            </div>
            <div class="contact-address-item flex flex-col">
              <span class="text-white">MPower Zambia - Lusaka</span>
              <a href="mailto:hellozambia@mpower.africa" class="text-white" target="_blank"
                rel="noopener noreferrer">hellozambia@mpower.africa</a>
            </div>
          </div>
        </div>
        <div class="connect-container flex">
          <h4 class="text-secondary title text-gray-400 text-lg font-bold uppercase mb-4">Connect</h4>
          <div class="social-links-container text-sm flex flex-col gap-2">
            <a href="https://www.youtube.com/@MPowerVentures" target="_blank" rel="noopener noreferrer"
              class="social-link">YouTube</a>
            <a href="https://www.linkedin.com/company/eride-africa/posts/?feedView=all" target="_blank"
              rel="noopener noreferrer" class="social-link">LinkedIn</a>
          </div>
        </div>
        <div class="info-container flex">
          <h4 class="text-secondary title text-gray-400 text-lg font-bold uppercase mb-4">MPower Ventures AG</h4>
          <div class="address-container text-white text-sm flex flex-col gap-2">
            <span>Hohlstrasse 176</span>
            <span>8004 Zurich</span>
            <span>Switzerland</span>
            <span>+41 79 175 52 02</span>
            <a href="mailto:info@mpower.africa" class="text-white" target="_blank"
              rel="noopener noreferrer">info@mpower.africa</a>
          </div>
        </div>

        <div class="arrow-up" @click="scrollToTop" v-if="isHomePage">
          <img src="@/assets/img/arrow-up.svg" loading="lazy" alt="" class="animate-bounce cursor-pointer" />
        </div>

      </div>

      <div class="footer-bottom text-gray-400">
        <span>©2025 MPower</span>
        <router-link to="/privacy-policy" class="footer-bottom-links text-gray-400" rel="noopener noreferrer">Privacy &
          Terms</router-link>
        <span>Made by Oddyti</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useNavigationStore } from '@/stores/navigation'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const navigationStore = useNavigationStore()
const route = useRoute()

const isHomePage = computed(() => route.path === '/')

const scrollToTop = () => {
  navigationStore.navigate({ name: 'home', hash: '#home' })
}
</script>

<style scoped lang="scss">
.inserted-footer {
  background: linear-gradient(135deg,
      rgba(10, 10, 10, var(--navbar-bg-alpha, 1)) 70%,
      rgba(31, 22, 12, var(--navbar-bg-alpha, 1)));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}


.footer-container {
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  a {
    color: var(--color-white);
    cursor: pointer;
  }
}

.footer-logo-container {
  margin-top: 50px;

  .footer-logo {
    width: 300px;
  }


}

.flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}


.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 0;

  a {
    text-decoration: underline;
    text-underline-offset: 4px;

    &:hover {
      color: var(--color-gray-400);
    }
  }
}
</style>
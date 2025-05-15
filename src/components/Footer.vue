<template>
  <footer class="inserted-footer">
    <div class="container">
      <div class="footer-container">
        <div class="footer-logo-container">
          <a href="#" class="link-block" rel="noopener noreferrer">
            <img src="@/assets/logo.svg" loading="lazy" alt="Eride logo" class="footer-logo" />
          </a>
        </div>
        <div class="get-in-touch-container flex">
          <h4 class="text-secondary title text-gray-400 text-lg font-bold uppercase mb-4">Get in touch</h4>
          <div class="contact-address-container text-sm flex flex-col gap-4">
            <div class="contact-address-item flex flex-col">
              <span class="text-white">Jacob Anz</span>
              <a href="jacob@eride.africa" class="text-white" target="_blank"
                rel="noopener noreferrer">jacob@eride.africa</a>
            </div>
          </div>
        </div>
        <!-- <div class="connect-container flex">
          <h4 class="text-secondary title text-gray-400 text-lg font-bold uppercase mb-4">Connect</h4>
        </div> -->
        <div class="info-container flex">
          <h4 class="text-secondary title text-gray-400 text-lg font-bold uppercase mb-4">Eride Zambia</h4>
          <div class="address-container text-white text-sm flex flex-col gap-2">
            <span>11878 Off Kasangula Road</span>
            <span>Olympia Lusaka</span>
            <span>Zambia</span>
          </div>
        </div>

        <div class="arrow-up" @click="scrollToTop" v-if="isHomePage">
          <img src="@/assets/img/arrow-up.svg" loading="lazy" alt="" class="animate-bounce cursor-pointer" />
        </div>

      </div>

      <div class="footer-bottom text-gray-400">
        <span>©2025 Eride Africa</span>
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
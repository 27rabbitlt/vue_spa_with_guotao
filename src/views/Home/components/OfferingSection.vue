<template>
  <section id="offering" class="offering-section">
    <div class="container">
      <div class="offering-container">
        <div class="offering-heading wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="text-primary text-7xl font-bold title">Our Offerings</h2>
        </div>
        <div class="offering-content-container">
          <div class="offering-content">
            <h3 class="title text-primary text-3xl font-bold wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              Electric Products</h3>
            <p class="text-primary text-3xl font-medium wow animate__animated animate__fadeInUp" data-wow-duration="1s">
              We are developing affordable electric productive use batteries and motorbikes that fit the road conditions
              of developing countries. The centerpiece, a lithium based battery, can be removed from the bike to be
              charged with solar panels or on the electric grid.</p>
            <a href="https://eride.africa" class="btn-primary wow animate__animated animate__fadeInUp"
              data-wow-duration="1s" target="_blank">
              <span>PRODUCT PORTFOLIO</span>
            </a>
          </div>
          <div class="offering-items-grid">
            <OfferingItem title="Customized Battery Management System" :img="solarSystemImg" />
            <OfferingItem title="Container Tracker" :img="lightingImg" />
            <OfferingItem title="Remote Monitoring & Controling" :img="applianceImg" />
            <OfferingItem title="E-MOBILITY" :img="eMobilityImg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import OfferingItem from '@/components/OfferingItem.vue'
import solarSystemImg from '@/assets/img/offering-item-solar-system.jpg'
import lightingImg from '@/assets/img/offering-item-lighting.jpg'
import applianceImg from '@/assets/img/offering-item-appliance.jpg'
import eMobilityImg from '@/assets/img/offering-item-e-mobility.jpg'
</script>

<style scoped lang="scss">
.offering-section {
  background-color: #ffffff;
}

.offering-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

.offering-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.offering-content-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

.offering-content {
  width: 630px;
  max-width: 32vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
}

.offering-items-grid {
  flex: 1;
  min-width: 0;
  display: grid;
  grid-column-gap: 14px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 10px;
}
</style>
<template>
  <section id="software" class="software-section">
    <div class="container">
      <div class="software-container">
        <div class="details-container">
          <div class="software-details wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <h2 class="heading text-primary text-3xl font-bold">Software Monitoring</h2>
            <div class="rich-text">
              <p class="text-primary text-2xl font-medium leading-8">We have a monitoring dashboards containing all
                needed metrics and indicators.</p>
              <ul class="list text-primary text-[1.25rem] font-medium leading-7">
                <li>Completely customizable, self-designed plugins for specific needs</li>
                <li>Automated reports monthly base</li>
                <li>Track every unit from distance to fuel usage</li>
                <li>Evaluate driving pattern</li>
              </ul>
            </div>
          </div>
          <div class="gradient-block wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <h4 class="text-2xl font-bold">State-of-the-art technology</h4>
            <p class="text-xl font-medium">From our access to energy data and payment behaviour, we
              provide the best products to our customers.
            </p>
            <h4 class="text-2xl font-bold">Full digitisation of operations</h4>
            <p class="text-xl font-medium">All our products have a unique QR code with full traceability from
              manufacturer to end-customer.</p>
          </div>
        </div>
        <div class="image-container wow animate__animated animate__fadeInRight" data-wow-duration="1s">
          <img src="@/assets/img/software.png" alt="Software Automation">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import OfferingItem from '@/components/OfferingItem.vue'
</script>

<style scoped lang="scss">
.software-section {
  background-color: #ffffff;
}

.software-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 100px;
  gap: 80px;
}

.details-container {
  width: 640px;
  max-width: 32vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
}

.software-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
}

.rich-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  .list li {
    background-image: url("@/assets/img/dot.svg");
    background-position: 0 8.5px;
    background-repeat: no-repeat;
    background-size: 10px;
    margin-bottom: 6px;
    padding-left: 24px;
  }
}

.gradient-block {
  color: white;
  background-image: linear-gradient(226deg, #1a438e, #101c32);
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 28px;
  display: flex;
  gap: 8px;
}

.image-container {

  img {
    height: 70vh;
  }
}
</style>
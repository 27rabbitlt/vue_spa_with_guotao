<template>
  <section id="software" class="software-section">
    <div class="container">
      <div class="software-container">
        <div class="details-container">
          <div class="software-details wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <h2 class="title heading text-primary text-3xl font-bold">Software Monitoring</h2>
            <div class="rich-text">
              <p class="text-primary text-2xl font-medium leading-8">We have a monitoring dashboards containing all
                needed metrics and indicators.</p>
              <ul class="list text-primary text-[1.25rem] font-medium leading-7">
                <li>Completely customizable, self-designed plugins for specific needs</li>
                <li>Automated reports monthly based</li>
                <li>Track every unit from distance to fuel usage</li>
                <li>Evaluate driving pattern</li>
              </ul>
            </div>
          </div>
          <div class="gradient-block wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <h4 class="title text-2xl font-bold">State-of-the-art technology</h4>
            <p class="text-xl font-medium">From our access to energy data and payment behaviour, we
              provide the best products to our customers.
            </p>
          </div>
        </div>
        <div class="image-container wow animate__animated animate__fadeInRight" data-wow-duration="1s">
          <img src="@/assets/img/dashboard_deb.png" alt="Software Automation">
        </div>
      </div>
      <div class="flex flex-col gap-12 py-8">
        <div v-for="(item, index) in contentItems" :key="index" :class="{
          'flex-row': index % 2 === 0,
          'flex-row-reverse': index % 2 !== 0,
        }" class="flex items-center gap-8 w-full max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
          <div class="w-1/2 flex-shrink-0">
            <img :src="item.image" :alt="item.title" class="w-full h-64 object-contain rounded-lg" />
          </div>

          <div class="w-1/2 p-4">
            <h2 class="text-3xl font-bold mb-4 text-gray-800">{{ item.title }}</h2>
            <p class="text-gray-600 leading-relaxed text-lg">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// 导入你的图片
import image1 from '@/assets/img/db_GPS.png';
import image2 from '@/assets/img/db_saved.png';
import image3 from '@/assets/img/db_metrics.png';
import image4 from '@/assets/img/dashboard_deb.png';

const contentItems = ref([
  {
    image: image1,
    title: 'GPS location anytime',
    description: 'GPS location are recorded and visualized on dashboard with different colors for different trips',
  },
  {
    image: image2,
    title: 'How much have we saved?',
    description: 'Monitoring of mileage and CO2 emissions saved through regular automated reports',
  },
  {
    image: image3,
    title: 'Multiple metrics',
    description: 'State of charge, state of health, Speed, Range, distance and track, battery temperature and more',
  },
  {
    image: image4,
    title: 'Customizable',
    description: 'Completely customizable towards the need of B2B clients and fleet managers',
  },
]);

</script>

<style scoped lang="scss">
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
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8.5px;
      width: 10px;
      height: 10px;
      background-color: var(--color-secondary-dark);
      border-radius: 50%;
    }

    margin-bottom: 6px;
    padding-left: 24px;
  }
}


.image-container {

  img {
    height: 50vh;
  }
}
</style>
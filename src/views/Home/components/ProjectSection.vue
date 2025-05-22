<template>
  <section id="project" class="project-section">
    <div class="container">
      <div class="project-container">
        <div class="project-heading wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="title text-primary text-7xl font-bold">Our E-Mobility, solar system and engineering
          </h2>
        </div>
        <div class="project-content-container">
          <div class="project-content wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <p class="text-primary text-3xl font-medium">Show display several pictures, seems not yet provided.</p>
          </div>
          <div class="image-container wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SoftwareSection from './SoftwareSection.vue';

</script>

<style scoped lang="scss">
.project-section {
  background-color: #ffffff;
}

.project-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

.project-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.project-content-container {
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

.project-content {
  width: 630px;
  max-width: 32vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
}
</style>
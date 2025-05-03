<template>
  <section id="greenfact" class="greenfact-section">
    <div class="container">
      <div class="greenfact-container">
        <div class="greenfact-heading wow animate__animated animate__fadeInUp" 
        data-wow-delay="0.5s"
        data-wow-offset="0.1"
        data-wow-duration="1s"
        >
          <p class="title text-white text-[3.25rem] font-bold text-center leading-14">We partner with local distributors,
            corporates, and
            investors to scale projects that remove emissions and transform communities.</p>
        </div>
        <div class="title numbers-container wow animate__animated animate__fadeInUp" 
        data-wow-delay="1s"
        data-wow-offset="0.1"
        data-wow-duration="1s">
          <div class="number-item">
            <span class="text-white text-5xl font-bold text-center">15,000</span>
            <span class="text-white text-2xl font-medium text-center">tCO2e reduced</span>
          </div>
          <div class="number-item">
            <span class="text-white text-5xl font-bold text-center">60,000</span>
            <span class="text-white text-2xl font-medium text-center">People benefitting from clean power</span>
          </div>
          <div class="number-item">
            <span class="text-white text-5xl font-bold text-center">6,000</span>
            <span class="text-white text-2xl font-medium text-center">End-users with consumer finance solution</span>
          </div>
          <div class="number-item">
            <span class="text-white text-5xl font-bold text-center">3,600</span>
            <span class="text-white text-2xl font-medium text-center">MWh produced</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.greenfact-section {
  background-image: url('@/assets/img/green-fact.jpeg');
  background-size: cover;
  background-position: 50%;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.greenfact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 140px;
}

.greenfact-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
}

.numbers-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 50px;
  gap: 150px;

  .number-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

}
</style>
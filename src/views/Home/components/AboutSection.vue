<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-container">
        <div class="about-image-holder wow animate__animated animate__fadeInLeft" data-wow-duration="1s">
          <img src="@/assets/img/beautiful_bike.jpeg" alt="">
        </div>
        <div class="about-heading wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <!-- <div class="dot-row">
            <div class="dot-blue"></div>
            <div class="dot-gold"></div>
          </div> -->
          <h2 class="text-primary text-7xl font-bold title">Sustainability Community Innovation</h2>
          <p class="text-primary text-3xl">
            E-Ride Africa is on a mission to transform transport in Zambia and beyond. Our team develops electric
            motorcycles, battery systems and monitoring tools - in our offices we handle battery assembly, 3D printing,
            CNC cutting, welding - so you get locally built, affordable electric vehicles.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.about-section {
  background-color: var(--color-light-bg);
}

.about-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 70px;
}


.about-heading {
  width: 890px;
  max-width: 55vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
}

.dot-row {
  display: flex;
  flex-direction: row;
  gap: 8px;

  .dot-blue {
    width: 18px;
    height: 18px;
    background-color: var(--color-primary);
    border-radius: 50px;
  }

  .dot-gold {
    width: 18px;
    height: 18px;
    background-color: var(--color-secondary);
    border-radius: 50px;
  }

}

.about-image-holder {
  width: 478px;
  max-width: 38vw;

  img {
    width: 100%;
  }
}
</style>
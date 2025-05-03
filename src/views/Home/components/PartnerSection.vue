<template>
  <section id="partner" class="partner-section">
    <div class="container">
      <div class="partner-container">
        <div class="location-heading wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="text-primary text-7xl font-bold">Our Partners</h2>
        </div>
        <div class="partner-holder wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <img src="@/assets/img/partners.jpg" alt="Partners" />
        </div>

        <a href="mailto:info@mpower.africa?subject=Partnerships" class="btn-primary wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <span>BECOME A PARTNER</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.partner-section {
  background-color: #ffffff;
  padding: 100px 0;
}

.partner-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.partner-heading {
  text-align: center;
}

.partner-holder {
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.btn-primary {
  width: 300px;
}
</style>
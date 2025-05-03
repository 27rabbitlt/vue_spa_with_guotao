<template>
  <section id="finance" class="finance-section">
    <div class="container">
      <div class="finance-container">
        <div class="gradient-block wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="title text-primary text-7xl font-bold">Finance that just works.</h2>
          <p class="text-3xl font-medium">We offer financing solutions for both our partners and their end-users. By
            offering ease of access to our smart financing plans, we ensure nobody is left behind.</p>
        </div>
        <div class="content-container">
          <div class="content-item wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <h3 class="title text-primary text-2xl font-bold">For B2B Partners</h3>
            <p class="text-primary text-2xl font-medium">We facilitate local last-mile distribution and deployment of
              small and
              medium-scale energy infrastructure through inventory financing.</p>
          </div>
          <div class="content-item wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <h3 class="title text-primary text-2xl font-bold">For End Consumers</h3>
            <p class="text-primary text-2xl font-medium">We provide financing solutions that enable qualified end
              consumers to access
              products affordably using credit. Through direct consumer financing on a lease-to-own basis.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.finance-section {
  background-color: #ffffff;
}

.finance-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 100px;
  gap: 80px;
}

.gradient-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 60px 40px;

  h2 {
    width: 50%;
  }

  p {
    flex: 1;
  }
}

.content-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 80px;
  width: 100%;
  margin: 0 auto;

  .content-item {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
  }
}
</style>
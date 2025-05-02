<template>
  <section id="project" class="project-section">
    <div class="container">
      <div class="project-container">
        <div class="project-heading">
          <h2 class="text-primary text-7xl font-bold">Our Impact</h2>
        </div>
        <div class="project-content-container">
          <div class="project-content">
            <p class="text-primary text-3xl font-medium">Check out different projects implemented in all our countries
              in Africa.</p>
            <a href="https://cdn.prod.website-files.com/62a6db73ebc0ae41fe521319/67ced6586e3525e4c8a2f6b9_2025-FEB_Project%20references_REDUCED%20VERSION_10-03-2025.pdf"
              class="btn-primary">
              <span>PROJECT REFERENCES</span>
            </a>
          </div>
          <div class="image-container">
            <img class="rounded-3xl" src="@/assets/img/impact.jpg" alt="Impact Image">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
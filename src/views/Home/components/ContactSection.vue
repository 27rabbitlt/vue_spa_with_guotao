<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-container">
        <div class="contact-heading wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <div class="dot-row">
            <div class="dot-blue"></div>
            <div class="dot-gold"></div>
          </div>
          <h2 class="text-primary text-8xl font-bold">Change lives using the power of solar.</h2>
        </div>
        <div class="contact-row-holder">
          <div class="contact-row wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <div class="cta-row-details">
              <h3 class="text-primary text-3xl font-bold">Corporates & Investors</h3>
              <p class="text-primary text-3xl font-medium">Interested in partnering to tackle climate problems?</p>
            </div>

            <a href="mailto:info@mpower.africa?subject=Let's%20talk%20business" class="btn-primary">
              <span>Let's talk business</span>
            </a>
          </div>


          <div class="contact-row wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <div class="cta-row-details">
              <h3 class="text-primary text-3xl font-bold">Impact Job Seekers</h3>
              <p class="text-primary text-3xl font-medium">Looking for a role at MPower?</p>
            </div>
            <a href="https://www.linkedin.com/company/mpowerventures/jobs/?viewAsMember=true" class="btn-primary" target="_blank" rel="noopener noreferrer">
              <span>Open vacancies</span>
            </a>
          </div>


          <div class="contact-row wow animate__animated animate__fadeInUp" data-wow-duration="1s">
            <div class="cta-row-details">
              <h3 class="text-primary text-3xl font-bold">Say Hi!</h3>
              <p class="text-primary text-3xl font-medium">We are always interested in exciting dossiers and
                personalities.</p>
            </div>
            <a href="mailto:info@mpower.africa?subject=Say%20Hi!" class="btn-primary">
              <span>Send us an email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.contact-section {
  background-color: #fdfaf0;
  padding: 100px 0;
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
}

.contact-heading {
  max-width: 70%;
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

.contact-row-holder {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.contact-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: var(--color-primary);
  }

  &:last-child::after {
    display: none; // 最后一行不需要分割线
  }
}

.cta-row-details {
  max-width: 70%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}


.btn-primary {
  width: 300px;
}
</style>
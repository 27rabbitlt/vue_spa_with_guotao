<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-container">
        <div class="about-image-holder wow " data-wow-duration="1s">
          <img :src="aboutPhoto" alt="">
        </div>
        <div class="about-heading wow " data-wow-duration="1s">
          <!-- <div class="dot-row">
            <div class="dot-blue"></div>
            <div class="dot-gold"></div>
          </div> -->
          <!-- <h2 class="text-primary text-7xl font-bold title">Sustainability Community Innovation</h2> -->
          <p class="text-primary text-3xl">
            E-Ride is on a mission to transform transport in Zambia and beyond.</p>
          <p class="text-primary text-3xl">We deliver affordable, reliable
            electric mobility solutions, that aim to reduce cost and cut carbon</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutPhoto from "@/assets/img/home-bg.jpg"
</script>

<style scoped lang="scss">
.about-section {
  background-color: var(--color-light-bg);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 0;
}

.about-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 70px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-heading {
  width: 890px;
  max-width: 45vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    text-align: center;
    align-items: center;
  }
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
  width: 100%;
  max-width: 50vw;
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    order: -1;
    margin-bottom: 30px;
  }

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  //   // border-radius: 20px;
  //   // filter: blur(20px);
  //   z-index: -1;
  // }

  img {
    width: 100%;
    height: 70vh;
    min-height: 400px;
    max-height: 600px;
    object-fit: cover;
    // border-radius: 15px;
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.15),
      0 0 80px rgba(0, 0, 0, 0.08) inset,
      0 0 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    // filter: brightness(1.02) contrast(1.05);
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      height: 300px;
      min-height: 300px;
      max-height: 300px;
    }
  }

  &:hover img {
    transform: translateY(-5px);
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.2),
      0 0 100px rgba(0, 0, 0, 0.1) inset,
      0 0 0 1px rgba(255, 255, 255, 0.15);
  }
}

// 响应式设计
@media (max-width: 1024px) {
  .about-container {
    gap: 40px;
  }

  .about-heading {
    max-width: 50vw;
  }

  .about-image-holder {
    max-width: 45vw;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 40px 0;
    min-height: auto;
  }

  .about-container {
    flex-direction: column;
    gap: 30px;
    padding: 0 15px;
  }

  .about-heading {
    max-width: 100%;
    
    p {
      font-size: 1.5rem !important;
    }
  }

  .about-image-holder {
    max-width: 100%;
    padding: 10px;
  }
}
</style>
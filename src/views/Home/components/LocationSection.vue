<template>
  <section id="location" class="location-section">
    <div class="container">
      <div class="location-container">
        <div class="location-heading wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <h2 class="title text-primary text-7xl font-bold">Our Locations</h2>
        </div>
        <a href="https://www.google.com/maps/d/u/0/edit?mid=1XMACBHUJ-ILJqxo2TDG7q5rZPAtuVCQ&usp=sharing"
          target="_blank" class="map-outer wow animate__animated animate__fadeInUp" data-wow-duration="1s">
          <img src="@/assets/img/map.jpeg" alt="Our Locations" class="map-placeholder" />
          <div class="map-overlay">
            <span class="text-white text-2xl font-normal mr-4">View on Google Maps</span>
            <!-- <img src="@/assets/img/new-window.svg" loading="lazy" alt="" class="new-window-icon" /> -->
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped lang="scss">
.location-section {
  background-color: #ffffff;
  padding: 100px 0;
}

.location-container {
  width: 100%;
  margin: 0 auto;
}

.location-heading {
  text-align: center;
  margin-bottom: 60px;
}

.map-outer {
  position: relative;
  display: block;
  width: 100%;
  border: 2px solid #000000;
  border-radius: 15px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    .map-overlay {
      opacity: 1;
    }
  }
}

.map-placeholder {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.new-window-icon {
  width: 30px;
  height: auto;
}
</style>
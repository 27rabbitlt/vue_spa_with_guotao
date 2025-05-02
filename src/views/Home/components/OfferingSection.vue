<template>
  <section id="offering" class="offering-section">
    <div class="container">
      <div class="offering-container">
        <div class="offering-heading">
          <h2 class="text-primary text-7xl font-bold">Our Offerings</h2>
        </div>
        <div class="offering-content-container">
          <div class="offering-content">
            <h3 class="text-primary text-3xl font-bold">Solar Products</h3>
            <p class="text-primary text-3xl font-medium">We offer a wide range of high-quality Plug & Play solar devices
              as well as energy-efficient household and
              income-generating appliances for lower-and middle-income households, SMEs, and farmers in peri-urban and
              rural areas.</p>
            <button class="product-portfolio-btn">
              <span>PRODUCT PORTFOLIO</span>
            </button>
          </div>
          <div class="offering-items-grid">
            <OfferingItem title="GRID / OFFGRID SOLAR SYSTEM" img="src/assets/img/offering-item-solar-system.jpg" />
            <OfferingItem title="INDOOR/ouTDOOR LIGHTING" img="src/assets/img/offering-item-lighting.jpg" />
            <OfferingItem title="Productive USE appliances" img="src/assets/img/offering-item-appliance.jpg" />
            <OfferingItem title="E-MOBILITY" img="src/assets/img/offering-item-e-mobility.jpg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import OfferingItem from './OfferingItem.vue'
</script>

<style scoped lang="scss">
.offering-section {
  background-color: #ffffff;
}

.offering-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

.offering-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.offering-content-container {
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

.offering-content {
  width: 630px;
  max-width: 32vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0;
}

.offering-items-grid {
  flex: 1;
  min-width: 0;
  display: grid;
  grid-column-gap: 14px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 10px;
}

.product-portfolio-btn {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  span {
    position: relative;
    z-index: 1;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color: #294e86; // 更亮的primary颜色
    transition: width 0.3s ease;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    &::before {
      width: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
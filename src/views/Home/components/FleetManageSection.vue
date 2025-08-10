<template>
  <section id="fleet" class="fleet-manage-section">
    <div class="container">
      <div class="fleet-manage-container">
        <!-- 标题 -->
        <div class="fleet-manage-heading">
          <h2 class="title">Fleet and IoT Management</h2>
          <!-- <p class="subtitle">Live monitoring and optimization for your fleet operations</p> -->
        </div>

        <!-- 上方：LusakaPath 组件 -->
        <div class="lusaka-path-container">
          <div class="path-wrapper">
            <div class="path-section">
              <LusakaPath />
            </div>
            
            <!-- 车辆数据表格 -->
            <div class="vehicle-metrics-container">
              <h3 class="metrics-title">Vehicle Performance Metrics</h3>
              <div class="metrics-table">
                <div class="table-header">
                  <div class="header-cell">Metric</div>
                  <div class="header-cell">🟢</div>
                  <div class="header-cell">🔵</div>
                  <div class="header-cell">🟣</div>
                </div>
                <div class="table-row">
                  <div class="metric-label">Velocity (km/h)</div>
                  <div class="metric-value">{{ formatNumber(vehicle1.velocity) }}</div>
                  <div class="metric-value">{{ formatNumber(vehicle2.velocity) }}</div>
                  <div class="metric-value">{{ formatNumber(vehicle3.velocity) }}</div>
                </div>
                <div class="table-row">
                  <div class="metric-label">Acceleration (m/s²)</div>
                  <div class="metric-value">{{ formatNumber(vehicle1.acceleration) }}</div>
                  <div class="metric-value">{{ formatNumber(vehicle2.acceleration) }}</div>
                  <div class="metric-value">{{ formatNumber(vehicle3.acceleration) }}</div>
                </div>
                <div class="table-row">
                  <div class="metric-label">Battery Level (%)</div>
                  <div class="metric-value">{{ formatNumber(vehicle1.battery) }}%</div>
                  <div class="metric-value">{{ formatNumber(vehicle2.battery) }}%</div>
                  <div class="metric-value">{{ formatNumber(vehicle3.battery) }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 下方：实时数据展示 -->
        <div class="real-time-data-container">
          <div class="data-grid">
            <div class="data-card">
              <div class="data-icon">🚗</div>
              <div class="data-value">{{ formatNumber(distanceTraveled) }}</div>
              <div class="data-label">Distance Traveled (km)</div>
            </div>
            <div class="data-card">
              <div class="data-icon">⛽</div>
              <div class="data-value">{{ formatNumber(fuelSaved) }}</div>
              <div class="data-label">Fuel Saved (L)</div>
            </div>
            <div class="data-card">
              <div class="data-icon">🌱</div>
              <div class="data-value">{{ formatNumber(co2Saved) }}</div>
              <div class="data-label">CO₂ Saved (kg)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LusakaPath from './LusakaPathSection.vue'

// 实时数据
const distanceTraveled = ref(0)
const fuelSaved = ref(0)
const co2Saved = ref(0)

// 车辆数据
const vehicle1 = ref({
  velocity: 45,
  acceleration: 2.1,
  battery: 78
})

const vehicle2 = ref({
  velocity: 52,
  acceleration: 1.8,
  battery: 65
})

const vehicle3 = ref({
  velocity: 38,
  acceleration: 2.5,
  battery: 89
})

// 数据更新定时器
let dataTimer = null

// 格式化数字
const formatNumber = (num) => {
  return num.toFixed(1)
}

// 模拟实时数据更新
const updateData = () => {
  // 距离增加
  distanceTraveled.value += Math.random() * 0.5
  
  // 燃油节省增加
  fuelSaved.value += Math.random() * 0.1
  
  // CO2节省增加
  co2Saved.value += Math.random() * 0.2
  
  // 更新车辆数据
  vehicle1.value.velocity = Math.max(30, Math.min(60, vehicle1.value.velocity + (Math.random() - 0.5) * 2))
  vehicle1.value.acceleration = Math.max(0.5, Math.min(3.5, vehicle1.value.acceleration + (Math.random() - 0.5) * 0.3))
  vehicle1.value.battery = Math.max(20, Math.min(100, vehicle1.value.battery - Math.random() * 0.1))
  
  vehicle2.value.velocity = Math.max(30, Math.min(60, vehicle2.value.velocity + (Math.random() - 0.5) * 2))
  vehicle2.value.acceleration = Math.max(0.5, Math.min(3.5, vehicle2.value.acceleration + (Math.random() - 0.5) * 0.3))
  vehicle2.value.battery = Math.max(20, Math.min(100, vehicle2.value.battery - Math.random() * 0.1))
  
  vehicle3.value.velocity = Math.max(30, Math.min(60, vehicle3.value.velocity + (Math.random() - 0.5) * 2))
  vehicle3.value.acceleration = Math.max(0.5, Math.min(3.5, vehicle3.value.acceleration + (Math.random() - 0.5) * 0.3))
  vehicle3.value.battery = Math.max(20, Math.min(100, vehicle3.value.battery - Math.random() * 0.1))
}

onMounted(() => {
  // 启动数据更新定时器
  dataTimer = setInterval(updateData, 1000) // 每秒更新一次
})

onBeforeUnmount(() => {
  if (dataTimer) {
    clearInterval(dataTimer)
  }
})
</script>

<style scoped>
.fleet-manage-section {
  background-color: #f8fafc;
  padding: 60px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.fleet-manage-container {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.fleet-manage-heading {
  text-align: center;
}

.fleet-manage-heading .title {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3a68;
  margin-bottom: 16px;
}

.fleet-manage-heading .subtitle {
  font-size: 1.25rem;
  color: #64748b;
}

.lusaka-path-container {
  text-align: center;
}

.lusaka-path-container .path-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 24px;
}

.path-wrapper {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.path-section {
  flex: 1;
}

.vehicle-metrics-container {
  flex: 1;
  text-align: center;
}

.metrics-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
}

.metrics-table {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: 0 auto;
}

.table-header {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  background: #2c3a68;
  color: white;
}

.header-cell {
  padding: 10px 8px;
  text-align: center;
  font-weight: 600;
  font-size: 0.8rem;
}

.table-row {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  border-bottom: 1px solid #e2e8f0;
}

.table-row:last-child {
  border-bottom: none;
}

.metric-label {
  padding: 10px 8px;
  background: #f8fafc;
  font-weight: 600;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.metric-value {
  padding: 10px 8px;
  text-align: center;
  font-weight: 500;
  color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  min-height: 40px;
}

.real-time-data-container .data-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.data-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.data-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.data-value {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3a68;
  margin-bottom: 8px;
}

.data-label {
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .fleet-manage-heading .title {
    font-size: 2rem;
  }

  .path-wrapper {
    flex-direction: column;
    gap: 20px;
  }

  .real-time-data-container .data-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .metrics-table .table-header,
  .metrics-table .table-row {
    grid-template-columns: 1fr;
  }

  .metrics-table .table-header {
    display: none;
  }

  .metrics-table .table-row {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 12px;
  }

  .metrics-table .metric-label {
    background: #2c3a68;
    color: white;
    border-radius: 8px 8px 0 0;
    margin: -12px -12px 12px -12px;
  }
}
</style>

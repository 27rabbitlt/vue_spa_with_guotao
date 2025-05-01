<template>
  <section id="home" class="home-section">
    <div class="hero-content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <button @click="onLearnMore">了解更多</button>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '欢迎来到我们的网站'
  },
  description: {
    type: String,
    default: '我们提供专业的解决方案和服务'
  }
})

const emit = defineEmits(['learn-more'])

const onLearnMore = () => {
  emit('learn-more')
}
</script>

<style scoped>
.home-section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero-content {
  text-align: center;
  width: 100%;
  padding: 2rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}

button {
  padding: 0.8rem 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3aa876;
}
</style>
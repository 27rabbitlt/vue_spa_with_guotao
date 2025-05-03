<template>
  <div class="offering-item wow animate__animated animate__fadeInUp" data-wow-duration="1s">
    <h3 class="title item-title text-primary text-lg">{{ title }}</h3>
    <div class="image-container">
      <img :src="img" :alt="title" class="item-image">
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.offering-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
}

.image-container {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
  }
}
</style>

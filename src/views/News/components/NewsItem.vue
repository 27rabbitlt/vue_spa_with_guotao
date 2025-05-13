<template>
  <div class="news-item" @click="handleClick">
    <div class="cover-image">
      <img :src="news.coverImage" fit="cover" />
    </div>
    <div class="content">
      <h3 class="text-primary text-lg font-bold title">{{ news.title }}</h3>
      <div class="text-gray-500 text-sm">{{ formatDate(news.publishDate) }}</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  news: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const handleClick = () => {
  router.push(`/news/${props.news.id}`)
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString({
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped lang="scss">
.news-item {
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s;

  .cover-image {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
}
</style>
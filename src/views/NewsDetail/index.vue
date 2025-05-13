<template>
  <div class="page-container">
    <div class="news-detail">
      <div class="header">
        <h1 class="text-primary text-4xl font-bold title mb-6">{{ newsDetail.title }}</h1>
        <div class="text-gray-500 text-sm mb-8">{{ formatDate(newsDetail.publishDate) }}</div>
      </div>

      <div class="cover-image mb-8">
        <img :src="newsDetail.coverImage" alt="news cover" />
      </div>

      <div class="content leading-relaxed">
        {{ newsDetail.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MockImage from '@/assets/img/offering-item-e-mobility.jpg'

const route = useRoute()
const newsDetail = ref({
  title: '',
  coverImage: '',
  publishDate: '',
  content: ''
})

// 模拟获取新闻详情数据
const fetchNewsDetail = async () => {
  // 这里替换为实际的API调用
  const mockData = {
    id: route.params.id,
    title: 'Ousted Bangladesh PM Hasina\'s party barred from election as party registration suspended',
    coverImage: MockImage,
    publishDate: new Date().toISOString(),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
  }

  newsDetail.value = mockData
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(() => {
  fetchNewsDetail()
})
</script>

<style scoped lang="scss">
.news-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;

  .cover-image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    font-size: 16px;
    line-height: 1.8;
    white-space: pre-line;
  }
}
</style>

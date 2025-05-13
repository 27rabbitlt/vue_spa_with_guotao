<template>
  <div class="container page-container">
    <div class="news-header">
      <h1 class="text-primary text-5xl font-bold title mb-10">NEWS</h1>
    </div>
    <div class="news-grid">
      <NewsItem v-for="news in newsList" :key="news.id" :news="news" />
    </div>
    <div class="pagination">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :total="total"
        :page-sizes="[15, 30, 45, 60]" layout="total, prev, pager, next" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NewsItem from './components/NewsItem.vue'
import MockImage from '@/assets/img/offering-item-e-mobility.jpg'

const newsList = ref([])
const currentPage = ref(1)
const pageSize = ref(15)
const total = ref(20)

// 模拟获取新闻数据
const fetchNews = async () => {
  // 这里替换为实际的API调用
  const mockData = Array.from({ length: 45 }, (_, index) => ({
    id: index + 1,
    title: `Ousted Bangladesh PM Hasina’s party barred from election as party registration suspended`,
    coverImage: MockImage,
    publishDate: new Date(Date.now() - index * 86400000).toISOString()
  }))

  total.value = mockData.length
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  newsList.value = mockData.slice(start, end)
}

const handleSizeChange = (val) => {
  pageSize.value = val
  fetchNews()
}

const handleCurrentChange = (val) => {
  currentPage.value = val
  fetchNews()
}

onMounted(() => {
  fetchNews()
})
</script>

<style scoped lang="scss">
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
</style>

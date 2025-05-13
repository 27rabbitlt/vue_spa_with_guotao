<template>
  <div class="main-container">
    <div class="main-title text-xl font-bold">
      <span>News Management</span>
    </div>
    <div class="actions">
      <el-button type="primary" @click="handleAdd">Add News</el-button>

      <div class="navbar-search">
        <el-input v-model="searchInput" style="width: 240px" placeholder="Search" :prefix-icon="Search"
          @keyup.enter="handleSearch" />
      </div>
    </div>

    <div class="table-container">
      <el-table :data="newsData.records" table-layout="auto" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="title" label="Title" width="200">
          <template #default="scope">
            <div class="title-cell">{{ scope.row.title }}</div>
          </template>
        </el-table-column>
        <el-table-column label="Details" width="100">
          <template #default="scope">
            <el-button link type="primary" @click="handlePreview(scope.row.content)">Details</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="publishTime" label="Publish Time" width="180" />
        <el-table-column prop="updateTime" label="Update Time" width="180" />
        <el-table-column fixed="right" label="Actions" width="150">
          <template #default="scope">
            <el-button link type="primary" size="default" @click="handleEdit(scope.row)">
              Edit
            </el-button>
            <el-button link type="danger" size="default" @click="handleDelete(scope.row.id)">
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-pagination v-if="newsData.records && newsData.records.length" v-model:current-page="currentPage"
      v-model:page-size="pageSize" :page-sizes="[10, 20, 50]" layout="total, sizes, prev, pager, next, jumper"
      :total="newsData.total" @size-change="getNews" @current-change="getNews" class="pagination" />

    <!-- Preview Dialog -->
    <el-dialog v-model="openPreviewDialog" title="News Details" width="800">
      <span v-dompurify-html="previewContent"></span>
    </el-dialog>

    <!-- Delete Dialog -->
    <el-dialog v-model="openDeleteDialog" title="Delete News" width="400" :lock-scroll="false">
      <el-input type="textarea" :rows="2" v-model="processForm.remark" placeholder="Please input delete reason"
        clearable />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="openDeleteDialog = false">Cancel</el-button>
          <el-button type="primary" @click="confirmDelete">Confirm</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import DOMPurify from 'dompurify'
import truncate from 'html-truncate'
import { useRouter } from 'vue-router'

// State
const loading = ref(false)
const currentPage = ref(1)
const pageSize = ref(20)
const newsData = ref({})
const openPreviewDialog = ref(false)
const openDeleteDialog = ref(false)
const previewContent = ref('')
const searchInput = ref('')
const router = useRouter()

// Process form
const processForm = ref({
  newsId: '',
  remark: ''
})

// Mock data
const mockNewsData = {
  records: [
    {
      id: 1,
      title: 'Breaking News: Major Update',
      content: '<p>This is a sample news content with <strong>rich text</strong> formatting.</p>',
      publishTime: '2024-01-01 10:00:00',
      updateTime: '2024-01-01 10:00:00'
    },
    {
      id: 2,
      title: 'New Feature Release',
      content: '<p>Another sample news with <em>different</em> formatting.</p>',
      publishTime: '2024-01-02 15:30:00',
      updateTime: '2024-01-02 15:30:00'
    }
  ],
  total: 2
}

// Methods
const handleSearch = () => {
  // TODO: Implement search functionality
  console.log('Search:', searchInput.value)
  getNews()
}

const handleAdd = () => {
  // TODO: Implement add functionality
  console.log('Add news')
  router.push('/admin/news/add')
}

const getNews = async () => {
  // TODO: Implement API call
  loading.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    newsData.value = mockNewsData
  } catch (error) {
    ElMessage.error('Failed to fetch news')
    console.error(error)
  } finally {
    loading.value = false
  }
}

// Extract plain text from HTML
function extractPlainText(html) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}

const handlePreview = (content) => {
  previewContent.value = content
  openPreviewDialog.value = true
}

const handleEdit = (row) => {
  router.push(`/admin/news/edit/${row.id}`)
}

const handleDelete = (id) => {
  processForm.value.newsId = id
  openDeleteDialog.value = true
}

const confirmDelete = async () => {
  try {
    if (processForm.value.remark === '') {
      ElMessage.error('Delete reason cannot be empty')
      return
    }

    // TODO: Implement delete API call
    await new Promise(resolve => setTimeout(resolve, 500))

    ElMessage.success('News deleted successfully')
    openDeleteDialog.value = false
    await getNews()
  } catch (error) {
    ElMessage.error('Failed to delete news')
    console.error(error)
  }
}

onMounted(() => {
  getNews()
})
</script>

<style scoped lang="scss">
.main-container {
  .main-title {
    margin-bottom: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid #dcdfe6;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }

  .table-container {
    min-height: 60vh;
  }

  .pagination {
    margin: 10px auto;
  }

  .title-cell {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
    max-height: 2.4em;
  }
}
</style>
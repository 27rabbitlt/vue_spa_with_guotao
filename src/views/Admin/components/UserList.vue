<template>
  <div class="main-container">
    <div class="main-title text-xl font-bold">
      <span>User Management</span>
    </div>
    <div class="actions">
      <el-button type="primary" @click="handleAdd">Add User</el-button>

      <div class="navbar-search">
        <el-input v-model="searchInput" style="width: 240px" placeholder="Search" :prefix-icon="Search"
          @keyup.enter="handleSearch" />
      </div>
    </div>
    <div class="table-container">

      <el-table :data="userList" style="width: 100%; margin-top: 20px;" v-loading="loading">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="username" label="Username" width="120" />
        <el-table-column prop="email" label="Email" width="200" />
        <el-table-column prop="phone" label="Phone" width="150" />
        <el-table-column prop="createTime" label="Registration Time" width="180" />
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
    <el-pagination v-if="userList.length" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50]" layout="total, prev, pager, next" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" class="pagination" />

    <!-- Add/Edit User Dialog -->
    <el-dialog v-model="dialogVisible" :title="isEdit ? 'Edit User' : 'Add User'" width="500" :lock-scroll="false">
      <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
        <el-form-item label="Username" prop="username">
          <el-input v-model="formData.username" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="formData.email" />
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input v-model="formData.phone" />
        </el-form-item>
        <el-form-item v-if="!isEdit" label="Password" prop="password">
          <el-input v-model="formData.password" type="password" show-password />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleSubmit">Confirm</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

// State
const loading = ref(false)
const dialogVisible = ref(false)
const isEdit = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)
const searchInput = ref('')
const formRef = ref(null)

// Mock data
const userList = ref([
  {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    phone: '13800138000',
    createTime: '2024-01-01 10:00:00'
  },
  {
    id: 2,
    username: 'jane_smith',
    email: 'jane@example.com',
    phone: '13900139000',
    createTime: '2024-01-02 11:00:00'
  }
])

// Form data
const formData = ref({
  username: '',
  email: '',
  phone: '',
  password: ''
})

// Form validation rules
const rules = {
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please input email', trigger: 'blur' },
    { type: 'email', message: 'Please input correct email address', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: 'Please input phone number', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: 'Please input correct phone number', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 6, message: 'Password length should be at least 6 characters', trigger: 'blur' }
  ]
}

// Methods
const handleSearch = () => {
  // TODO: Implement search functionality
  console.log('Search:', searchInput.value)
}

const handleTest = () => {
  ElMessageBox.alert('Test', 'Warning', {
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })
}

const handleAdd = () => {
  isEdit.value = false
  formData.value = {
    username: '',
    email: '',
    phone: '',
    password: ''
  }
  dialogVisible.value = true
}

const handleEdit = (row) => {
  isEdit.value = true
  formData.value = { ...row }
  dialogVisible.value = true
}

const handleDelete = (id) => {
  ElMessageBox.confirm('Are you sure you want to delete this user?', 'Warning', {
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    type: 'warning'
  }).then(() => {
    // TODO: Implement delete functionality
    ElMessage.success('Delete successful')
  })
}

const handleSubmit = async () => {
  if (!formRef.value) return

  await formRef.value.validate((valid) => {
    if (valid) {
      // TODO: Implement add/edit functionality
      ElMessage.success(isEdit.value ? 'Update successful' : 'Add successful')
      dialogVisible.value = false
    }
  })
}

const handleSizeChange = (val) => {
  pageSize.value = val
  // TODO: Implement pagination
}

const handleCurrentChange = (val) => {
  currentPage.value = val
  // TODO: Implement pagination
}

onMounted(() => {
  // TODO: Implement initial data loading
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
    margin-top: 20px;
  }
}



.table-container {
  min-height: 60vh;
}
</style>
<template>
  <div class="page-container">
    <el-container style="padding: 0;">
      <el-aside width="200px" class="scrollable-aside">
        <el-menu @select="handleSelect" :default-active="activeMenu">
          <el-sub-menu index="1">
            <template #title>User Management</template>
            <el-menu-item index="/admin/users">User List</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>News Management</template>
            <el-menu-item index="/admin/news">News List</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()
const route = useRoute()
const activeMenu = computed(() => route.path)

const handleSelect = (key) => {
  router.push(key)
}

const getOverview = async () => {
  console.log('网站数据')
}

onMounted(() => {
  getOverview()
})
</script>

<style scoped lang="scss">
.page-container {
  margin: 0 auto;
  margin-top: 20px;
  max-width: 1440px;
}

.container {
  margin-top: 20px;

  .el-main {
    padding: 0 20px;
  }

  .scrollable-aside {
    background: white;
    min-height: 70vh;
    border-radius: 10px;
    overflow-y: auto;
    --el-menu-item-font-size: 16px;
    border-right: 1px solid #dcdfe6;
  }


}
</style>
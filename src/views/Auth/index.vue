<template>
  <div class="container page-container">
    <div class="login-box">
      <div class="login-title">
        <h2 class="text-primary text-4xl font-bold title">Sign In</h2>
      </div>

      <el-form :model="loginForm" :rules="rules" ref="loginFormRef" class="form w-full" size="large">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="Username" size="large" />
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="Password" show-password size="large" />
        </el-form-item>
      </el-form>

      <button class="btn-primary" @click="handleLogin">
        <span>Sign In</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const loginFormRef = ref(null)
const loginForm = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: 'Please enter username', trigger: 'blur' },
    { min: 3, max: 20, message: 'Length should be 3 to 20 characters', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please enter password', trigger: 'blur' },
    { min: 6, max: 20, message: 'Length should be 6 to 20 characters', trigger: 'blur' }
  ]
}

const handleLogin = async () => {
  if (!loginFormRef.value) return

  await loginFormRef.value.validate((valid) => {
    if (valid) {
      // TODO: 实现登录逻辑
      console.log('登录表单提交', loginForm)
    }
  })
}
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.login-box {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-title {
  border-bottom: 1px solid var(--color-secondary-dark);
  padding-bottom: 20px;
  margin-bottom: 30px;
  width: 100%;
  text-align: center
}

.btn-primary {
  font-size: 14px;
  padding: 8px 16px;
  margin-top: 10px;
}
</style>

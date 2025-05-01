<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">联系我们</h2>
    <div class="contact-container">
      <div class="contact-info">
        <div class="info-item">
          <i class="icon">📧</i>
          <span>Email: contact@example.com</span>
        </div>
        <div class="info-item">
          <i class="icon">📱</i>
          <span>电话: 123-456-7890</span>
        </div>
        <div class="info-item">
          <i class="icon">🏢</i>
          <span>地址: 北京市朝阳区科技园A座1001</span>
        </div>
      </div>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        <div class="form-group">
          <label for="email">邮箱</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <div class="form-group">
          <label for="message">留言</label>
          <textarea id="message" v-model="form.message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-btn">发送消息</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  alert(`感谢您的留言，${form.value.name}！我们会尽快回复您。`)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact-section {
  width: 100%;
  padding: 4rem 2rem;
  background-color: #f5f7fa;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  color: #333;
  width: 100%;
}

.contact-container {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: #555;
}

.icon {
  font-size: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
  color: #444;
}

input,
textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}

textarea {
  resize: vertical;
}

.submit-btn {
  padding: 0.8rem 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  align-self: flex-start;
}

.submit-btn:hover {
  background-color: #3aa876;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>
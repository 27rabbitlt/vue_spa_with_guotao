<template>
  <section id="team" class="team-section">
    <h2 class="section-title">我们的团队</h2>
    <div class="team-grid">
      <div v-for="member in teamMembers" :key="member.id" class="team-member">
        <img :src="member.avatar" :alt="member.name" class="member-avatar">
        <h3>{{ member.name }}</h3>
        <p class="position">{{ member.position }}</p>
        <p class="bio">{{ member.bio }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const teamMembers = ref([
  {
    id: 1,
    name: '张三',
    position: 'CEO/创始人',
    bio: '拥有10年行业经验，带领团队不断创新',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: '李四',
    position: '技术总监',
    bio: '全栈开发专家，负责技术架构和团队管理',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: '王五',
    position: '产品经理',
    bio: '用户体验专家，负责产品规划和设计',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
  }
])
</script>

<style scoped>
.team-section {
  width: 100%;
  padding: 4rem 2rem;
  background-color: #fff;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.2rem;
  color: #333;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
}

.team-member {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.member-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #42b983;
}

.team-member h3 {
  margin: 0.5rem 0;
  color: #333;
}

.position {
  color: #42b983;
  font-weight: bold;
  margin-bottom: 1rem;
}

.bio {
  color: #666;
  line-height: 1.6;
}
</style>
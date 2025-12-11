<template>
  <div class="board-member">
    <div class="member-avatar">
      <img :src="avatar" :alt="name" class="avatar-image" />
    </div>
    <div class="member-info">
      <h3 class="member-name text-primary text-xl font-bold">{{ name }}</h3>
      <p class="member-role text-primary text-xl font-medium">{{ role }}</p>
      <a v-if="linkedin" :href="linkedin" target="_blank" class="linkedin-link">
        <img src="@/assets/img/blue-linkedin.svg" alt="LinkedIn" class="linkedin-icon" />
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  avatar: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.board-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 15px;
  background: #ffffff;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 200px;
  max-width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
}

.member-avatar {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 8px;

  .avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
}

.member-info {
  width: 100%;
}

.member-name {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.member-role {
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.875rem;
}

.linkedin-link {
  display: inline-block;
  margin-bottom: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  .linkedin-icon {
    width: 12px;
  }
}
</style>

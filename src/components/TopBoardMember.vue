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
      <p class="member-bio text-primary text-base font-medium">{{ bio }}</p>
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
  },
  bio: {
    type: String,
    required: true
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
  padding: 20px;
  background: #ffffff;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
}

.member-avatar {
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin-bottom: 1.5rem;

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
}

.member-role {
  margin-bottom: 1rem;
  color: #666;
}

.linkedin-link {
  display: inline-block;
  margin-bottom: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  .linkedin-icon {
    width: 15px;
  }
}
</style>

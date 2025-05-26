<template>
  <div class="team-member">
    <div class="member-avatar">
      <img :src="avatar" :alt="name" class="avatar-image" />
    </div>
    <div class="member-info">
      <h3 class="member-name text-primary text-xl font-bold">{{ name }}</h3>
      <p class="member-role text-primary text-xl font-medium">{{ role }}</p>
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
  }
})
</script>

<style scoped lang="scss">
.team-member {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 0;
  padding: 20px;
  background: #ffffff;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 400px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
}

.member-avatar {
  height: 150px;
  width: 150px;
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
</style>

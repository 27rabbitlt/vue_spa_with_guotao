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
}

.member-avatar {
  width: 100%;
  overflow: hidden;

  .avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.member-info {
  width: 100%;
}
</style>

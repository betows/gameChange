<template>
  <v-card class="glass-panel">
    <v-card-title>Perfil</v-card-title>
    <v-card-text>
      <v-avatar size="150" class="mb-3">
        <img :src="user.image" @click="updateProfileImage">
      </v-avatar>
      <div class="mt-3">
        <div class="font-weight-bold">
          {{ user.name }}
        </div>
        <div>{{ user.email }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateProfileImage () {
      // Implement the logic to update the user's profile image
    }
  }
}
</script>

<style scoped>
.v-avatar img {
  cursor: pointer;
}
.glass-panel {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 15px;
}
</style>

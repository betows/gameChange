<template>
  <v-card>
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
</style>

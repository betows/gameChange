<template>
  <v-card class="glass-panel">
    <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between;">
      <v-card-title>Perfil</v-card-title>
        <div style="display: flex; align-items: center;">
          <div :style="index == 0 ? 'padding-left: 200px; gap 12px;' : 'gap: 12px;'" v-for="(badge, index) in badges" :key="index">
            <v-icon class="neon-text" :color="badge.color"> {{ badge.icon }} </v-icon>
          </div>
        </div>
    </div>
    <v-card-text>
      <v-avatar size="126" class="mb-3">
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
    },
    badges: {
      type: Array,
      default: null
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
.neon-text {
  cursor: pointer;

}
.neon-text:hover{
    color: #fff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
}
</style>

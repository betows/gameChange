<template>
  <v-card class="glass-panel">
    <v-card-title>Meus Badges</v-card-title>
    <v-card-text>
      <div style="display: flex; gap: 14px;">
        <div
          v-for="badge in badges"
          :key="badge.id"
          style="width: 208px;"
        >
          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-card class="glass-panel badge-section" v-on="on">
                <v-img :src="badge.img" class="neon-text" large :color="badge.color" />
                <v-card-title class="neon-text">
                  {{ badge.name }}
                </v-card-title>
              </v-card>
            </template>
            <span>{{ badge.description }}</span>
          </v-tooltip>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    badges: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.glass-panel {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 15px;
}
.badge-section {
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.badge-section:hover {
  transform: translateY(-5px);
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

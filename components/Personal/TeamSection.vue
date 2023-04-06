<template>
  <v-card class="glass-panel">
    <v-card-title>Meus times</v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="team in teams"
          :key="team.id"
          xs="12"
          sm="6"
          md="6"
          lg="4"
          class="mb-4"
        >
          <v-card class="glass-panel">
            <v-card-title>{{ team.name }}</v-card-title>
            <v-card-subtitle>{{ team.description }}</v-card-subtitle>
            <v-card-text>
              <div class="font-weight-bold">
                Membros:
              </div>
              <ul>
                <li v-for="member in team.members" :key="member.id">
                  {{ member.name }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    teams: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.glass-panel {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 15px;
}
</style>

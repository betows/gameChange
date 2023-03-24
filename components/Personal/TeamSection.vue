<template>
  <v-card>
    <v-card-title>Meus times</v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="team in teams"
          :key="team.id"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          class="mb-4"
        >
          <v-card>
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
</style>

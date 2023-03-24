<template>
  <v-card>
    <v-card-title>Progresso</v-card-title>
    <v-card-text>
      <h3>Badges</h3>
      <v-row>
        <v-col
          v-for="badge in badges"
          :key="badge.id"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          class="mb-4"
        >
          <v-card>
            <v-img :src="badge.image" height="150px" />
            <v-card-title>{{ badge.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <h3>Card Collection</h3>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.id"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          class="mb-4"
        >
          <v-card>
            <v-img :src="card.image" height="150px" />
            <v-card-title>{{ card.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    badges: {
      type: Array,
      required: true
    },
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

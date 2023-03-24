<template>
  <v-card>
    <v-card-title>My Card Collection</v-card-title>
    <v-card-text>
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
          <v-card class="text-center card-container">
            <v-img :src="card.image" height="200px" class="mx-auto" />
            <v-card-title>{{ card.name }}</v-card-title>
            <v-card-subtitle>{{ card.class }}</v-card-subtitle>
            <v-card-text>
              <div>Power: {{ card.power }}</div>
              <div>Attack: {{ card.attack }}</div>
              <div>Defense: {{ card.defense }}</div>
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
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card-container {
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card-container:hover {
  transform: translateY(-5px);
}
</style>

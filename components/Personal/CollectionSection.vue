<template>
  <v-card class="glass-panel">
    <v-card-title>Meus cards</v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.id"
          xs="12"
          sm="6"
          md="4"
          lg="6"
          class="mb-4"
        >
          <v-tooltip top>
            <template #activator="{ on }">
              <v-card class="text-center card-container" v-on="on">
                <v-img :src="card.image" height="200px" class="mx-auto" />
                <v-card-title>{{ card.name }}</v-card-title>
                <v-card-subtitle style="display: flex;">
                  {{ card.class }}
                  <v-icon style="padding-left: 4px;" :color="card.rarity.color" small>
                    {{ card.rarity.icon }}
                  </v-icon>
                </v-card-subtitle>
                <v-card-text style="display: flex;flex-direction: column;align-items: flex-start;">
                  <span>Power: {{ card.power }}</span>
                  <span>Attack: {{ card.attack }}</span>
                  <span>Defense: {{ card.defense }}</span>
                </v-card-text>
              </v-card>
            </template>
            <span>Obtido em: {{ card.aquired.date }}. {{ card.aquired.detail }}. </span>
          </v-tooltip>
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
.glass-panel {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 15px;
}
</style>

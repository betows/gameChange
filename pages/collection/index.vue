<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>My Card Collection</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.id"
          xs="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card :class="['mb-4', 'card-container']">
            <v-img :src="card.image" height="200px" />
            <v-card-title>{{ card.name }}</v-card-title>
            <v-card-subtitle>{{ card.class }}</v-card-subtitle>
            <v-card-text>
              <div class="attribute">
                <v-icon color="primary" left>
                  mdi-poker-chip
                </v-icon>
                <span title="Power">Power: {{ card.power }}</span>
              </div>
              <div class="attribute">
                <v-icon color="primary" left>
                  mdi-sword
                </v-icon>
                <span title="Attack">Attack: {{ card.attack }}</span>
              </div>
              <div class="attribute">
                <v-icon color="primary" left>
                  mdi-shield
                </v-icon>
                <span title="Defense">Defense: {{ card.defense }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      cards: [
        {
          id: 1,
          name: 'Astronaut',
          class: 'Space Explorer',
          power: 7,
          attack: 4,
          defense: 6,
          image: require('@/assets/astronaut.png')
        },
        {
          id: 2,
          name: 'Cat Knight',
          class: 'Feline Warrior',
          power: 5,
          attack: 6,
          defense: 3,
          image: require('@/assets/catknight.png')
        }
        // Add more cards as needed
      ]
    }
  }
}
</script>

<style scoped>
.v-card {
  height: 100%;
  transition: transform 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.card-container {
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #4a4a4a;
  margin-bottom: 1rem;
}

.attribute {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.attribute span {
  margin-left: 4px;
}
</style>

<template>
  <v-card>
    <v-card-title>My Badges</v-card-title>
    <v-card-text>
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
          <v-card class="text-center">
            <v-img :src="badge.image" height="150px" class="mx-auto" />
            <v-card-title>{{ badge.name }}</v-card-title>
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
    }
  }
}
</script>

<style scoped>
</style>

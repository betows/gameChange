<template>
  <v-card>
    <v-card-title>Minhas tarefas</v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          v-for="task in tasks"
          :key="task.id"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          class="mb-4"
        >
          <v-card>
            <v-card-title>{{ task.title }}</v-card-title>
            <v-card-subtitle>{{ task.description }}</v-card-subtitle>
            <v-card-text>
              <div>Due Date: {{ task.dueDate }}</div>
              <div>Status: {{ task.status }}</div>
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
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

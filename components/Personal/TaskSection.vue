<template>
  <v-card class="glass-panel">
    <div style="display: flex; flex-direction: row; justify-content: space-between;">
      <v-card-title style="padding-left: 8px;">
        Minhas tarefas
      </v-card-title>
      <div v-if="tasks.length > 0" style="margin-top: 20px;">
        <v-select
          v-model="selectedStatus"
          :items="statusOptions"
          style="width: 200px;"
          item-text="text"
          item-value="value"
          label="Filtrar por status"
          outlined
          dense
        />
      </div>
    </div>
    <v-card-text>
      <v-card-text v-if="tasks">
        <v-row>
          <v-col
            v-for="task in filteredTasks"
            :key="task.id"
            xs="12"
            sm="10"
            md="6"
            lg="8"
            class="mb-4"
          >
            <v-card class="glass-panel">
              <v-card-title>{{ task.title }}</v-card-title>
              <v-card-subtitle>{{ task.description }}</v-card-subtitle>
              <v-card-text>
                <div>Prazo de entrega: {{ task.deadline }}</div>
                <div>Status: {{ task.status }}</div>
                <div>Recompensa: {{ task.reward }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
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
  },
  data () {
    return {
      selectedStatus: null,
      statusOptions: [
        { text: 'Todos', value: null },
        { text: 'Em progresso', value: 'In progress' },
        { text: 'Concluídas', value: 'Completed' }
      ]
    }
  },
  computed: {
    filteredTasks () {
      if (!this.selectedStatus) {
        return this.tasks
      }
      return this.tasks.filter(task => task.status === this.selectedStatus)
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

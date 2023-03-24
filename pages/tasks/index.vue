<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="mb-5">
            Your Tasks
          </h2>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="task in tasks" :key="task.id" cols="12" sm="6" md="4">
          <v-card>
            <v-card-title>{{ task.title }}</v-card-title>
            <v-card-text>{{ task.description }}</v-card-text>
            <v-card-actions>
              <v-progress-linear
                color="primary"
                :value="task.progress"
                height="20"
              />
            </v-card-actions>
            <v-card-subtitle>{{ task.progress }}% Complete</v-card-subtitle>
            <v-card-actions>
              <v-btn
                color="primary"
                text
                :disabled="task.progress === 100"
                @click="completeTask(task.id)"
              >
                Complete Task
              </v-btn>
              <v-btn
                color="secondary"
                text
                @click="openTaskDetails(task.id)"
              >
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      tasks: [] // Store the tasks data here
    }
  },
  async created () {
  // Fetch tasks data from your Django API and populate the tasks array
    const response = await this.$axios.get('tasks/')
    this.tasks = response.data
  },
  methods: {
    async completeTask (taskId) {
      // Call your API to mark the task as complete and update the progress
      await this.$axios.put(`/api/tasks/${taskId}/complete`)

      // Update the task progress locally
      const task = this.tasks.find(t => t.id === taskId)
      task.progress = 100
    },
    openTaskDetails (taskId) {
      // Navigate to the task details page
      this.$router.push(`/tasks/${taskId}`)
    }
  }
}
</script>

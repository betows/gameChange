<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-4">
          <v-card-title class="text-h5">
            Criar tarefa
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="task.title"
                label="Título da tarefa"
                :rules="titleRules"
                required
              />
              <v-textarea
                v-model="task.description"
                label="Descrição da tarefa"
                :rules="descriptionRules"
                required
              />
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="task.dueDate"
                    label="Data de entrega"
                    :rules="dueDateRules"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="task.dueDate" @input="menu = false" />
              </v-menu>

              <v-autocomplete
                v-model="task.assignee"
                :items="teamMembers"
                item-text="name"
                item-value="id"
                label="Assign to"
                :rules="assigneeRules"
                required
              />

              <v-btn color="primary" :disabled="!valid" @click="submitForm">
                Create Task
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      task: {
        title: '',
        description: '',
        dueDate: null,
        assignee: null
      },
      titleRules: [v => !!v || 'O titulo é obrigatório'],
      descriptionRules: [v => !!v || 'A descrição é obrigatória	'],
      dueDateRules: [v => !!v || 'A data de entrega é obrigatória'],
      assigneeRules: [v => !!v || 'O responsável é obrigatório'],
      menu: false,
      teamMembers: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
        // Add more team members as needed
      ]
    }
  },
  methods: {
    submitForm () {
      if (this.$refs.form.validate()) {
        // Send the task data to the API or process it as needed
        console.log('Task created:', this.task)

        // Reset the form
        this.$refs.form.reset()
        this.$refs.form.resetValidation()
      }
    }
  }
}
</script>

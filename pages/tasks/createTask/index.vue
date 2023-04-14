<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card class="glass-panel pa-4">
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
                    :value="formattedDueDate"
                    label="Data de entrega"
                    :rules="deadlineRules"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="task.deadline" @input="menu = false" />
              </v-menu>
              <v-select
                v-model="task.priority"
                :items="['Baixa', 'Média', 'Alta']"
                label="Prioridade"
                required
              />
              <v-select
                v-model="task.difficulty"
                :items="['Fácil', 'Moderada', 'Difícil']"
                label="Dificuldade"
                required
              />
              <v-autocomplete
                v-if="showBadgeSelection"
                v-model="selectedBage"
                :items="availableBadges"
                item-text="name"
                item-value="img"
                label="Select a Badge"
                required
              />
              <v-img
                v-if="selectedBage"
                :src="selectedBage"
                class="neon-text"
                style="width: 42px;"
                small
              />
              <v-switch
                v-model="task.grantBadge"
                label="Concede uma medalha ao ser concluída?"
              />
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
      selectedBage: null,
      task: {
        title: '',
        description: '',
        deadline: null,
        assignee: null,
        grantBadge: false,
        priority: '',
        difficulty: ''
      },
      availableBadges: [
        {
          id: 1,
          name: 'Voando alto',
          img: '/flyingHigh.png',
          color: 'red',
          description: 'Obtido após ter concluído 10 tarefas'
        },
        {
          id: 2,
          name: 'Nunca atrasado',
          img: '/molecular.png',
          color: 'blue',
          description: 'Obtido por nunca ter atrasado a entrega de uma tarefa'
        }
      ],
      priorities: [
        { text: 'Baixa', value: 'low' },
        { text: 'Média', value: 'medium' },
        { text: 'Alta', value: 'high' }
      ],
      difficulties: [
        { text: 'Fácil ', value: 'easy' },
        { text: 'Médio', value: 'medium' },
        { text: 'Difícil', value: 'hard' }
      ],
      titleRules: [v => !!v || 'O titulo é obrigatório'],
      descriptionRules: [v => !!v || 'A descrição é obrigatória'],
      deadlineRules: [v => !!v || 'A data de entrega é obrigatória'],
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
  computed: {
    formattedDueDate () {
      if (!this.task.deadline) { return '' }
      const date = new Date(this.task.deadline)
      return new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        timeZone: 'UTC',
        day: 'numeric'
      }).format(date)
    },
    showBadgeSelection () {
      return this.task.priority === 'Alta' && this.task.difficulty === 'Difícil'
    }
  },
  methods: {
    submitForm () {
      if (this.$refs.form.validate()) {
      // Add the selected badge to the task object
        if (this.selectedBage) {
          this.task.selectedBadge = {
            img: this.selectedBage,
            name: this.availableBadges.find(
              badge => badge.img === this.selectedBage
            ).name
          }
        }
        const newTask = {
          id: Math.floor(Math.random() * 1000),
          title: this.task.title,
          description: this.task.description,
          deadline: this.task.deadline,
          status: 'Em progresso',
          assignee: this.task.assignee,
          difficulty: this.task.difficulty,
          priority: this.task.priority,
          grantBadge: this.task.grantBadge
        }
        // Dispatch the createTask action
        this.$store.dispatch('tasks/createTask', newTask)
        // Reset the form
        this.$refs.form.reset()
        this.$refs.form.resetValidation()
        this.$router.push('/personal')
      }
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

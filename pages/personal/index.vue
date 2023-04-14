<template>
  <div style="padding-top: 0px;">
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; flex-direction: row; justify-content: space-between">
        <div
          style="height: 50%; display: flex; flex-direction: column; max-width: 40%;"
          md="4"
          sm="12"
        >
          <profile-section :user="user" :badges="badges" />
        </div>
        <div style="width: 65%">
          <div>
            <div style="height: 50%;" md="10" sm="2" class="mb-4">
              <team-section :teams="teams" />
            </div>
            <div style="height: 50%;" md="10" sm="2" class="mb-4">
              <task-section :tasks="tasks" />
            </div>

            <div style="height: 50%;" md="10" sm="2" class="mb-4">
              <progress-section :progress="progress" />
            </div>

            <div style="height: 50%;" md="6" sm="2" class="mb-4">
              <badge-section :badges="badges" />
            </div>

            <div style="height: 50%;" md="6" sm="2" class="mb-4">
              <collection-section :cards="cards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSection from '@/components/Personal/ProfileSection.vue'
import TeamSection from '@/components/Personal/TeamSection.vue'
import TaskSection from '@/components/Personal/TaskSection.vue'
import ProgressSection from '@/components/Personal/ProgressSection.vue'
import BadgeSection from '@/components/Personal/BadgeSection.vue'
import CollectionSection from '@/components/Personal/CollectionSection.vue'

export default {
  components: {
    ProfileSection,
    TeamSection,
    TaskSection,
    ProgressSection,
    BadgeSection,
    CollectionSection
  },
  data () {
    return {
      user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        image: 'https://via.placeholder.com/150'
      },
      teams: [
        {
          id: 1,
          name: 'Time tecnologia',
          members: [
            { name: 'Roberto' }, { name: 'Jhordy' }
          ]
        },
        {
          id: 2,
          name: 'Time design',
          members: [
            { name: 'Zé' }, { name: 'Mariane' }
          ]
        }
      ],
      tasks: [
        {
          id: 1,
          title: 'Implementar login',
          description: 'Implementação do login social usando auth0 enviando para o back end as definições de usuário',
          deadline: '2023-04-10',
          status: 'In progress'
        },
        {
          id: 2,
          title: 'Estilos da página inicial',
          description: 'Fazer o discovery e decidir os estilos da página incial definindo cores e fontes',
          deadline: '2023-04-20',
          status: 'Completed'
        }
      ],
      progress: [
        {
          id: 1,
          title: 'Project 1',
          completed: 60
        },
        {
          id: 2,
          title: 'Project 2',
          completed: 40
        }
      ],
      badges: [
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
      cards: [
        {
          id: 1,
          name: 'Astronaut',
          class: 'Space Explorer',
          rarity: this.getRarity('rare'),
          power: 7,
          attack: 4,
          defense: 6,
          image: require('@/assets/astronaut.png'),
          aquired: {
            date: '2021-04-10',
            detail: 'Adiquirido após conseguir o badge "Voando Alto"'
          }
        },
        {
          id: 2,
          name: 'Cat Knight',
          rarity: this.getRarity('epic'),
          class: 'Feline Warrior',
          power: 5,
          attack: 6,
          defense: 3,
          image: require('@/assets/catknight.png'),
          aquired: {
            date: '2022-05-10',
            detail: 'Adiquirido após colaborar por um ano na empresa'
          }
        },
        {
          id: 2,
          name: 'The Crew',
          rarity: this.getRarity('common'),
          class: 'Feline Warrior',
          power: 5,
          attack: 6,
          defense: 3,
          image: require('@/assets/allcharacters1.png'),
          aquired: {
            date: '2023-05-10',
            detail: 'Adiquirido ao concluír mais de 30 tarefas'
          }
        }
      ]
    }
  },
  methods: {
    getRarity (rarity) {
      switch (rarity) {
        case 'common':
          return { icon: 'mdi-shield-crown-outline', color: 'teal' }
        case 'rare':
          return { icon: 'mdi-shield-sword-outline', color: 'orange' }
        case 'epic':
          return { icon: 'mdi-shield', color: 'purple' }
        case 'legendary':
          return 'Lendário'
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
  height: 100%;
}

.v-card-text {
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  border-radius: 5px !important;
}

</style>

<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Dashboard</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4" sm="12">
          <profile-section :user="user" />
        </v-col>
        <v-col md="8" sm="12">
          <team-section :teams="teams" />
          <task-section :tasks="tasks" />
          <progress-section :progress="progress" />
          <badge-section :badges="badges" />
          <collection-section :cards="cards" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
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
          name: 'Badge 1',
          image: 'https://via.placeholder.com/50'
        },
        {
          id: 2,
          name: 'Badge 2',
          image: 'https://via.placeholder.com/50'
        }
      ],
      cards: [
        {
          id: 1,
          name: 'Astronaut',
          class: 'Space Explorer',
          power: 7,
          attack: 4,
          defense: 6,
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 2,
          name: 'Cat Knight',
          class: 'Feline Warrior',
          power: 5,
          attack: 6,
          defense: 3,
          image: 'https://via.placeholder.com/100'
        }
      ]
    }
  }
}
</script>

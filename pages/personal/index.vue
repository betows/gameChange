<template>
  <v-main class="main-container">
    <v-container fluid>
      <v-row class="mb-4">
        <v-col cols="12">
          <h1 style="padding-left: 22px;" class="display-1 white--text">
            Dashboard
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="4" sm="12">
          <profile-section :user="user" />
        </v-col>
        <v-col md="8" sm="12">
          <v-expansion-panels flat accordion class="glass-panel">
            <v-expansion-panel>
              <v-expansion-panel-header class="white--text">
                Teams
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <team-section :teams="teams" />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Tasks</v-expansion-panel-header>
              <v-expansion-panel-content>
                <task-section :tasks="tasks" />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Progress</v-expansion-panel-header>
              <v-expansion-panel-content>
                <progress-section :progress="progress" />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Badges</v-expansion-panel-header>
              <v-expansion-panel-content>
                <badge-section :badges="badges" />
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Collection</v-expansion-panel-header>
              <v-expansion-panel-content>
                <collection-section :cards="cards" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      </div>
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
          rarity: this.getRarity('rare'),
          power: 7,
          attack: 4,
          defense: 6,
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 2,
          name: 'Cat Knight',
          rarity: this.getRarity('epic'),
          class: 'Feline Warrior',
          power: 5,
          attack: 6,
          defense: 3,
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 2,
          name: 'Cat Knight',
          rarity: this.getRarity('common'),
          class: 'Feline Warrior',
          power: 5,
          attack: 6,
          defense: 3,
          image: 'https://via.placeholder.com/100'
        }
      ]
    }
  },
  methods: {
    getRarity (rarity) {
      switch (rarity) {
        case 'common':
          return 'mdi-shield-crown-outline'
        case 'rare':
          return 'mdi-shield-sword-outline'
        case 'epic':
          return 'Épico'
        case 'legendary':
          return 'Lendário'
      }
    }
  }
}
</script>
<style scoped>
.main-container {
  padding: 0px;
  background-image: url('https://cdn.wallpapersafari.com/34/43/YG9nle.jpg');
  background-size: cover;
  background-position: center;
}

.glass-panel {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 15px;
}

.v-expansion-panel-header {
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  border-radius: 5px !important;
}

.v-expansion-panel-content {
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  border-radius: 5px !important;
}

</style>

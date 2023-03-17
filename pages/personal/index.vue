<template>
  <v-main>
    <v-container>
      <div v-if="user">
        <v-card class="v-card">
          <v-img :src="profilePicture" height="300px" />
          <input type="file" @change="onFileChange">
          <v-card-title>{{ user.username }}</v-card-title>
          <v-card-subtitle>{{ user.email }}</v-card-subtitle>
          <v-card-text>
            About me: {{ user.bio }}
          </v-card-text>
        </v-card>
        <v-card class="v-card">
          <v-card-title>My Team</v-card-title>
          <v-card-text>
            <v-select
              v-model="user.team"
              :items="teams"
              :disabled="user.team"
              label="Select a team"
            />
          </v-card-text>
        </v-card>
        <v-card class="v-card">
          <v-card-title>My Accomplishments</v-card-title>
          <v-card-text>
            <v-chip-group>
              <v-chip v-for="achievement in user.achievements" :key="achievement.id">
                {{ achievement.name }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
        <v-card class="v-card">
          <v-card-title>My Tasks</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="task in user.tasks" :key="task.id">
                <v-list-item-content>
                  {{ task.title }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </div>
      <div v-else>
        <v-alert type="error">
          User not found or failed to load.
        </v-alert>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      teams: [] // Add your list of teams here
    }
  },
  computed: {
    ...mapState('auth', ['user']), // Map the 'user' state from the 'auth' store
    profilePicture () {
      return this.user.profile_picture || ''
    }
  },
  methods: {
    onFileChange (event) {
      // Handle file input change event and update user.profile_picture
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        this.user.profile_picture = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>

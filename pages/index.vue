<template>
  <div>
    <v-parallax src="https://source.unsplash.com/random/1600x900" height="400">
      <v-row class="fill-height" align="center" justify="center">
        <v-col class="text-center">
          <h1 class="display-2 font-weight-bold white--text">
            Welcome to GameChange
          </h1>
          <v-btn color="primary" large class="mt-5" @click="$router.push('/personal')">
            Get Started
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container>
      <v-row class="my-10">
        <v-col cols="12">
          <h2 class="text-center mb-6">
            Features
          </h2>
        </v-col>
        <v-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :elevation="hover ? 12 : 2"
              @click="goTo(feature.redirect)"
            >
              <v-img :src="feature.image" aspect-ratio="1.5" />
              <v-card-title>{{ feature.title }}</v-card-title>
              <v-card-text>{{ feature.description }}</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <v-divider class="my-12" />

      <v-row class="my-10">
        <v-col cols="12">
          <h2 class="text-center mb-6">
            Gamification Examples
          </h2>
        </v-col>
        <v-col v-for="example in gamificationExamples" :key="example.title" cols="12" sm="6" md="4">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :elevation="hover ? 12 : 2"
              @click="goTo(example.redirect)"
            >
              <v-img :src="example.image" aspect-ratio="1.5" />
              <v-card-title>{{ example.title }}</v-card-title>
              <v-card-text>{{ example.description }}</v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      features: [
        {
          title: 'Task Management',
          image: 'https://via.placeholder.com/600x400',
          description: 'Easily create, assign, and track tasks for your team.',
          redirect: '/tasks'
        },
        {
          title: 'Progress Tracking',
          image: 'https://via.placeholder.com/600x400',
          description: 'Monitor team progress and individual performance with visual analytics.',
          redirect: '/progress'
        },
        {
          title: 'Team Collaboration',
          image: 'https://via.placeholder.com/600x400',
          description: 'Communicate and collaborate with your team in real-time.',
          redirect: '/collaboration'
        }
      ],
      gamificationExamples: [
        {
          title: 'Trading Cards',
          image: 'https://via.placeholder.com/600x400',
          description: 'Earn unique trading cards by completing tasks and leveling up.',
          redirect: '/trading-cards'
        },
        {
          title: 'Battles',
          image: 'https://via.placeholder.com/600x400',
          description: 'Challenge your teammates to battles and climb the leaderboard.',
          redirect: '/battles'
        },
        {
          title: 'Card Trading',
          image: 'https://via.placeholder.com/600x400',
          description: 'Trade cards with your teammates to build your ultimate deck.',
          redirect: '/card-trading'
        }
      ]
    }
  },
  methods: {
    goTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

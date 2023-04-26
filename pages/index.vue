<template>
  <div>
    <v-parallax :src="require('@/assets/background.jpg')" height="400">
      <v-row class="fill-height" align="center" justify="center">
        <v-col class="text-center">
          <h1 class="display-2 font-weight-bold white--text">
            Bem-vindo ao GameChange
          </h1>
          <v-btn color="primary" large class="mt-5" @click="$router.push('/personal')">
            Comece agora
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container>
      <v-row class="my-10">
        <v-col cols="12">
          <h2 class="text-center mb-6">
            Funcionalidades
          </h2>
        </v-col>
        <v-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          sm="6"
          md="4"
        >
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :elevation="hover ? 12 : 2"
              class="glass-panel"
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
            Exemplos de Gamificação
          </h2>
        </v-col>
        <v-col v-for="example in gamificationExamples" :key="example.title" cols="12" sm="6" md="4">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :elevation="hover ? 12 : 2"
              class="glass-panel"
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
          title: 'Gerenciamento de Tarefas',
          image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=600&h=400',
          description: 'Crie, atribua e acompanhe facilmente as tarefas da sua equipe.',
          redirect: '/tasks'
        },
        {
          title: 'Acompanhamento de Progresso',
          image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=600&h=400',
          description: 'Monitore o progresso da equipe e o desempenho individual com análises visuais.',
          redirect: '/progress'
        },
        {
          title: 'Colaboração em Equipe',
          image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&h=400',
          description: 'Comunique-se e colabore com sua equipe em tempo real.',
          redirect: '/collaboration'
        }
      ],
      gamificationExamples: [
        {
          title: 'Cartas Colecionáveis',
          image: 'https://images.unsplash.com/photo-1606788075767-29a4d1ddb7ff?auto=format&fit=crop&w=600&h=400',
          description: 'Ganhe cartas colecionáveis únicas ao concluir tarefas e subir de nível.',
          redirect: '/trading-cards'
        },
        {
          title: 'Batalhas',
          image: 'https://images.unsplash.com/photo-1575089976121-8ed7b4c15383?auto=format&fit=crop&w=600&h=400',
          description: 'Desafie seus colegas de equipe para batalhas e suba no ranking.',
          redirect: '/battles'
        },
        {
          title: 'Troca de Cartas',
          image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=600&h=400',
          description: 'Troque cartas com seus colegas de equipe para montar seu baralho definitivo.',
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
<style scoped>
.glass-panel {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 15px;
}
</style>

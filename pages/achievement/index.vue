<template>
  <div class="achievement">
    <v-icon> {{ achievement.icon }} </v-icon>
    <div class="achievement-info">
      <h3>{{ achievement.name }}</h3>
      <p>{{ achievement.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    achievement: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.achievement {
  display: flex;
  align-items: center;
}
.achievement img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>

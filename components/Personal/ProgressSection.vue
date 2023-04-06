<template>
  <div class="glass-panel">
    <div style="padding-bottom: 16px;">Progresso</div>
    <div>
        <div
          v-for="(item, index) in progress"
          :key="index"
          class="mb-4"
        >
        <div class="slider-container">
          <p class="slider-title">
            {{ item.title }}
          </p>
        <v-progress-linear
          rounded
          :value="item.completed"
          min="0"
          max="100"
          style="width:80% !important; border-radius: 8px;"
          color="#5dfcc2"
          background-color="#003333"
        />
        <p class="slider-info">
          {{ item.completed }} %
        </p>
      </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Array,
      required: true
    },
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.glass-panel {
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 15px;
}
.v-progress-linear__determinate {
    height: inherit;
    left: 0;
    position: absolute;
    transition: inherit;
    border-radius: 8px;
}
</style>

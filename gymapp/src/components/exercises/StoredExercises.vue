<template>
  <ul>
    <exercise-item
      v-for="exercise in exercises"
      :key="exercise.id"
      :id="exercise.id"
      :title="exercise.title"
      :description="exercise.description"
      :link="exercise.link"
    ></exercise-item>
  </ul>
</template>

<script>
import ExerciseItem from './ExerciseItem.vue';
export default {
  components: {
    ExerciseItem,
  },
  inject: ['exercises'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>

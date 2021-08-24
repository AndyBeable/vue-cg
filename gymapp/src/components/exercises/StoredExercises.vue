<template>
  <ul>
    <exercise-item
      v-for="exercise in exercises"
      :key="exercise.id"
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
  props: ['exercises'],
};
</script>

<template>
  <section>FILTER</section>
  <section>
    <ul v-if="hasExercises">
      <exercise-item
        v-for="exercise in filteredExercises"
        :key="exercise.id"
        :id="exercise.id"
        :name="exercise.name"
        :muscle-worked="exercise.musclesWorked"
        :difficulty="exercise.difficulty"
      ></exercise-item>
    </ul>
    <h3 v-else>No exercises available</h3>
  </section>
</template>

<script>
import ExerciseItem from '../../components/exercises/ExerciseItem.vue';
export default {
  components: { ExerciseItem },
  computed: {
    filteredExercises() {
      return this.$store.getters['exercises/exercises'];
    },
    hasExercises() {
      return this.$store.getters['exercises/hasExercises'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <section>
    <h1>GymApp</h1>
    <exercise
      v-for="exercise in exercises"
      :key="exercise.id"
      :id="exercise.id"
      :name="exercise.name"
      :reps="exercise.reps"
      :sets="exercise.sets"
      :weight="exercise.weight"
    ></exercise>
  </section>
</template>

<script>
import Exercise from './components/Exercise.vue';
export default {
  name: 'App',
  components: { Exercise },
  data() {
    return {
      exercises: [
        {
          id: 'bench',
          name: 'Bench Press',
          reps: '10',
          sets: '5',
          weight: '70kg',
        },
        {
          id: 'squat',
          name: 'Back Squat',
          reps: '10',
          sets: '5',
          weight: '80kg',
        },
        {
          id: 'press',
          name: 'Shoulder Press',
          reps: '10',
          sets: '5',
          weight: '40kg',
        },
        {
          id: 'deadlift',
          name: 'Dead lift',
          reps: '10',
          sets: '5',
          weight: '100kg',
        },
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  list-style: none;
}
</style>

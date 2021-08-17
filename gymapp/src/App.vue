<template>
  <section>
    <h1>GymApp</h1>
    <new-exercise @add-exercise="addExercise"></new-exercise>
    <section>
      <p v-if="restDay">Have a rest!</p>
    </section>
    <exercise
      v-for="exercise in exercises"
      :key="exercise.id"
      :id="exercise.id"
      :name="exercise.name"
      :reps="exercise.reps"
      :sets="exercise.sets"
      :weight="exercise.weight"
      @delete="deleteExercise"
    ></exercise>
  </section>
</template>

<script>
import Exercise from './components/Exercise.vue';
import NewExercise from './components/NewExercise.vue';
export default {
  name: 'App',
  components: { Exercise, NewExercise },
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
        // {
        //   id: 'squat',
        //   name: 'Back Squat',
        //   reps: '10',
        //   sets: '5',
        //   weight: '80kg',
        // },
        // {
        //   id: 'press',
        //   name: 'Shoulder Press',
        //   reps: '10',
        //   sets: '5',
        //   weight: '40kg',
        // },
        // {
        //   id: 'deadlift',
        //   name: 'Dead lift',
        //   reps: '10',
        //   sets: '5',
        //   weight: '100kg',
        // },
      ],
      restDay: true,
    };
  },
  methods: {
    addExercise(name, reps, sets, weight) {
      const newExercise = {
        id: new Date().toISOString(),
        name: name,
        reps: reps,
        sets: sets,
        weight: weight,
      };
      this.exercises.push(newExercise);
    },
    deleteExercise(id) {
      this.exercises = this.exercises.filter((exercise) => exercise.id !== id);
    },
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

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 0.5rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  list-style: none;
}

#app input {
  margin: 0.25rem 0rem 0.25rem 1rem;
  padding: 0.5rem;
}

#app button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #75a5d6;
  color: #2c3e50;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: 1rem 1rem;
}
#app button:hover,
#app button:active {
  background-color: #618ebb;
  color: #2c3e50;
  outline: none;
  border: none;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app .delete-btn {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #f35c5c;
  color: #2c3e50;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: 1rem 1rem;
}

#app .delete-btn:hover,
#app .delete-btn:active {
  background-color: #ff8c8c;
  color: #2c3e50;
  outline: none;
  border: none;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
</style>

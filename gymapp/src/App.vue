<template>
  <ul>
    <exercise-item
      v-for="exercise in storedExercises"
      :key="exercise.id"
      :title="exercise.title"
      :description="exercise.description"
      :link="exercise.link"
    ></exercise-item>
  </ul>
</template>

<script>
import ExerciseItem from './components/exercises/ExerciseItem.vue';
export default {
  components: {
    ExerciseItem,
  },
  data() {
    return {
      storedExercises: [
        {
          id: 'bench-press',
          title: 'Bench Press',
          description: 'Chest focused exercise',
          link: 'https://google.co.uk',
        },
        {
          id: 'squat',
          title: 'Back Squat',
          description: 'Leg focused exercise',
          link: 'https://google.co.uk',
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

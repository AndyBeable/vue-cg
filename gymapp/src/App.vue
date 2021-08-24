<template>
  <div>
    <the-header title="GymApp"></the-header>
    <stored-exercises :exercises="storedExercises"></stored-exercises>
  </div>
</template>

<script>
import StoredExercises from './components/exercises/StoredExercises.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components: {
    StoredExercises,
    TheHeader,
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

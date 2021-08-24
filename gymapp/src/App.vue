<template>
  <div>
    <the-header title="GymApp"></the-header>
    <the-exercises></the-exercises>
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheExercises from './components/exercises/TheExercises.vue';
export default {
  components: {
    TheHeader,
    TheExercises,
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

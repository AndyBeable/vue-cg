export default {
  exercises(state) {
    return state.exercises;
  },
  hasExercises(state) {
    return state.exercises && state.exercises.length > 0;
  },
};

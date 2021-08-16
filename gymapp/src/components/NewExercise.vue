<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Exercise</label>
      <input type="text" />
    </div>
    <div>
      <label>Reps</label>
      <input type="text" />
    </div>
    <div>
      <label>Sets</label>
      <input type="text" />
    </div>
    <div>
      <label>Weight</label>
      <input type="text" />
    </div>
    <div>
      <button>Add Exercise</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-exercise'],
  data() {
    return {
      enteredExercise: '',
      enteredReps: '',
      enteredSets: '',
      enteredWeight: '',
    };
  },
  methods: {
    submitData() {
      this.$emit(
        'add-exercise',
        this.enteredExercise,
        this.enteredReps,
        this.enteredSets,
        this.enteredWeight
      );
    },
  },
};
</script>

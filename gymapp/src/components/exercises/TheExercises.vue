<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-exercises')"
        :mode="storedExButtonMode"
      >
        Stored Exercises
      </base-button>
      <base-button
        @click="setSelectedTab('add-exercise')"
        :mode="addExButtonMode"
      >
        Add Exercise
      </base-button>
    </base-card>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredExercises from './StoredExercises.vue';
import AddExercise from './AddExercise.vue';
export default {
  components: {
    StoredExercises,
    AddExercise,
  },
  data() {
    return {
      selectedTab: 'stored-exercises',
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
  provide() {
    return {
      exercises: this.storedExercises,
    };
  },
  computed: {
    storedExButtonMode() {
      return this.selectedTab === 'stored-exercises' ? null : 'flat';
    },
    addExButtonMode() {
      return this.selectedTab === 'add-exercise' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

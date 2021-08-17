<template>
  <section>
    <ul>
      <li>
        <h2>Exercise: {{ name }}</h2>
        <button @click="toggleDetails">
          {{ detailsAreVisible ? 'Hide' : 'Show' }} details
        </button>
        <ul v-if="detailsAreVisible">
          <li>
            <h3>Reps: {{ reps }}</h3>
          </li>
          <li>
            <h3>Sets: {{ sets }}</h3>
          </li>
          <li>
            <h3>Weight: {{ weight }}</h3>
          </li>
        </ul>
        <button @click="$emit('delete', id)" class="delete-btn">Delete</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    reps: {
      type: String,
      required: true,
    },
    sets: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
  },
  emits: ['delete'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

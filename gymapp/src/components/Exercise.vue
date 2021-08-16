<template>
  <section>
    <ul>
      <li>
        <h2>{{ name }}</h2>
        <h3>{{ reps }}</h3>
        <h3>{{ sets }}</h3>
        <h3>{{ weight }}</h3>
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
};
</script>

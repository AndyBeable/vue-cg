<template>
  <li>
    <h3>{{ name }}</h3>
    <h4>{{ muscle }}</h4>
    <div>
      <span v-for="muscle in muscles" :key="muscle">{{ muscle }}</span>
    </div>
    <h4>{{ difficulty }}</h4>
    <div class="actions">
      <base-button mode="outline" link :to="exerciseDetailsLink">
        View Exercise
      </base-button>
      <base-button link :to="exerciseFavouritesLink">
        View Favourites
      </base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'muscles', 'difficulty'],
  computed: {
    exerciseDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
    exerciseFavouritesLink() {
      return '/favourites';
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

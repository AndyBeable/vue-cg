<template>
  <li>
    <h2>{{ name }} {{ friendIsFavourite === '1' ? '(Favourite)' : '' }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show ' }} Details
    </button>
    <button @click="toggleFavourite">
      Toggle Favourite
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress', 'isFavourite'],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'John',
        name: 'John Doe',
        phone: '01234567678',
        email: 'johnDoe@gmail.com',
      },
      friendIsFavourite: this.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      if (this.friendIsFavourite === '1') {
        this.friendIsFavourite = '0';
      } else {
        this.friendIsFavourite = '1';
      }
    },
  },
};
</script>

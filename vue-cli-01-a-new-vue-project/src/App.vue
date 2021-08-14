<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 'Iris',
          name: 'Iris Esteve Hernandez',
          phone: '01234567678',
          email: 'irisesteve@gmail.com',
        },
      ],
    };
  },
};
</script>

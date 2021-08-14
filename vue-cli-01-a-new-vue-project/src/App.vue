<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'Andy',
          name: 'Andy Beable',
          phone: '01234567678',
          email: 'andy.beable@gmail.com',
        },
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

const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Learn quicker',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master vue';
      }
    },
  },
});

app.mount('#user-goal');

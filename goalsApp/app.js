const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Learn quicker',
      courseGoalB: 'Build app in Vue',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      console.log(randomNumber);
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');

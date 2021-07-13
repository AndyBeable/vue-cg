const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Learn quicker',
      vueLink: 'https://vuejs.org/',
    };
  },
});

app.mount('#user-goal');

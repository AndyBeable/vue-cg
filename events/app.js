const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    descrease() {
      this.counter--;
    },
  },
});

app.mount('#events');

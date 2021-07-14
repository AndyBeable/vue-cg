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
    decrease() {
      this.counter--;
    },
    increase5(num) {
      this.counter = this.counter + num;
    },
    decrease5(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount('#events');

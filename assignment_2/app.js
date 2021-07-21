const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    alert() {
      alert('You clicked');
    },
    userInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount('#assignment');

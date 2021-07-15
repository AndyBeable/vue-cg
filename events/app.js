const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
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
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(e) {
      e.preventDefault();
      alert('Submitted');
    },
  },
});

app.mount('#events');

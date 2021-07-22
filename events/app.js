const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Beable';
    },
    increase() {
      this.counter = this.counter + 1;
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
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');

// Methods can be used for:
// Use with event or data binding
// For data binding = method is executed for every re-render cycle of the component
// Use for event or data that really needs to be re-evaluated all the time

// Computed
// Use with data binding only
// Only re-evaluated if dependent changes
// use for when data depends on other data

// Watchers
// Not used directly in the template
// Allows to run code in reaction to some changed data
// Use for any non-data update you want to make

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',
    };
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === ' ') {
    //     this.fullname = ' ';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === ' ') {
    //     this.fullname = ' ';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // },
  },
  methods: {
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Beable';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');

const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Too small';
      } else if (this.number === 37) {
        return this.number;
      } else {
        return 'Too large';
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 4500);
    },
  },
  methods: {
    addNumber(num) {
      this.number = this.number + num;
    },
  },
});

app.mount('#assignment');

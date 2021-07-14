Vue.createApp({
  data() {
    return {
      name: 'Andy',
      age: 32,
      imgUrl:
        'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors-500x486.jpg',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    randomNum() {
      return Math.random();
    },
  },
}).mount('#assignment');

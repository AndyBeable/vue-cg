const app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Hello World',
    countdown: [5, 4, 3, 2, 1],
    fruits: ['Apple', 'Banana', 'Orange', 'Mango'],
    profile: {
      name: 'Andy',
      age: '32',
      degree: 'Sport Science',
      position: 'Front End Developer',
    },
  },
});

const app2 = new Vue({
  el: '#app2',
  data: {
    name: 'Andy',
  },
});
const app3 = new Vue({
  el: '#app3',
  data: {
    count: 11,
  },
});
const app4 = new Vue({
  el: '#app4',
  data: {
    isActive: true,
  },
});
const app5 = new Vue({
  el: '#app5',
  data: {
    count: 0,
  },
});

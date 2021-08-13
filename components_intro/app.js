const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'Andy',
          name: 'Andy Beable',
          phone: '0735435435',
          email: 'andy.beable@gmail.com',
        },
        {
          id: 'Iris',
          name: 'Iris Esteve Hernandez',
          phone: '5464464556',
          email: 'iris.esteve@gmail.com',
        },
      ],
    };
  },
});

app.mount('#app');

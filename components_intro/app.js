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

app.component('friend-contact', {
  template: `
  <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="detailsAreVisible">
            <li>
              <strong>Phone:</strong>
              {{friend.phone}}
            </li>
            <li>
              <strong>Email:</strong>
              {{friend.email}}
            </li>
          </ul>
        </li>
        `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'Andy',
        name: 'Andy Beable',
        phone: '0735435435',
        email: 'andy.beable@gmail.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');

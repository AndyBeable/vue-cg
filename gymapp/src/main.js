import { createApp } from 'vue';

import router from './router.js';
import store from './store/index';
import App from './App.vue';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.use(router);
app.use(store);
app.mount('#app');

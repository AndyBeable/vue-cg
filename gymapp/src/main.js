import { createApp } from 'vue';
import App from './App.vue';
import Exercise from './components/Exercise.vue';

const app = createApp(App);

app.component('exercise-type', Exercise);

app.mount('#app');

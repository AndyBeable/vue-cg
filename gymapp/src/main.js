import { createApp } from 'vue';
import App from './App.vue';
import Exercise from './components/Exercise.vue';
import NewExercise from './components/NewExercise.vue';

const app = createApp(App);

app.component('exercise-type', Exercise);
app.component('new-exercise', NewExercise);

app.mount('#app');

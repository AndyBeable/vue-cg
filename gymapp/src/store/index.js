import { createStore } from 'vuex';

import exercisesModule from './modules/exercises/index.js';

const store = createStore({
  modules: {
    exercises: exercisesModule,
  },
});

export default store;

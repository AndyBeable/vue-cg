import { createStore } from 'vuex';

import exercisesModule from './modules/exercises/index';

const store = createStore({
  modules: {
    exercises: exercisesModule,
  },
});

export default store;

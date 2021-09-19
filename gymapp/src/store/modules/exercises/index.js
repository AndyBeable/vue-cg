import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      exercises: [
        {
          id: 'a1',
          name: 'Bench Press',
          muscles: ['chest', 'shoulders', 'arms'],
          difficulty: 'easy',
        },
        {
          id: 'a2',
          name: 'Back Squat',
          muscles: ['glutes', 'hamstrings', 'quadriceps'],
          difficulty: 'hard',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

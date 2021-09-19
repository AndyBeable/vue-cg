import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namedspaced: true,
  state() {
    return {
      exercises: [
        {
          id: 'a1',
          name: 'Bench Press',
          musclesWorked: ['chest', 'shoulders', 'arms'],
          difficulty: 'easy',
        },
        {
          id: 'a2',
          name: 'Back Squat',
          musclesWorked: ['glutes', 'hamstrings', 'quadriceps'],
          difficulty: 'hard',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

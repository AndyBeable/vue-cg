import counterMutations from './mutations.js';
import counterActions from './actions';
import counterGetters from './getters';

export default {
  namespace: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
};

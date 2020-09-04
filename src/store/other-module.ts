import {actionTree} from 'typed-vuex';
import {accessor}   from '.';


import {
  useAccessor,
  getterTree,
  mutationTree,
} from 'typed-vuex';
/*
 * missing on website .
 */
const state     = {
  otherEmail: '',
};
const getters   = getterTree(state, {});
const mutations = mutationTree(state, {
  setOtherEmail(state, newValue: string) {
    state.otherEmail = newValue;
  }
});

const actions = actionTree(
  {state, getters, mutations},
  {
    async resetEmail({commit}) {
      /*
      * not found this statement on website .
      */
      // accessor.submodule.initialise()
      accessor.initialiseStore();               // use this to test .
      commit('setOtherEmail', 'action@other-module.com');
    },
  }
);

export {
  state,
  getters,
  mutations,
  actions,
};

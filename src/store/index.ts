import Vue  from 'vue';
import Vuex from 'vuex';

import {
  useAccessor,
  getterTree,
  mutationTree,
  actionTree,
} from 'typed-vuex';

import * as otherModule from './other-module';    // import other module

Vue.use(Vuex);


const state = {
  email: '',
};

const getters = getterTree(state, {
  email    : state => state.email,
  fullEmail: state => state.email,
});

const mutations = mutationTree(state, {
  setEmail(state, newValue: string) {
    state.email = newValue;
  },

  initialiseStore() {
    console.log('initialised');
  },
});

const actions = actionTree(
  {state, getters, mutations},
  {
    async resetEmail({commit}) {
      commit('setEmail', 'a@a.com');
    },
  }
);

const storePattern = {
  state,
  mutations,
  actions,
  modules:{
    otherModule,                                  // use other module
  }
};


const store = new Vuex.Store(storePattern);

export const accessor = useAccessor(store, storePattern);

// Optionally, inject accessor globally
Vue.prototype.$accessor = accessor;

export default store;

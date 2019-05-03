/* eslint no-param-reassign:
 ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './modules/auth';

Vue.use(Vuex);

const actions = {};

const mutations = {};

const getters = {};

export default new Vuex.Store({
  state: {},
  mutations,
  actions,
  getters,
  modules: {
    auth: Auth,
  },
});

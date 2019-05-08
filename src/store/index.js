/* eslint no-param-reassign:
 ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './modules/auth';
import Book from './modules/book';

Vue.use(Vuex);

const actions = {};

const mutations = {};

const getters = {};

const store = new Vuex.Store({
  state: {},
  mutations,
  actions,
  getters,
  modules: {
    auth: Auth,
    book: Book,
  },
});

Vue.store = store;

export default store;

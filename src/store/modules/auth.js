/* eslint no-param-reassign:
 ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import Vue from 'vue';
import Storage from '@/services/storage';
import User from '@/services/apis/user';

import {
  FETCH_USER_INFO,
} from '../actionTypes';

import {
  SET_USER_TOKEN,
  SET_USER_INFO,
  FLUSH_AUTH,
} from '../mutationTypes';

const actions = {
  async [FETCH_USER_INFO]({ commit }) {
    try {
      const { data: { data: user } = {} } = await User.info();

      commit(SET_USER_INFO, { user });
    } catch (e) {
      Vue.notify({
        title: 'Error while getting user information',
        message: e.message,
        type: 'danger',
      });
    }
  },
};

const mutations = {
  [SET_USER_TOKEN](state, { token }) {
    if (token) {
      Storage.write('user_token', token);
      state.userToken = token;
    }
  },
  [SET_USER_INFO](state, { user }) {
    if (user) {
      state.userInfo = user;
    }
  },
  [FLUSH_AUTH](state) {
    state.userToken = null;
    state.userInfo = null;
  },
};

const state = {
  userToken: Storage.read('user_token'),
  userInfo: null,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

/* eslint no-param-reassign:
 ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import Storage from '@/services/storage';

import {
  SET_USER_TOKEN,
  SET_USER_INFO,
  FLUSH_AUTH,
} from '../mutationTypes';

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
  mutations,
};

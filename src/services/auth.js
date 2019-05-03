/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import store from '@/store/index';
import User from '@/services/apis/user';
import { SET_USER_INFO } from '@/store/mutationTypes';

async function fetchUserInfo(next) {
  try {
    const { data: { data: user } = {} } = await User.info();

    store.commit(`auth/${SET_USER_INFO}`, { user });

    next();
  } catch (e) {
    Vue.notify({
      title: 'Error while getting user information',
      message: e.message,
      type: 'danger',
    });
  }
}

export function beforeEachRoute({ meta }, from, next) {
  const { userToken, userInfo } = store.state.auth;
  if (meta.auth && !userToken) {
    next({ name: 'login' });
  } else if (meta.auth && userToken && !userInfo) {
    fetchUserInfo(next);
  } else {
    next();
  }
}

export function beforeEachRequest(data, { common }) {
  const { userToken } = store.state.auth;

  if (userToken) {
    // eslint-disable-next-line no-param-reassign
    common.Authorization = `Bearer ${userToken}`;
  }
}

/* eslint-disable import/prefer-default-export */
import Vue from 'vue';
import { FETCH_USER_INFO } from '@/store/actionTypes';

function getMeta({ meta, matched }) {
  let result = Object.assign({}, meta);


  matched.forEach((match) => {
    result = Object.assign(result, match.meta);
  });

  return result;
}

export function beforeEachRoute(to, from, next) {
  const { userToken, userInfo } = Vue.store.state.auth;
  const meta = getMeta(to);

  if (meta.auth && !userToken) {
    next({ name: 'login' });
  } else if (meta.auth && userToken && !userInfo) {
    Vue.store
      .dispatch(`auth/${FETCH_USER_INFO}`)
      .finally(next);
  } else {
    next();
  }
}

export function beforeEachRequest(data, { common }) {
  const { userToken } = Vue.store.state.auth;

  if (userToken) {
    // eslint-disable-next-line no-param-reassign
    common.Authorization = `Bearer ${userToken}`;
  }
}

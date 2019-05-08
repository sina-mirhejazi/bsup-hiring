/* eslint no-param-reassign:
 ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import Vue from 'vue';
import Book from '@/services/apis/book';

import {
  FETCH_BOOK_LIST,
  ADD_NEW_BOOK,
} from '../actionTypes';

import {
  SET_BOOK_LIST,
  ADD_BOOK,
} from '../mutationTypes';

const actions = {
  async [FETCH_BOOK_LIST]({ commit }) {
    try {
      const { data: { data: list } = {} } = await Book.list();

      commit(SET_BOOK_LIST, { list });
    } catch (e) {
      Vue.notify({
        title: 'Error while getting book list',
        message: e.message,
        type: 'danger',
      });
    }
  },
  async [ADD_NEW_BOOK]({ commit }, { book: model }) {
    try {
      const { data: { data: book } = {} } = await Book.create(model);

      commit(ADD_BOOK, { book });
    } catch (e) {
      Vue.notify({
        title: 'Error while adding a new book',
        message: e.message,
        type: 'danger',
      });
    }
  },
};

const mutations = {
  [SET_BOOK_LIST](state, { list }) {
    if (list) {
      state.list = list;
    }
  },
  [ADD_BOOK](state, { book }) {
    if (book) {
      state.list = [...state.list, book];
    }
  },
};

const state = {
  list: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};

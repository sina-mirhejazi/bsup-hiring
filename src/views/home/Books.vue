<template>
  <div class="books-page">
    <div class="books-page__header"></div>
    <div class="books-page__body">
      <div class="card-wrapper">
        <div @click="showAddBook" class="card card-l-1 add-card">
          <font-awesome-icon class="add-card__icon" icon="plus"/>
          <span class="add-card__text font-weight-bold mt-3">Add Book</span>
        </div>
      </div>
      <template v-for="(book, index) of list">
        <div class="card-wrapper" :key="index">
          <Book :book="book"/>
        </div>
      </template>
    </div>

    <Modal :visibility.sync="addBookVisibility" @confirm="handleAddBook">
      <form ref="newBookFormRef">
        <div class="form-group">
          <input class="form-control" v-model="newBookModel.title" prop="title" placeholder="Title">
        </div>
        <div class="form-group">
          <input class="form-control" v-model="newBookModel.author" prop="author" placeholder="Author">
        </div>
        <div class="form-group">
          <input type="number" class="form-control" v-model="newBookModel.price" prop="price" placeholder="Price">
        </div>
        <div class="form-group">
          <input class="form-control" v-model="newBookModel.publisher" prop="publisher" placeholder="Publisher">
        </div>
        <div class="form-group">
          <input class="form-control" v-model="newBookModel.cover_url" prop="cover_url" placeholder="Cover URL">
        </div>
        <div class="form-group book-cover">
          <img
            v-if="newBookModel.cover_url"
            :src="newBookModel.cover_url"
            class="book-cover__preview"
            alt="Book Cover Preview">
        </div>
      </form>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { FETCH_BOOK_LIST, ADD_NEW_BOOK } from '@/store/actionTypes';

import Modal from '@/components/Modal.vue';

import validator from '@/services/validator';

import Book from './components/Book.vue';

export default {
  name: 'Books',
  components: {
    Book,
    Modal,
  },
  data() {
    const baseRule = {
      required: true,
      message: 'This field is required.',
    };

    return {
      addBookVisibility: false,
      newBookModel: {
        title: 'Educated: A Memoir',
        author: 'Tara Westover',
        price: 20.4,
        publisher: 'Amazon',
        cover_url: 'https://images-na.ssl-images-amazon.com/images/I/41dIDDpGepL._SX342_.jpg',
      },
      newBookModelRules: {
        title: baseRule,
        author: baseRule,
        price: baseRule,
        cover_url: {
          format: /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|jpeg|gif|png))(?:\?([^#]*))?(?:#(.*))?/,
          message: 'This field is invalid.',
        },
      },
    };
  },
  computed: {
    ...mapState('book', {
      list: state => state.list,
    }),
    userInfo() {
      return this.$store.state.auth.userInfo;
    },
  },
  methods: {
    ...mapActions('book', {
      addNewBook: ADD_NEW_BOOK,
      fetchBookList: FETCH_BOOK_LIST,
    }),
    showAddBook() {
      this.addBookVisibility = true;
    },
    async handleAddBook() {
      try {
        await validator(this.$refs.newBookFormRef,
          this.newBookModel,
          this.newBookModelRules);

        await this.addNewBook({ book: this.newBookModel });

        this.$notify({
          title: 'Book added',
          message: `${this.newBookModel.title} successfully added.`,
          type: 'success',
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.fetchBookList();
  },
};
</script>

<style lang="scss">
@import "src/styles/mixnis";

.books-page {
  &__body {
    display: flex;
    flex-wrap: wrap;
  }
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
}

.add-card {
  width: 300px;
  padding: 0 25px 25px;
  margin-top: 200px;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: box-shadow 0.4s ease-in-out;

  &__icon {
    font-size: 5rem;
  }

  &:hover {
    box-shadow: bottom-shadow(2), top-shadow(2);
  }
}

.book-cover {
  display: flex;
  justify-content: center;

  &__preview {
    height: 300px;
  }
}
</style>

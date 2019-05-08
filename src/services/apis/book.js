import Config from '../config';
import HTTP from '../http';
import { beforeEachRequest } from '@/services/auth';

class Book {
    http = null;

    constructor() {
      this.http = new HTTP({
        baseURL: Config.baseURL,
        transformRequest: [beforeEachRequest],
      });
    }

    list() {
      return this.http.get('/books');
    }

    create(fields) {
      return this.http.post('/books', { body: fields });
    }

    geyById(bookId) {
      return this.http.get('/books/:bookId', { params: { bookId } });
    }

    editById(bookId, fields) {
      return this.http.patch('/books/:bookId', { params: { bookId }, body: fields });
    }

    deleteById(bookId) {
      return this.http.delete('/books/:bookId', { params: { bookId } });
    }
}

export default new Book();

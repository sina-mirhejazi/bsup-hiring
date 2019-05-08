import Config from '../config';
import HTTP from '../http';
import { beforeEachRequest } from '@/services/auth';

class User {
    http = null;

    constructor() {
      this.http = new HTTP({
        baseURL: Config.baseURL,
        transformRequest: [beforeEachRequest],
      });
    }

    info() {
      return this.http.get('/user');
    }

    edit(fields) {
      return this.http.patch('/user', { body: fields });
    }

    delete() {
      return this.http.delete('/user');
    }

    logout() {
      return this.http.post('/logout');
    }
}

export default new User();

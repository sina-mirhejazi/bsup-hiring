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
}

export default new User();

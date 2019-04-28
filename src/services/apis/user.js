import Config from '../config';
import HTTP from '../http';

class User {
    http = null;

    constructor() {
      this.http = new HTTP({
        baseURL: Config.baseURL,
        withCredentials: true,
      });
    }

    info() {
      return this.http.get('/user');
    }
}

export default new User();

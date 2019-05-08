import axios from 'axios';

export default class HTTP {
    axios = null;

    constructor(axiosConfig) {
      this.axios = axios.create(axiosConfig);
    }

    get(uri, args) {
      try {
        return this.call.apply(this, ['GET', uri, args]);
      } catch (e) {
        throw new Error(e);
      }
    }

    post(uri, args) {
      try {
        return this.call.apply(this, ['POST', uri, args, {
          headers: {
            'content-type': 'application/json',
          },
        }]);
      } catch (e) {
        throw new Error(e);
      }
    }

    put(uri, args) {
      try {
        return this.call.apply(this, ['PUT', uri, args]);
      } catch (e) {
        throw new Error(e);
      }
    }

    delete(uri, args) {
      try {
        return this.call.apply(this, ['DELETE', uri, args]);
      } catch (e) {
        throw new Error(e);
      }
    }

    async call(method, uri, { params, query, body } = {}, config = {}) {
      const url = HTTP.parseURI(uri, params);

      const request = {
        ...config,
        url,
        method,
      };

      // if (query) {
      //   request.params = query;
      // }

      if (body) {
        request.params = body;
      }

      console.log(request);

      let res;

      try {
        res = await this.axios(request);
      } catch (e) {
        throw new Error(e);
      }

      return res;
    }

    static parseURI(uri, params) {
      return String(uri.replace(/:[^:/]+/g, (matched) => {
        const value = params[matched.substr(1)];

        return value !== undefined ? String(value) : matched;
      }));
    }
}

export default class Storage {
  static write(key, value) {
    localStorage.setItem(key, value);
  }

  static read(key) {
    return localStorage.getItem(key);
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}

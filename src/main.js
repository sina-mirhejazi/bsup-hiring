import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Notify from './services/notify';

Vue.config.productionTip = false;

Vue.use(Notify);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

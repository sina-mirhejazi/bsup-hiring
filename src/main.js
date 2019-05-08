import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckCircle,
  faExclamationCircle,
  faTimes,
  faInfoCircle,
  faFlag,
  faSearch,
  faHandHoldingUsd,
  faUserAlt,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store/index';
import Notify from './services/notify';

library.add(
  faCheckCircle,
  faExclamationCircle,
  faTimes,
  faInfoCircle,
  faFlag,
  faSearch,
  faHandHoldingUsd,
  faUserAlt,
  faPlus,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Notify);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

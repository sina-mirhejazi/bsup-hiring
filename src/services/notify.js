/* eslint-disable no-param-reassign */
import Vue from 'vue';
import AlertComponent from '@/components/Alert.vue';

export const notify = ({
  title,
  message,
  type = 'primary',
  duration = 0,
  withIcon = true,
} = {}) => {
  const Alert = Vue.extend(AlertComponent);

  const alert = new Alert({
    data: {
      title,
      message,
      type,
      duration,
      withIcon,
    },
  });

  alert.$mount();

  document.body.appendChild(alert.$el);
};

export default {
  install(vue) {
    vue.notify = notify;
    vue.prototype.$notify = notify;
  },
};

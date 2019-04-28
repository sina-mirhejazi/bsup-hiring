import Notification from './Notification.vue';

export default {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$notify = ({ title, message, type } = {}) => {
      const Notify = Vue.extend(Notification);

      console.log(Notify);

      const notify = new Notify({
        data: {
          title,
          message,
          type,
        },
      });

      notify.$mount();

      document.body.appendChild(notify.$el);
    };
  },
};

import AlertComponent from '@/components/Alert.vue';

export default {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$notify = ({
      title,
      message,
      type = 'primary',
      duration = 0,
      withIcon = true,
    } = {}) => {
      const Alert = Vue.extend(AlertComponent);

      const notify = new Alert({
        data: {
          title,
          message,
          type,
          duration,
          withIcon,
        },
      });

      notify.$mount();

      document.body.appendChild(notify.$el);
    };
  },
};

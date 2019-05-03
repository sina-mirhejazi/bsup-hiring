import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

export const routerConfig = {
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition = { x: 0, y: 0 }) {
    return savedPosition;
  },
};

const router = new VueRouter(routerConfig);

Vue.router = router;

export default router;

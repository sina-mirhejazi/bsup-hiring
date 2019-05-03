export default [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/account/Login.vue'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/authorize',
    name: 'authorize',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/account/Authorize.vue'),
    meta: {
      auth: false,
    },
  },
];

export default [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/account/Login.vue'),
    meta: {
      auth: false,
    },
  },
];

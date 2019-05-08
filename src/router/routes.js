export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Layout.vue'),
    redirect: '/books',
    meta: {
      auth: true,
    },
    children: [
      {
        path: '/books',
        name: 'books',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/Books.vue'),
        meta: {
          title: 'Books',
        },
      },
      {
        path: '/other',
        name: 'other',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/Other.vue'),
        meta: {
          title: 'Other',
        },
      },
    ],
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

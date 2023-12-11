// 对外暴露配置路由
const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 命名路由
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: false,
    },
    children: [
      {
        path: '/ceshi1',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试1',
          hidden: false,
        },
      },
      {
        path: '/ceshi2',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '测试2',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/demo',
    component: () => import('@/views/demo.vue'),
    name: 'demo',
    meta: {
      title: 'svg-demo',
      hidden: false,
    },
  },
  {
    path: '/:pathMatch(.*)*', // 任意路由重定向到404
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
];
export default constantRoutes;

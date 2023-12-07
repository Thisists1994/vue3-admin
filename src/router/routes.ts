// 对外暴露配置路由
const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 命名路由
  },
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/demo',
    component: () => import('@/views/demo.vue'),
    name: 'demo',
  },
  {
    path: '/:pathMatch(.*)*', // 任意路由重定向到404
    redirect: '/404',
    name: 'Any',
  },
];
export default constantRoutes;

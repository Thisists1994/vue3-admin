import Layout from '@/layout/index.vue';
import type { RouteRecordRaw } from 'vue-router';
// 对外暴露配置路由
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 命名路由
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Promotion',
    },
  },
  {
    path: '/',
    component: Layout,
    name: 'layout',
    meta: {
      title: 'layout',
      hidden: true,
      icon: 'Avatar',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    component: Layout,
    name: 'Acl',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'Acl',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Grid',
        },
      },
    ],
  },
  {
    path: '/product',
    component: Layout,
    name: 'Product',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'Goods',
    },
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'ShoppingCartFull',
        },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          hidden: false,
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          hidden: false,
          icon: 'Grid',
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          hidden: false,
          icon: 'Grid',
        },
      },
    ],
  },
  {
    path: '/chat',
    component: Layout,
    name: 'Chat',
    meta: {
      title: '聊天室',
      hidden: true,
      icon: 'ChatRound',
    },
    children: [
      {
        path: '/chat/chatPrivate',
        component: () => import('@/views/chat/index.vue'),
        name: 'chatPrivate',
        meta: {
          title: '聊天',
          hidden: false,
          icon: 'ChatRound',
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
      hidden: true,
      icon: 'Warning',
    },
  },
  {
    path: '/demo',
    component: () => import('@/views/demo.vue'),
    name: 'demo',
    meta: {
      title: 'svg-demo',
      hidden: false,
      icon: 'Bell',
    },
  },
  {
    path: '/:pathMatch(.*)*', // 任意路由重定向到404
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'Bell',
    },
  },
];
export default constantRoutes;

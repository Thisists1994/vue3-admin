// vue-router 实现模版路由配置
import { createRouter, createWebHashHistory } from 'vue-router';
import constantRoutes from './routes';

// 创建路由器
let router = createRouter({
  // hash路由模式
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ top: 0, left: 0 }), // 滚动行为
});
export default router;

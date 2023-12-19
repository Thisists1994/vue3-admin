// import { createApp } from 'vue';
import { ViteSSG } from 'vite-ssg';
// import './style.css' // vite+vue默认样式
import App from '@/App.vue';
// 引入element-plus插件与样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入pinia
import pinia from './store';
import 'virtual:svg-icons-register'; // 集成SVG插件需要配置代码
// import SvgIcon from '@/components/SvgIcon/index.vue' // 1. 注册单个全局组件
// app.component('SvgIcon', SvgIcon) // 2. 注册单个全局组件
// 引入自定义插件对象:注册整个项目全局组件
// 引入模版的全局样式
import '@/styles/index.scss';
// 引入路由
import router from './router';
import routes from './router/routes';
import globalComponet from '@/components';

// 全局加载 icons-vue
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createHead } from '@unhead/vue';
// const app = createApp(App);
// app.use(ElementPlus); // 安装element-plus插件
// app.use(globalComponet);
// // 注册路由
// app.use(router);
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }
// app.use(pinia);

// // 将应用挂载到挂载点上
// app.mount('#app');
console.log(`当前环境---${import.meta.env.VITE_USER_NODE_ENV}`); // 获取当前环境变量
// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    app.use(ElementPlus); // 安装element-plus插件
    app.use(globalComponet);
    app.use(pinia);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
);

import { createApp } from 'vue';
// import './style.css' // vite+vue默认样式
import App from '@/App.vue';
// 获取应用实例对象
const app = createApp(App);

// 引入element-plus插件与样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
app.use(ElementPlus); // 安装element-plus插件
import 'virtual:svg-icons-register'; // 集成SVG插件需要配置代码
// import SvgIcon from '@/components/SvgIcon/index.vue' // 1. 注册单个全局组件
// app.component('SvgIcon', SvgIcon) // 2. 注册单个全局组件
// 引入自定义插件对象:注册整个项目全局组件
import globalComponet from '@/components';
app.use(globalComponet);
// 引入模版的全局样式
import '@/styles/index.scss';
// 引入路由
import router from './router';
// 注册路由
app.use(router);
// 全局加载 icons-vue
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 引入pinia
import pinia from './store';
app.use(pinia);

// 将应用挂载到挂载点上
app.mount('#app');
console.log(`当前环境---${import.meta.env.VITE_USER_NODE_ENV}`); // 获取当前环境变量

// 此页面用于配置代理跨域  vue2里的 config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; // 引入SVG需要用到的插件
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  console.log('111----' + command);
  return {
    plugins: [
      vue(),
      // 使用svg-icon插件
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      // 使用mock
      viteMockServe({
        localEnabled: command === 'serve', // 保证开发阶段可以使用mock接口
      }),
    ],
    server: {
      host: '0.0.0.0',
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // 配置css里scss的全局变量
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});

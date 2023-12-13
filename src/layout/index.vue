<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          :background-color="sliderConfig.menuBg"
          :text-color="sliderConfig.menuText"
          :unique-opened="false"
          :active-text-color="sliderConfig.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
          :default-active="$route.path"
          router
        >
          <Menu :menuList="userStore.menuRouters"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">456</div>
    <!-- 内容展示区域 -->
    <div class="layout_main">
      <Appmain></Appmain>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useRoute } from 'vue-router';
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import sliderConfig from '@/styles/slider.module.scss';
import Appmain from './AppMain/index.vue';
import useUserStore from '@/store/modules/user';
const userStore = useUserStore();
// const $route = useRoute();
// console.log($route.path);
</script>
<script lang="ts">
export default {
  name: 'Layout',
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
.layout_container {
  @include clearfix;
  position: relative;
  height: 100vh; // 100%?
  width: 100%;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    color: #fff;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: cyan;
    position: fixed;
    top: 0;
    left: $base-menu-width;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    background: pink;
    padding: 20px;
    overflow: auto;
  }
}
</style>

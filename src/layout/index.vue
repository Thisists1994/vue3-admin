<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">456</div>
    <!-- 内容展示区域 -->
    <div class="layout_main">
      <p style="height: 10000px">内容展示</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue';
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

<template>
  <div class="logo" v-if="setting.sidebarLogo">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting';
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    width: 40px;
    height: 40px;
    display: block;
  }
  p {
    font-size: $base-menu-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>

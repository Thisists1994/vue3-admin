<template>
  <div class="tabbar">
    <div class="tabber_left">
      <Breadcrumb />
    </div>
    <div class="tabber_right">
      <Handler />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue';
import Handler from './handler/index.vue';
console.log();
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbd9d9;
  .tabber_left {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
  .tabber_right {
    display: flex;
    align-items: center;
  }
}
</style>

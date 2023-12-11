<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <span>
            <el-icon><House /></el-icon>
          </span>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 只有一个子路由 -->
    <template v-if="item.children?.length == 1">
      <el-menu-item
        v-if="!item.children[0].meta.hidden"
        :key="item.path"
        :index="item.children[0].path"
      >
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有多个子路由 -->
    <el-sub-menu v-if="item.children?.length > 1" :index="item.path">
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menu-list="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
defineProps(['menuList']);
</script>
<script lang="ts">
export default {
  name: 'Menu',
};
</script>

<style scoped></style>

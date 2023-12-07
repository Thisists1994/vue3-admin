<template>
  <div>
    <svg :style="style">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  //xlink:href属性前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用图标名称
  name: {
    type: String,
  },
  color: {
    type: String,
    default: '',
  },
  style: {
    type: Object,
    default: {
      width: '16px',
      height: '16px',
    },
  },
})
</script>

<style scoped></style>

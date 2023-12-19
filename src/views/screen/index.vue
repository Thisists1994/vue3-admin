<template>
  <Head>
    <title>这是一个demo</title>
    <meta name="这是一个demo" content="这是一个demo" />
  </Head>
  <div>{{ text }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Head } from '@unhead/vue/components';

const text = ref('数据大屏一级');
</script>

<style scoped></style>

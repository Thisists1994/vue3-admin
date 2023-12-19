<template>
  <div>
    <el-config-provider :locale="locale">
      <el-button type="primary" :icon="Plus">Primary</el-button>
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
      <Test></Test>
      <!-- 注册整个项目全局组件main.ts -->
      <svg-icon
        name="home"
        color="red"
        :style="{ width: '50px', height: '50px' }"
      ></svg-icon>
      <Pageination></Pageination>
    </el-config-provider>
    <h1>测试sass代码</h1>
  </div>
</template>

<script setup lang="ts">
// 引入图标组件
import { Plus } from '@element-plus/icons-vue';
import Test from '@/components/Test.vue';
import { reqUserInfo } from '@/api/user';
// import request from '@/utils/request'
import { onMounted, ref } from 'vue';
import { ElConfigProvider } from 'element-plus';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
const locale = zhCn;
let token = ref('Admin Token');
import { useHead } from '@unhead/vue';

useHead({
  title: 'Website Title-Demo',
  meta: [
    {
      name: '关键字 Demo',
      content: '描述 这只是个Demo',
    },
  ],
});
onMounted(() => {
  // request({
  //   url: '/user/info',
  //   method: 'get',
  //   headers: {
  //     token: 'Admin Token',
  //   },
  // }).then((res) => {
  //   console.log(res.data)
  // })
  reqUserInfo(token.value).then((res) => {
    console.log(res);
  });
});
</script>

<style scoped></style>

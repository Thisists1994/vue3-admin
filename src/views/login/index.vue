<template>
  <div class="container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到Vue3+Vite实战</h2>
          <el-form-item>
            <el-input
              prefix-icon="user"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              prefix-icon="lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="default"
              class="login_btn"
              @click="handelerLogin"
              :loading="btnLoading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import useUserStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';

const $route = useRouter();
const userStore = useUserStore();
const loginForm = reactive({ username: 'admin', password: '111111' });
const btnLoading = ref(false);

const handelerLogin = () => {
  btnLoading.value = true;
  userStore
    .userLogin(loginForm)
    .then(() => {
      $route.push('/');
      ElNotification({
        type: 'success',
        message: '登录成功',
      });
    })
    .catch((err) => {
      ElNotification({
        type: 'error',
        message: err,
      });
    })
    .finally(() => {
      btnLoading.value = false;
    });
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
  }
  h1 {
    color: #fff;
    font-size: 40px;
  }
  h2 {
    color: #fff;
    font-size: 20px;
    margin: 20px 0;
  }
  .login_btn {
    width: 100%;
  }
}
</style>

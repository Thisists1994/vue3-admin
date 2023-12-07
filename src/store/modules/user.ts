// 创建用户相关的小仓库

import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user/index.ts';
import type { loginParam } from '@/api/user/type';
/**
 * state 存储数据的地方
 * actions 异步|逻辑的部分
 * getters 计算属性
 */
const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
    };
  },
  actions: {
    async userLogin(param: loginParam) {
      const res = await reqLogin(param);
      const {
        code,
        data: { token, message },
      } = res;
      if (code == 200) {
        this.token = token;
        // 由于pinia|vuex存储数据其实就是利用的js对象,所以本地持久化存储一份
        localStorage.setItem('token', token);
        return 'ok';
      } else {
        return Promise.reject(message);
      }
    },
  },
  getters: {},
});

export default useUserStore;

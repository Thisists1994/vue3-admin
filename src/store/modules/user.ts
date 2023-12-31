// 创建用户相关的小仓库
import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user/index.ts';
import { getToken, setToken, removeToken } from '@/utils/auth';
import constantRoutes from '@/router/routes';
import type { loginParam, loginResponseData } from '@/api/user/type';
import type { RouteRecordRaw } from 'vue-router';

interface UserState {
  token: string | null;
  menuRouters: RouteRecordRaw[];
}
/**
 * state 存储数据的地方
 * actions 异步|逻辑的部分
 * getters 计算属性
 */
const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: getToken(),
      menuRouters: constantRoutes,
    };
  },
  actions: {
    SET_TOKEN(token: string) {
      this.token = token;
    },
    async userLogin(param: loginParam) {
      const res: loginResponseData = await reqLogin(param);
      const {
        code,
        data: { token, message, username },
      } = res;
      if (code == 200) {
        this.token = <string>token;
        // 由于pinia|vuex存储数据其实就是利用的js对象,不可持久化，所以本地持久化存储一份
        if (username) localStorage.setItem('userName', username);
        setToken(token!);
        this.SET_TOKEN(token!);
        return 'ok';
      } else {
        return Promise.reject(message);
      }
    },
  },
  getters: {},
});

export default useUserStore;

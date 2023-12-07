// 统一管理用户相关的接口
import request from '@/utils/request';
import type { loginParam, loginResponseData, userResponseData } from './type';
// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}
// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginParam) => {
  // return request.post<any, loginResponseData>(API.LOGIN_URL, data);
  return request<any, loginResponseData>({
    url: API.LOGIN_URL,
    method: 'post',
    data,
  });
};
// 获取用户信息
export const reqUserInfo = (token: string) => {
  return request<any, userResponseData>({
    url: API.USERINFO_URL,
    method: 'get',
    headers: { token },
  });
};

// 登录接口需要携带参数ts类型
export interface loginParam {
  username: string;
  password: string;
}
interface dataType {
  token?: string;
  message?: string;
}
// 登录接口返回的数据类型
export interface loginResponseData {
  code: number;
  data: dataType;
}

interface checkUser {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
interface userInfo {
  checkUser: checkUser;
}
// 定义服务器返回用户相关的数据类型
export interface userResponseData {
  code: number;
  data: userInfo;
}

// 进行axios二次封装:使用请求与响应拦截器
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 1. 利用axios对象的create方法,创建axios实例(配置:基础路径,超时的时间)
const request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000, //超时
});
// 2.给request实例添加 请求拦截器
request.interceptors.request.use((config) => {
  // config配置对象,->headers属性请求头,经常给服务器端携带公共参数
  return config; // 返回配置对象
});

// 2.给request实例添加 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log('错误---', error);
    ElMessage({
      type: 'error',
      message: '接口错误',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

// 对外暴露
export default request;

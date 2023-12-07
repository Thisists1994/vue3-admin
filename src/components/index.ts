// 引入项目中全部的全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pageination from '@/components/Pageination/index.vue'
import type { App, Component } from 'vue'

const globalComponents: { [name: string]: Component } = { SvgIcon, Pageination }
// console.log(globalComponents)
// 对外暴露插件对象
export default {
  // 必须是install方法
  install(app: App) {
    // 遍历注册
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key])
    })
    console.log('遍历注册全局组件')
  },
}

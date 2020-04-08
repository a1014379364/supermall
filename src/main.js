import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

import toast from '@/components/common/toast'

Vue.config.productionTip = false

//创建事件总线
Vue.prototype.$bus = new Vue()

Vue.use(ElementUI)
Vue.use(toast)//安装toast插件

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载的插件
Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

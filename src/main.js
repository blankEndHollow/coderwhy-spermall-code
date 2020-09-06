import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'

import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

import toast from "components/content/toast"

Vue.config.productionTip = false
//添加事件总线
Vue.prototype.$bus= new Vue();
//加载弹框
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)
//使用懒加载
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/loading.gif'),
  error: require('./assets/img/common/error.png'),
})
new Vue({
  render: h => h(App),
  router,
  store,
})
.$mount('#app')

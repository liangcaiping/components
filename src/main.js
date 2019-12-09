// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入element-ui框架
import ElementUI from 'element-ui'
//导入element-ui的样式
import '../node_modules/element-ui/lib/theme-chalk/index.css'
//导入公共样式
import '@/assets/css/common.css'


Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

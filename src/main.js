import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'common/default'
import 'common/remAdaptation'
import 'common/compatible'
// import 'common/wxConfig'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
import {post,fetch,patch,put} from 'common/http'
//这里定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

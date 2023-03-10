import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { fn } from '@/utils/common'
import logonComponents from './components/config'

Vue.config.productionTip = false

logonComponents(Vue)

Vue.use(ElementUI)
Vue.prototype.$fn = fn

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

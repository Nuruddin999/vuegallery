import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
import router from "./router/index"
import VueRouter from 'vue-router';
import ApiPlugin from "./plugins/api"
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ApiPlugin)
new Vue({
  render: h => h(App),
  el: '#app',
  router,
  store
})

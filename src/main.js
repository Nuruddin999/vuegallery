import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
import router from "./router/index"
import VueRouter from 'vue-router';
import ApiPlugin from "./plugins/api"
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ApiPlugin)
new Vue({
  render: h => h(App),
  el: '#app',
  router,
  vuetify,
  store
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Directives from './views/directives'

import Components from "@/views/components"

Vue.use(Directives);

Vue.use(Components);


Vue.config.productionTip = false;
var dd = {
  age: 20,
  hobby: 'drawing'
}

/* eslint-disable no-new */
var vm = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: '<App/>'
})
vm.$userConfig = {
  issigned: false
}

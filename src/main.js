import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import route from './router/router.js'
import 'materialize-css/dist/js/materialize.min'
import VueWindowSize from 'vue-window-size';

Vue.config.productionTip = false
Vue.use(VueWindowSize)
new Vue({
  router:route,
  store,
  VueWindowSize,
  render: h => h(App),

}).$mount('#app')

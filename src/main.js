import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'


const backEnd = 'http://localhost:8000/api/';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$backEnd = backEnd;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

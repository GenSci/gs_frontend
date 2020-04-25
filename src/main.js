import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import vuetify from './plugins/vuetify';


const backEnd = 'http://192.168.1.13';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$backEnd = backEnd;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

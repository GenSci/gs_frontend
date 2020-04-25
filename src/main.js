import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'


const backEnd = 'http://192.168.1.13';

Vue.use(Buefy)
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$backEnd = backEnd;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

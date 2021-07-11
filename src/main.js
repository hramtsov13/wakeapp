import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import less from './assets/styles.less';
import axios from 'axios';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  less,
  axios,
  render: (h) => h(App),
}).$mount('#app');

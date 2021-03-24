import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import 'vue-awesome/icons/flag';
import 'vue-awesome/icons';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
import VueYoutube from 'vue-youtube';

Vue.use(VueToast);
Vue.use(VueYoutube);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

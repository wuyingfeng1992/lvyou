import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/*import axios from 'axios';
console.log(axios,'少时诵诗书所')
Vue.use(axios)*/
Vue.use(ElementUI)
import { setDPR, remChange } from './js/remChange';
setDPR();
remChange();
import fullCalendar from 'vue-fullcalendar'
Vue.component('full-calendar', fullCalendar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import $ from 'jquery';
import VueRouter from 'vue-router'
import Project from './components/Project'
import Login from './components/Login'
import Home from './components/Home'
import router from './router'
import global from './components/Global'
import util from './assets/js/util'

// import axios from 'axios'
// axios.defaults.withCredentials=true;//让ajax携带cookie
// Vue.prototype.$axios = axios;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.GLOBAL = global;
Vue.use(util);

//这两行，如果要验证登录，就必须设置credentials为true。
//具体原理不明，貌似并没有用sessionid
//相应的，后端得设置cookies的跨域问题
Vue.http.options.xhr = { withCredentials: true };
Vue.http.interceptors.push((request, next) => {
    request.credentials = true;
    next();
});

// Vue.http.options.emulateHTTP = true
// Vue.http.options.emulateJSON = true
/*new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');*/


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});



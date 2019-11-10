import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import $ from 'jquery';
Vue.config.productionTip = false;
import VueRouter from 'vue-router'
import Project from './components/Project'
Vue.use(VueResource);
Vue.use(VueRouter)



const Foo = { template: '<div>foo</div>' }
const routes = [
  { path: '/foo', component: Foo },
  { path: '/project', component: Project }
]

const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');

Vue.use(VueResource);
Vue.use(VueRouter)

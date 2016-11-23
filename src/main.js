import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

// webpack 的一个特性，可以在js中依赖css
import 'common/stylus/index.styl';

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
});

new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
});
// 默认访问到goods
router.push('/goods');

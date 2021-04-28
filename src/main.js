import Vue from 'vue'
import App from './App.vue'
import stores from './store'
import VueRouter from 'vue-router'
import routers from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  render: h => h(App),
  router,
  stores
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import articles from '@/assets/js/data.js'




Vue.config.productionTip = false

new Vue({
  mounted() {
    store.state.posts = articles
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

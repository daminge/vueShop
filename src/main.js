import Vue from 'vue'
import App from './App.vue'
import { Button } from 'mint-ui'

import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'

import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters/index'
//注册全局组件  mt-button
Vue.component(Button.name,Button)
Vue.use(VueLazyload,{
    loading
})

new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
  /*components:{App},
  template:'<App/>'*/
})





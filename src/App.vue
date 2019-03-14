<template>
<div id="app">
  <!-- <router-link to="/order">订单</router-link> -->
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.showFooter"/><!-- $route表示当前路由，点谁就是谁 -->
</div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {mapActions} from 'vuex'

 export default {
   data () {
     return {
     }
   },
   components: {
      FooterGuide
   },
   mounted () {
     this.getAddress()
     this.getUserInfo()
   },
   methods:{//注意映射函数方式调用action
     ...mapActions(['getAddress','getUserInfo'])
   }


 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5

</style>

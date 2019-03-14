import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from "./mutation_type";
import Vue from 'vue'


export default{
  [RECEIVE_ADDRESS] (state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state){
    state.userInfo = {}
  },
  [RECEIVE_INFO](state, { info }) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){
      /* food.count = 1 ,新增属性没有数据绑定效果，所以需要用下面的语法*/
      Vue.set(food,'count',1)
      state.cartFoods.push(food)/* 向cartFoods数组中加food对象，第一次才加，以后只加food.count */
    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--
      if(food.count===0){
          state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART](state){
    state.cartFoods.forEach((food) => food.count=0) 
    state.cartFoods = []
  },
  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
      state.searchShops = searchShops
  }





}





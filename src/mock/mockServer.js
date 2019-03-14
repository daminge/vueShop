/* 使用mockjs提供mock数据接口 ，将数据暴露成路由接口*/
import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/goods',{code:0,data:data.goods})
Mock.mock('/ratings', {code: 0, data: data.ratings})
Mock.mock('/info', {code: 0, data: data.info})
//mock模块就不用向外暴露东西











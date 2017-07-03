import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/page/Index'
import Creat from '@/page/creat'
import CreateSelect from '@/page/CreateSelect'
import CreatFinish from '@/page/CreatFinish'
import Error from '@/page/Error'
import Success from '@/page/Success'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/creat',
      component: Creat
    },
    {
      path: '/CreateSelect',
      component: CreateSelect
    },
    {
      path:'/creatFinish',
      component: CreatFinish

    },
    {
      path: '/error',
      component: Error
    },
    {
      path:'/CreatSuccess',
      component: Success
    },

    {
      path: '*',
      component: Index
    }
  ]
})

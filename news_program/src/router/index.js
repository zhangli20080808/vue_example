import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Follow from  '@/components/Follow'
import Column from '@/components/Column'
import Article from '@/components/Article .vue'
import UserInfo from '@/components/UserInfo.vue'

Vue.use(Router);

export default new Router({
  mode:'history',
  name: __dirname,
  scrollBehavior:()=>({y:0}),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/follow',
      name: 'Follow',
      component: Follow
    },
    {
      path: '/column',
      name: 'Column',
      component: Column
    },
    {
      path: '/article/:id',
      component: Article
    },
    {
      path:'/user-info',
      component: UserInfo
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]

})

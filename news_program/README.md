# news_program

> vue开发一个手机新闻站

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1.静态页面
2.规划组件结构
  Nav.vue
  Header.vue
  Home.vue
  ...
3.编写对应路由  vue-router
4.具体写某个组件功能
5.一些公共的文件  jquery 插件 一般都在主页引入
6.项目需要的模块   vue  vue-router axios
----------------------------
assets   ->静态资源css img js
导航处理 我们决定他的显示与否  发起一个action 页面切换
当我们路由切换为user-info的时候他才消失
我们发起一个动作－》action showHeader函数 commit去做一个提交

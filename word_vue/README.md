# word_vue

> 背单词

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

>less配置与应用

#我们的页面->page   1.进入判断 是否微信登陆cookies

创建计划  creat.vue    index.vue
页面切换动画  全局引入css 配置路由
weixin.php    cookies

http://www.huihuibeidanci.com/login_weixin/index.php?to=cet4
模拟  接收cookies  vuex全局
模拟我们放在dist中
如何去用我们的这些json数据呢   vuex   配置
新用户  老用户的判断 ok
我们通过ajax 的方式去读取这个newbi
<?php
if（$_COOKIES['openid']）

//'cookie_name'就是你要判断的cookie名
//echo empty($_COOKIE['cookie_name']) ? '次cookie不存在' : '此cookie存在';

?>
//浏览器里面查一下，再去数据库 有的话 已经注册  没有  去注册  0没creat    1老用户index

第一个页面  create     CreateSelect
选择考试时间 我们点击切换 需要把这个日期传递给vuex 本地保存变量
后端传个examTime
注册 遮罩  face组件

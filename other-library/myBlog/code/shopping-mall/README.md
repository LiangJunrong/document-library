商城
===

> 使用 Vue 搭建的商城

## 运行机制

```
# 安装依赖
npm install

# 在 localhost:8080 运行
npm run dev

# 打包部署到服务器
npm run build
```

# VS Code 插件

* vue VSCode Snippets：该插件可以方便编写 Vue 代码。例如，安装后，在页面中敲 `vbase` 并回车可以得到一个空模板，敲 `vdata` 可以获得一个 `data()` 方法。

<br>

# 学习笔记

<br>

## 前端开发环境
* 安装 `vue-cli`：`npm i vue-cli -g`
* 初始化 Vue 项目：`vue init webpack`
* 开启开发模式：`npm run dev`
* 打开浏览器，查看网页： `http://localhost:8080`

<br>

## Vant 引用
* 安装 Vant：`npm i vant -S`
* 通过安装 `babel-plugin-import` 按需引用组件模块：`npm i babel-plugin-import -D`
* 在 `.babelrc` 文件中配置 `plugins`：

```
{
  "presets": [
      ... 省略，详情在 .babelrc 中有，复制下面的 plugins 就行
  ],
  "plugins": [
    "transform-vue-jsx", 
    "transform-runtime",
    [
      "import",
      {
        "libraryName": "vant",
        "style": true
      }
    ]
  ]
}

```  

<br>

* 页面中引用 Vant 组件：

> src/main.js

```
import { Button } from 'vant'
Vue.use(Button)
```

<br>

> App.vue

```
<van-button type="primary">主要按钮</van-button>
```

<br>

## 移动端屏幕适配基础

> 知识普及
 
* 常见的移动端 web 布局适配方法
1. 固定高度，宽度百分比（过时，不推荐）
2. Media Query（媒体查询）：Bootstrap
3. Flex 布局：主流布局模式，采用 Flex + rem 进行移动端适配
4. rem：相对单位长度，相对于根元素( html )的 `font-size` 计算值的倍数

<br>

* js 控制适配屏幕

```
//得到手机屏幕的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
htmlDom.style.fontSize= htmlWidth/20 + 'px';
```

* jsliang 的 rem 适配

```
/*
 * 2018年7月25日10:38:23
 * 移动端rem适配，px:rem = 100:1
 * 该适配兼容UC竖屏转横屏出现的BUG
 * 自定义设计稿的宽度：designWidth
 * 最大宽度:maxWidth
 * 这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
*/
! function (e, t) {
    function n() {
        var n = l.getBoundingClientRect().width;
        t = t || 540, n > t && (n = t);
        var i = 100 * n / e;
        r.innerHTML = "html{font-size:" + i + "px;}"
    }
    var i, d = document,
        o = window,
        l = d.documentElement,
        r = document.createElement("style");
    if (l.firstElementChild) l.firstElementChild.appendChild(r);
    else {
        var a = d.createElement("div");
        a.appendChild(r), d.write(a.innerHTML), a = null
    }
    n(), o.addEventListener("resize", function () {
        clearTimeout(i), i = setTimeout(n, 300)
    }, !1), o.addEventListener("pageshow", function (e) {
        e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
    }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener(
        "DOMContentLoaded",
        function (e) {
            d.body.style.fontSize = "16px"
        }, !1)
}(750, 750);
```

* jsliang 的移动端 html 模板

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>HelloWorld</title>
</head>
<body>
  
  
  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
</body>
</html>
```

<br>

## 路由配置

&emsp;我们项目的目录一般放在 `src/components/pages` 中，现在我们删除掉 `src/components/HelloWorld.js` 这个文件，然后往里面新建 `ShoppingMall.vue` 文件，并在 `src/router/index.js` 中配置我们的路由：

> ShoppingMall.vue

```
<template>
    <div>
        <van-button type="primary">主要按钮</van-button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
```

<br>

> src/router/index.js

```
import Vue from 'vue'
import Router from 'vue-router'
import ShopingMall from '@/components/ShopingMall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopingMall',
      component: ShopingMall
    }
  ]
})
```

## Vant 布局

&emsp;我们在 `/src/main.js` 中引用 Vant 的 `Row` 和 `Col` 组件：

```
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Row, Col } from 'vant'

Vue
.use(Button)
.use(Row)
.use(Col)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```

<br>

&emsp;然后，我们在 `ShopingMall.vue` 中使用布局

```
<template>
    <div>
        <van-button type="primary">主要按钮</van-button>
        <van-row>
          <van-col span="8">span: 8</van-col>
          <van-col span="8">span: 8</van-col>
          <van-col span="8">span: 8</van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
```

&emsp;这样，我们就搞定了布局的引用。
Vue + Koa2 + MongoDB 搭建商城
===

> Create by **jsliang** on **2018-10-25 15:14:00**  
> Recently revised in **2018-10-27 10:03:35**

<br>

&emsp;**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 你们的 **star** 是我学习的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/other-library/Website/ShoppingMall/ShoppingMall.md)**

<br>

&emsp;本文通过 Vue + Koa2 + MongoDB 搭建一个春节/新年皮肤的商城。

&emsp;涉及技术点：

* Vue - `2.5.2`
* Vant - `1.3.8`
* Node - `8.11.2`
* Koa2 - 
* MongoDB - 

&emsp;**文章篇幅非常详细，推荐通过 `目录` 以及使用 `返回目录` 按钮，获得更好的阅读体验。**

&emsp;**如果你对文章的一些章节存在疑惑，请留言或者私聊 jsliang 提出来，因为 jsliang 在 Vue 某些方面的理解，是远远不及一些有丰富开发经验的 Vuer 的。**

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

| 目录名 |
| --- |
| <a name="catalog-chapter-one" id="catalog-chapter-one"></a>[一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 奇技淫巧](#chapter-three) |
| &emsp;[3.1 VS Code 插件](#chapter-three-one) |
| &emsp;[3.2 Iconfont-阿里巴巴矢量图标库](#chapter-three-two) |
| &emsp;[3.3 Vant——Vue的组件库](#chapter-three-three) |
| &emsp;&emsp;[3.3.1 引用 Vant 组件库](#chapter-three-three-one)|
| &emsp;&emsp;[3.3.2 Button 按钮](#chapter-three-three-two)|
| &emsp;&emsp;[3.3.3 Layout 布局](#chapter-three-three-three)|
| &emsp;[3.4 模拟网速缓慢 - Slow 3G](#chapter-three-four) |
| &emsp;[3.5 mock 数据 - Easy Mock](#chapter-three-five) |
| &emsp;[3.6 Chrome 插件 - Vue Devtool](#chapter-three-six) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 前端开发](#chapter-four) |
| &emsp;[4.1 vue-cli 的安装及使用](#chapter-four-one) |
| &emsp;[4.2 Vant 引用](#chapter-four-two) |
| &emsp;[4.3 移动端屏幕适配基础](#chapter-four-three) |
| &emsp;[4.4 路由配置](#chapter-four-four) |
| &emsp;[4.5 引用图片](#chapter-four-five) |
| &emsp;[4.6 引用 Axios 获取 API](#chapter-four-six) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;下载代码：代码在 GitHub 文档库中文章的同级 `code` 目录上，如果嫌 download 全部文档太麻烦，不想去 download 全部文档，那就点击链接加 QQ 群拿资料吧：[798961601](https://jq.qq.com/?_wv=1027&k=5bSk4rs)。  
&emsp;我是 **jsliang**，我在天书世界等你，噢不是……  
&emsp;我是 **jsliang**，想要资料就来砍我，哦不是……  
&emsp;我是 **jsliang**，我在 **jsliang** 资料群等你~  

&emsp;运行代码：

```
# 安装依赖
npm i

# 在 localhost:8080 运行
npm run dev

# 打包部署到服务器
npm run build
```

<br>

# <a name="chapter-three" id="chapter-three">三 奇技淫巧</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;在这个章节中，你可以看到 VS Code 的一些插件的妙用；可以看到 Iconfont 这个图标库的使用；可以看到一些比较实用的组件库例如Vant的介绍……  
&emsp;通过这些小技巧，提高你的开发效率。  
&emsp;如果这些小技巧你都用得非常熟练了，请通过目录跳转至第四章，开始编写前端代码。

<br>

## <a name="chapter-three-one" id="chapter-three-one">3.1 VS Code 插件</a>


> [返回目录](#catalog-chapter-three)

<br>

&emsp;使用方法：Visio Studio Code 软件 -> 扩展 --> 搜索关键字 -> 安装 -> 重启 VS Code

* Vetur：该插件可以使得 VS Code 能识别 `.vue` 文件，并支持 `.vue` 文件的语法高亮显示，同时，还兼顾大多数主流的前端开发和插件，例如 `Sass` 和 `TypeScript`。

* Vue VSCode Snippets：该插件可以方便编写 Vue 代码。通过安装后，在页面中敲 `vbase` 并回车可以得到一个空模板，敲 `vdata` 可以获得一个 `data()` 方法。

<br>

## <a name="chapter-three-two" id="chapter-three-two">3.2 Iconfont-阿里巴巴矢量图标库</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;在阿里巴巴图标库，设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。  

&emsp;地址：[阿里巴巴图标库](http://www.iconfont.cn/)

&emsp;使用方法，通过加入购物车的形式，将需要的图标一起打包下载。如果实在是不看攻略就搞不懂，可参考文档：[链接-如何使用iconfont下载图标？](https://www.cnblogs.com/hjvsdr/p/6639649.html)

<br>

## <a name="chapter-three-three" id="chapter-three-three">3.3 Vant——Vue的组件库</a>

> [返回目录](#catalog-chapter-three)

<br>  

&emsp;Vant 是轻量、可靠的移动端 Vue 组件库：[Vant 官网](https://youzan.github.io/vant/#/zh-CN/intro)

&emsp;这里我们讲一下 Vant 的基础引用，下面涉及到 Vant 的代码时，请小伙伴们直接查看上面的 Vant 官网。因为组件库的使用，只有自己去折腾几遍，才能玩得溜。

<br>

## <a name="chapter-three-three-one" id="chapter-three-three-one">3.3.1 引用 Vant 组件库</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;在通过 Vue-cli 安装了 Vue 项目的情况下，Vant 的安装及配置：

1. 安装 Vant：`npm i vant -S`
2. 通过安装 `babel-plugin-import` 按需引用组件模块：`npm i babel-plugin-import -D`
3. 在 `.babelrc` 文件中配置 `plugins`：

> .babelrc

```
{
  "presets": [
      ... 省略，详情在 .babelrc 中有，复制下面的 plugins 至代码中即可
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

## <a name="chapter-three-three-two" id="chapter-three-three-two">3.3.2 Button 按钮</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;这里讲解下页面中引用 Vant 的 Button 组件：

> src/main.js

```
import { Button } from 'vant'
Vue.use(Button)
```

<br>

> src/App.vue

```
<van-button type="primary">主要按钮</van-button>
```

<br>

&emsp;这样，我们可以通过引用组件的形式，引用 Vant，做到按需引用，对我们的项目是比较友好的。如果你想采用其他的引用技巧或者更进一步了解 Vant，请点击上面提及的 Vant 链接，直接访问即可。

<br>

## <a name="chapter-three-three-three" id="chapter-three-three-three">3.3.3 Layout 布局</a>

> [返回目录](#catalog-chapter-three)

<br>

&emsp;如果你使用过 bootstrap，你可能还记得它的 12 格栅格化布局，在 Vant 中，它不同于 bootstrap，它使用了 24 格布局：[Vant Layout 布局](https://youzan.github.io/vant/#/zh-CN/col)。  

&emsp;下面我们讲解它的使用：

&emsp;我们在 `src/main.js` 中引用 Vant 的 `Row` 和 `Col` 组件：

> src/main.js

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

> ShoppingMall.vue

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

&emsp;这样，我们就搞定了 Vant Layout 布局的引用。

<br>

## <a name="chapter-three-four" id="chapter-three-four">3.4 模拟网速缓慢 - Slow 3G</a>

> [返回目录](#catalog-chapter-three)

<br>  

&emsp;由于我们制作的是商城，到时候可能加载大量的图片。  
&emsp;所以，我们不仅需要考虑用户在 WiFi 下的愉快体验，更需要考虑在野外等手机信号差的 3G，甚至 2G 信号下商城的加载速度，从而优化用户的浏览体验。  
&emsp;因为我们平时在公司或者家里开发，都是 `WiFi` 网络。所以，在这里，我们使用 `Chrome` 控制台的 `Slow 3G`，通过加载PC端淘宝，进行网速慢的模拟。

&emsp;首先，我们通过 `Chrome` 打开淘宝首页，通过 `F12` 打开控制台，点开 `Network` 并通过按 `Ctrl + F5` 进行强制刷新，得到下面这个图：

![图](../../../public-repertory/img/other-website-ShoppingMall-2.png)

<br>

&emsp;可以看到，我们 WiFi 情况下，DOM 节点的内容加载为 1.02s。然后，我们按下面的图点开下拉菜单，选择 `Slow 3G`：

![图](../../../public-repertory/img/other-website-ShoppingMall-4.png)

<br>

&emsp;再通过 `Ctrl + F5` 进行强制刷新，模拟网速缓慢的情况：

![图](../../../public-repertory/img/other-website-ShoppingMall-3.png)

&emsp;可以看出，在网速缓慢的情况下，我们加载 DOM 节点的内容，加载了 `10.43s`。无疑，假设我们要开发的商城也是如此，当用户在网速更差的情况下，可能会选择直接直接关闭网站。  
&emsp;所以，通过网络缓慢的情景模拟，可以对网站做一些性能优化，从而减少我们的用户量。

<br>

## <a name="chapter-three-five" id="chapter-three-five">3.5 mock 数据 - Easy Mock</a>

> [返回目录](#catalog-chapter-three)

<br>  

&emsp;对于页面中最后需要调用接口渲染的数据，我们大概会使用两种方法：1. 直接在 `data` 中使用假数据，读取接口后再进行更新；2. 根据接口文档，进行 `mock`，获取 `mock` 数据。  
&emsp;在这里，我们介绍一种比较便捷的方式：[Easy Mock](https://www.easy-mock.com)  
&emsp;Easy Mock 是一个比较好用的图形化网站，小伙伴们点击进去会立刻 get 到它的设计意图，我们可以直接在项目中通过 `Axios` 直接调用它的链接，获取到数据。

<br>

## <a name="chapter-three-six" id="chapter-three-six">3.6 Vue 的 Chrome 插件 - Vue Devtool</a>

> [返回目录](#catalog-chapter-three)

<br>  

&emsp;如果你是 Vue 新手，那么，当你第一次运行 `npm run dev`，在 `localhost:8080` 中打开控制台会发现：

![图](../../../public-repertory/img/other-website-ShoppingMall-5.png)

<br>

&emsp;它提示我们安装个 Vue Devtools 的插件，来获得更好的开发体验：

```
Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools
```

<br>

&emsp;所以，我们下载了个 `Vue Devtools` 的插件，并进行了安装（插件安装包和安装方式小伙伴们自行百度，这里就不贴上来了：[参考地址1-安装方式](https://segmentfault.com/a/1190000009682735)、[参考地址2-安装包](http://chromecj.com/downloadstart.html#886)）

&emsp;安装完成后，我们可以刷新页面，可以在 Vue 项目的控制台中看到：

![图](../../../public-repertory/img/other-website-ShoppingMall-6.png)

&emsp;由于插件非常简洁，一看就懂，所以这里就不讲解了，这样我们就可以愉快地玩耍啦~

<br>

# <a name="chapter-four" id="chapter-four">四 前端开发</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;在这个章节，我们开始部署前端环境，开发静态页面，Mock 数据等等。

<br>

## <a name="chapter-four-one" id="chapter-four-one">4.1 vue-cli 的安装及使用</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;步骤：

1. 安装 `vue-cli`：`npm i vue-cli -g`
2. 初始化 Vue 项目：`vue init webpack`
3. 开启开发模式：`npm run dev`
4. 打开浏览器，查看网页： `http://localhost:8080`

<br>

## <a name="chapter-four-two" id="chapter-four-two">4.2 Vant 引用</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;Vant 是一个轻量、可靠的移动端 Vue 组件库。  
&emsp;如果你有使用过 ElementUI 等组件库就知道，Vant 的引用可以让你更快地部署项目。  
&emsp;所以，我们在第三章中大略讲了 Vant 的使用方式，组件库的使用，只有你去尝试过，才能显得更加熟练：[返回第三章 Vant 介绍](#chapter-three-three)

<br>

## <a name="chapter-four-three" id="chapter-four-three">4.3 移动端屏幕适配基础</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;知识普及：
 
* 常见的移动端 web 布局适配方法
1. 固定高度，宽度百分比（过时，不推荐）
2. Media Query（媒体查询）：Bootstrap
3. Flex 布局：主流布局模式，采用 Flex + rem 进行移动端适配
4. rem：相对单位长度，相对于根元素( html )的 `font-size` 计算值的倍数

<br>

&emsp;js 控制适配屏幕方式1：

> index.html

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>shopping-mall</title>
</head>

<body>
  <div id="app"></div>

  <script>
    window.onload = function () {
      //得到手机屏幕的宽度
      let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
      if (htmlWidth > 750) {
        htmlWidth = 750
      }
      //得到html的Dom元素
      let htmlDom = document.getElementsByTagName('html')[0];
      //设置根元素字体大小
      htmlDom.style.fontSize = htmlWidth / 20 + 'px';
    }
  </script>
</body>

</html>
```

<br>

&emsp;jsliang 的 rem 适配方式

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

<br>

&emsp;jsliang 的移动端 html 模板

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
  <div>Hello World!</div>
</body>
</html>
```

<br>

## <a name="chapter-four-four" id="chapter-four-four">4.4 路由配置</a>

> [返回目录](#catalog-chapter-four)

<br>

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

<br>


## <a name="chapter-four-five" id="chapter-four-five">4.5 引用图片</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;如果你没用过 `Vue-cli`，那么，你可能会对它的图片存放路径存在问题，因为它可以存放在 `src/assets` 及 `static` 这两个目录中。你可能对此感到疑惑，为什么它会有两个文件夹来进行存放呢？  
&emsp;讲个大白话：`src/assets` 目录中的图片是会被 `webpack` 打包成 base64 的，`static` 目录中的图片是不会被打包的。  
&emsp;那么，为什么会存在打包成 `base64` 的区别呢？因为当浏览器加载你的图片的时候，每一张图片就相当于一次 `http` 请求，当图片多了的时候，它就会损耗你的性能。所以，就像 [雪碧图](https://zhidao.baidu.com/question/646556016260409565.html) 的引用一样，在 vue-cli 的配置上：

```
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: utils.assetsPath('img/[name].[hash:7].[ext]')
  }
},
```

<br>

&emsp;可以看出，它对于小于 10K(10000/1024) 的图片，会打包成 base64，从而减少了我们在浏览器加载时的性能损耗。

<br>

&emsp;讲解完 `src/assets` 及 `static` 的区别后，我们继续讲在这两个文件夹中图片的引用。  
&emsp;由于 `src/assets` 目录中，我们存放一些比较小的，需要打包的图片，所以我们应该通过 require 的方式，将它当成模块进行引用。  
&emsp;而在 `static` 目录的图片，`vue-cli` 已经对其进行了个解析：   

> config/index/js

```
'use strict'

const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    //... 省略剩下的代码
  },
   build: {
    index: path.resolve(__dirname, '../dist/index.html'),

    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // ...省略剩下的代码
   }
}
```

&emsp;从中，可以看出，对于 `static` 的资源，`vue-cli` 在开发模式 `dev` 以及打包模式 `build` 中都进行了配置，它不会被 `webpack` 进行打包，属于 “静态资源”。所以，在项目中引用 `src/assets` 及 `static` 下的图片资源，我们可以：

> ShoppingMall.vue
```
<template>
  <div>
      <van-row>
        <!-- 不推荐通过下面的方式直接引用 assets 图片，因为 webpack 打包可能没法成功打包 -->
        <van-col span="8"><img src="../../assets/img/emoticon_happy.png" alt="表情包"></van-col>
        <van-col span="8"><img :src="icon1" alt="表情包"></van-col>
        <van-col span="8"><img :src="icon2" alt="表情包"></van-col>
      </van-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        icon1: require('../../assets/img/emoticon_cool.png'), // 引用 assets 下的图片
        icon2: '/static/img/emoticon_cute.png' // 引用 static 下的图片
      }
    }
  }
</script>

<style scoped>

</style>
```

<br>

&emsp;通过 `npm run dev` 编译后，浏览器 `localhost:8080` 展示为：

![图](../../../public-repertory/img/other-website-ShoppingMall-1.png)

<br>

## <a name="chapter-four-six" id="chapter-four-six">4.6 引用 Axios 获取 API</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;步骤

1. 安装 `axios`：`npm i axios -S`
2. 在 `src/components/pages/ShoppingMall.vue` 的 `<script>` 标签中引用并使用 `axios`：

```
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        icon1: require('../../assets/img/emoticon_cool.png'), // 引用 assets 下的图片
        icon2: '/static/img/emoticon_cute.png' // 引用 static 下的图片
      }
    },
    created() {
      axios({
        url: 'https://www.easy-mock.com/mock/5bd2b50e6388c25a14965a22/index',
        method: 'get'
      }).then(res => {
        console.log(res.data.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>
```

<br>

&emsp;然后，我们打开 `localhost:8080`，查看控制台，可以看到它进行了正常的输出。

<br>

# 未完待续

&emsp;**如果小伙伴们觉得本文还不错，记得给个 **star** ， 你们的 **star** 是我学习的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/other-library/Website/ShoppingMall/ShoppingMall.md)**

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
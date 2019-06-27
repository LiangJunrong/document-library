Vue 开发准备
===

> Create by **jsliang** on **2018-12-24 11:54:30**  
> Recently revised in **2019-05-31 13:48:20**

在使用 VueCli 开发之前，有些步骤是重复的，如果一个一个重新写过比较麻烦，故在此记录一些常用步骤。

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| [二 大体步骤](#chapter-two) |
| [三 详细步骤](#chapter-three) |
| &emsp;[3.1 安装 VueCli](#chapter-three-one) |
| &emsp;[3.2 项目目录结构](#chapter-three-two) |
| &emsp;[3.3 配置使用 less](#chapter-three-three) |
| &emsp;[3.4 重置 CSS 样式](#chapter-three-four) |
| &emsp;[3.5 引用左上角图标](#chapter-three-five) |
| &emsp;[3.6 按需引用 ElementUI](#chapter-three-six) |
| &emsp;[3.7 Axios 封装使用](#chapter-three-seven) |
| &emsp;[3.8 动态引用组件](#chapter-three-eight) |
| &emsp;[3.9 图片的引用及打包](#chapter-three-night) |
| &emsp;[3.10 rem 适配](#chapter-three-ten) |

## <a name="chapter-two" id="chapter-two">二 大体步骤</a>

> [返回目录](#chapter-one)

1. 启动 VueCli 开发模式
2. 引用重置 CSS 样式表
3. 引用右上角 icon 图标
4. 按需引用 ElementUI
5. 引用并封装 Axios

## <a name="chapter-three" id="chapter-three">三 详细步骤</a>

> [返回目录](#chapter-one)

### <a name="chapter-three-one" id="chapter-three-one">3.1 安装 VueCli</a>

> [返回目录](#chapter-one)

1. 安装 `vue-cli`：`npm i vue-cli -g`
2. 初始化 Vue 项目：`vue init webpack`
3. 开启开发模式：`npm run dev`
4. 打开浏览器，查看网页： `http://localhost:8080`

### <a name="chapter-three-two" id="chapter-three-two">3.2 项目目录结构</a>

> [返回目录](#chapter-one)

```
- build —————————————————————— 构建脚本目录
  - build.js                —— 运行本地构建服务器，可以访问构建后的页面
  - check-versions.js       —— 检查版本
  - utils.js                —— 构建相关工具方法
  - vue-loader.conf.js      —— 判断是否为生产环境
  - webpack.base.conf.js    —— webpack 开发环境配置
  - webpack.prod.conf.js    —— webpack 生产环境配置
- config ————————————————————— 配置
  - dev.env.js              —— 开发配置
  - index.js                —— 配置总文件
  - prod.env.js             —— 打包配置
- node_modules ——————————————— Node 依赖包，请忽略
- src ———————————————————————— 主要工作区
  - api                     —— 接口统一管理文件夹
    - api.js                —— 接口文件
  - assets                  —— 需要压缩文件
    - img                   —— 图片
  - components              —— 共用组件
  - pages                   —— 页面
  - router                  —— 路由文件夹
    - index.js              —— 路由文件
  - style                   —— 样式文件
    - reset.less            —— 重置样式
    - common.less           —— 公共样式
  - utils                   —— 工具文件夹
    - md5.js                —— md5 加密
 App.vue ————————————————————— 根组件
 main.js ————————————————————— 根组件配置
- static ————————————————————— 静态资源文件，不会被打包
  - css                     —— CSS 文件夹
    - reset.css             —— 重置样式
  - img                     —— 图片文件夹
- .babelrc ——————————————————— babel 配置，转换 ES6/7 为 ES5
- .editorconfig —————————————— 编辑器风格配置
- .gitignore ————————————————— 忽略 git 上传文件
- .postcssrc.js —————————————— 转换 CSS 的插件
- index.html ————————————————— 首页
- package.json ——————————————— 定义这个项目所需要的各种模块
- README.md —————————————————— 开搞必读文档
```

### <a name="chapter-three-three" id="chapter-three-three">3.3 配置使用 less</a>

> [返回目录](#chapter-one)

**步骤 1**. 安装 less 和 less-loader：`cnpm i less less-loader -D`

**步骤 2**. 添加 webpack 打包规则：

> build/webpack.base.conf.js

```js
{
  test: /\.less$/,
  loader: "style-loader!css-loader!less-loader"
}
```

**步骤 3**. 在 style 中使用 less：

```html
<style lang="less" scoped>
.left {
  border: 1px solid #ccc;
  .left-one {
    font-size: 10px;
  }
}
</style>
```

**步骤 4**. 引用下边的 reset.less 和 common.less

> App.vue

```js
<style lang="less">
  @import './style/reset';
  @import './style/common';
</style>
```

### <a name="chapter-three-four" id="chapter-three-four">3.4 重置 CSS 样式</a>

> [返回目录](#chapter-one)

**步骤 1**. 引入重置样式表

> static/css/reset.css

```css
/* 
  * reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
  * The purpose of reset is not to allow default styles to be consistent across all browsers, but to reduce the potential problems of default styles.
  * create by jsliang
*/

/** 清除内外边距 - clearance of inner and outer margins **/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* 结构元素 - structural elements */
dl, dt, dd, ul, ol, li, /* 列表元素 - list elements */
pre, /* 文本格式元素 - text formatting elements */
form, fieldset, legend, button, input, textarea, /* 表单元素 - from elements */
th, td /* 表格元素 - table elements */ {
  margin: 0;
  padding: 0;
}

/** 设置默认字体 - setting the default font **/
body, button, input, select, textarea {
  font: 18px/1.5 '黑体', Helvetica, sans-serif;
}
h1, h2, h3, h4, h5, h6, button, input, select, textarea { font-size: 100%; }

/** 重置列表元素 - reset the list element **/
ul, ol { list-style: none; }

/** 重置文本格式元素 - reset the text format element **/
a, a:hover { text-decoration: none; }

/** 重置表单元素 - reset the form element **/
button { cursor: pointer; }
input { font-size: 18px; outline: none; }

/** 重置表格元素 - reset the table element **/
table { border-collapse: collapse; border-spacing: 0; }

/** 图片自适应 - image responsize **/
img { border: 0; display: inline-block; width: 100%; max-width: 100%; height: auto; vertical-align: middle; }

/* 
    * 默认box-sizing是content-box，该属性导致padding会撑大div，使用border-box可以解决该问题
    * set border-box for box-sizing when you use div, it solve the problem when you add padding and don't want to make the div width bigger
*/
div, input { box-sizing: border-box; }

/** 清除浮动 - clear float **/
.jsliang-clear:after, .clear:after {
  content: '\20';
  display: block;
  height: 0;
  clear: both;
}
.jsliang-clear, .clear {
  *zoom: 1;
}

/** 设置input的placeholder - set input placeholder **/
input::-webkit-input-placeholder { color: #919191; font-size: .26rem } /* Webkit browsers */
input::-moz-placeholder { color: #919191; font-size: .26rem } /* Mozilla Firefox */
input::-ms-input-placeholder { color: #919191; font-size: .26rem } /* Internet Explorer */
```

**步骤 2**. 引用重置样式表

> src/main.js

```js
// 引入样式重置
import '../static/css/reset.css'
```

### <a name="chapter-three-five" id="chapter-three-five">3.5 引用左上角图标</a>

> [返回目录](#chapter-one)

**步骤 1**. 在下面目录存放 ico 图片：[在线制作 ico 图标](http://www.bitbug.net/)

> static/img/icon.ico

**步骤 2**. 引用左上角图标

> index.html

```html
<link rel="shortcut icon" type="image/ico" href="./static/img/icon.ico">
```

### <a name="chapter-three-six" id="chapter-three-six">3.6 按需引用 ElementUI</a>

> [返回目录](#chapter-one)

* 安装 ElementUI：`npm i element-ui -S`

---

* 如果需要完整使用 ElementUI：

> src/main.js

```js
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用 ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
// 引用 ElementUI 结束

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```

> App.vue

```html
<el-row>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">左一</el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">左二</el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">右二</el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">右一</el-col>
</el-row>
```

---

* 如果需要按需引用 ElementUI：

**步骤 1**. 安装 babel 插件：`cnpm i babel-plugin-component -D`

**步骤 2**. 修改 `.babelrc`：

> .babelrc

```json
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": [
    "transform-vue-jsx", 
    "transform-runtime",
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

**步骤 3**. 按需引入 `Row` 与 `Col`：

> main.js

```js
// 引入及使用 ElementUI
import {Row, Col} from 'element-ui';
Vue.use(Row).use(Col);
```

> App.vue

```html
<el-row>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">左一</el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">左二</el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">右二</el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">右一</el-col>
</el-row>
```

---

* 响应式布局下基于断点的隐藏类：

> main.js

```js
// 引入基于断点的隐藏类
import 'element-ui/lib/theme-chalk/display.css';
```

然后你就可以使用下面的 CSS 类：

* `hidden-xs-only` - 当视口在 `xs` 尺寸时隐藏
* `hidden-sm-only` - 当视口在 `sm` 尺寸时隐藏
* `hidden-sm-and-down` - 当视口在 `sm` 及以下尺寸时隐藏
* `hidden-sm-and-up` - 当视口在 `sm` 及以上尺寸时隐藏
* `hidden-md-only` - 当视口在 `md` 尺寸时隐藏
* `hidden-md-and-down` - 当视口在 `md` 及以下尺寸时隐藏
* `hidden-md-and-up` - 当视口在 `md` 及以上尺寸时隐藏
* `hidden-lg-only` - 当视口在 `lg` 尺寸时隐藏
* `hidden-lg-and-down` - 当视口在 `lg` 及以下尺寸时隐藏
* `hidden-lg-and-up` - 当视口在 `lg` 及以上尺寸时隐藏
* `hidden-xl-only` - 当视口在 `xl` 尺寸时隐藏

注：

| 参数 | 说明 |
| --- | --- |
| xs | `<768px` |
| sm | `>=768px` |
| md | `>=992px` |
| lg | `>=1200px` |
| xl | `>=1920px` |

> 更多：[ElementUI 组件](http://element-cn.eleme.io/#/zh-CN/component/installation)

### <a name="chapter-three-seven" id="chapter-three-seven">3.7 Axios 封装使用</a>

> [返回目录](#chapter-one)

**步骤 1**. 安装 Axios：`cnpm i axios -D`

**步骤 2**. 封装 `api` 到 `src/api/api.js` 中

> api.js

```js
/**
 * 封装逻辑
 * 1. 引入 axios。
 * 2. 设置请求配置 request。如：请求超时，响应头等
 * 3. 设置请求中的遮罩（未实现）
 * 4. 设置请求成功后的数据过滤（未实现）
 * 5. 设置并暴露接口，传 data、method、url 到请求配置 request 上。
 */

// 设置 axios
import axios from 'axios';

// 请求配置
const request = axios.create({
  // 本地开发 dev 的时候，不需要开启这个
  // baseURL: 'http://172.26.167.5:8080',
  timeout: 5000,
  headers: {
    timestamp: "20181026094424",
    deviceid: "10102",
    signature: "F9CB03DD3ED50EDA5DB214C42D4DC0D6",
  }
})

/**
 * 获取用户名
 * userId
 */
export const getUserName = data => request({
  method: 'get',
  url: '/api/getUserName',
  params: data
})
```

**步骤 3**. 在 `Pages` 中调用：

> UserInfo.vue

```js
// 引用接口
import { getUserName } from "@/api/api"

export default {
  methods: {
    _getUserName() {

      // 获取用户名
      getUserName({
        userId: this.userId,
      }).then( (res) => {
        console.log("\n【API - 获取用户名】：");
      })
    }
  }
}
```

**步骤 4**. 设置 webpack 跨域 `index.js`：

> config/index.js

```js
dev: {
  proxyTable: {
   '/stat': { // restful 接口规律
     target: 'http://172.**.**.**:8080/', // 接口的域名
     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
   }
 },
},
```

**步骤 5**. 更多参考：[Axios 中文说明](https://www.kancloud.cn/yunye/axios/234845)

### <a name="chapter-three-eight" id="chapter-three-eight">3.8 动态引用组件</a>

> [返回目录](#chapter-one)

修改路由文件：

> 项目/src/router/index.js

```js
import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/pages/Home/Login')
const Index = () => import('@/pages/Home/Index')

const ListOnePageOne = () => import('@/pages/ListOne/PageOne')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Index',
      component: Index,
      children: [
        {
          path:'/',
          component: ListOnePageOne,
          meta: ["第一组第一页"],
        }
      ]
    }
  ]
})
```

### <a name="chapter-three-night" id="chapter-three-night">3.9 图片的引用及打包</a>

> [返回目录](#chapter-one)

在 VueCli 中，图片可以存放在两个位置：

* 静态目录，不会被打包：`项目/static/img`
* 动态目录，将会被打包：`项目/src/assets/img`

详细来说：

* static 的目录中的图片，不会被 Webpack 相关机制理会，你引入的时候，是怎样的，它就是怎样的。
* assets 中的图片，它会被 Webpack 处理，在配置了图片相关打包 loader 的情况下，它会在 `项目/build/webpack.base.conf.js` 中依据相关的 loader 限制，在一定大小下转换为 Base64。

> 项目/build/webpack.base.conf.js

```js
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: utils.assetsPath('img/[name].[hash:7].[ext]')
  }
},
```

从代码中可以看出可以看出，它对于小于 10K(10000/1024) 的图片，会打包成 base64，从而减少了我们在浏览器加载时的性能损耗。

那么，在 VueCli 中应该如何引用图片呢？

```html
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
```

说完 static 和 assets 的区别，以及对图片的引用，如果小伙伴们想验证下，那么可以看看 Webpack 在打包的时候对图片的处理：

> 项目/config/index/js

```js
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

从代码中可以看出，对于 `static` 的资源，VueCli 在开发模式 `dev` 以及打包模式 `build` 中都进行了配置，它不会被 `webpack` 进行打包，属于 “静态资源”。

但是，问题来了：

**VueCli 打包的时候，生成的是图片的绝对路径，部署的时候无法解析到图片，需要配置成相对路径，需要怎么改呢？**

* 位置 1：

> 项目/build/webpack.prod.conf.js

```js
output: {
  publicPath: './',
  path: config.build.assetsRoot,
  filename: utils.assetsPath('js/[name].[chunkhash].js'),
  chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
},
```

在 output 这块，新增代码 `publicPath: './'`。

* 位置 2：

> 项目/build/utils.js

```js
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    publicPath: '../../',
    fallback: 'vue-style-loader'
  })
} else {
  return ['vue-style-loader'].concat(loaders)
}
```

在 `vue-style-loader` 这里，新增 `publicPath: '../../` 这行代码。

这样，打包出来的图片路径，就是相对路径了。

### <a name="chapter-three-ten" id="chapter-three-ten">3.10 rem 适配</a>

> [返回目录](#chapter-one)

如果项目属于手机端，那么需要进行 rem 适配，即将固定宽度的 px 转换为 rem，为了方便计算，下面有一份 100px = 1rem 的 JS 适配代码，只需要将代码放到 `项目/src/utils/rem.js` 中，并在 `项目/src/main.js` 中引用即可。

> 项目/src/main.js

```js
// 引用 rem 适配
import './utils/rem'
```

> 项目/src/utils/rem.js

```js
/*
 * 移动端 rem 适配，px:rem = 100:1
 * 该适配兼容 UC 竖屏转横屏出现的 BUG
 * 自定义设计稿的宽度：designWidth
 * 最大宽度：maxWidth
 * 这段 js 的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为 750，最大宽度为 750，则为(750,750)
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

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
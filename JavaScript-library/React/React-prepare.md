React 开发准备
===

> Create by **jsliang** on **2019-04-25 16:20:59**  
> Recently revised in **2019-05-31 14:51:17**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library)**

* [React 系列文章代码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

在使用 Create React App 搭建脚手架的时候，有些步骤是重复的，有时候甚至还会忘记这些配置的使用方法，故在此记录一些常用步骤（插件安装等），方便自己回顾。

## <a name="chapter-three" id="chapter-three">三 初始化目录</a>

> [返回目录](#chapter-one)

1. 下载 Node.js
2. 安装 Create React App：
   1. `npm i create-react-app -g`
3. 开启新项目：
   1. `create-react-app todolist`
   2. `cd todolist`
   3. `npm start`
4. 打包项目：`npm build`

> 项目目录：

```
- todolist
  + node_modules —————————— 项目依赖的第三方的包
  - public ———————————————— 共用文件
    - favicon.ico        —— 网页标签左上角小图标
    - index.html         —— 网站首页模板
    - mainfest.json      —— 提供 meta 信息给项目，并与 serviceWorker.js 相呼应，进行离线 APP 定义
  - src ——————————————————— 项目主要目录
    - App.css            —— 主组件样式
    - App.js             —— 主组件入口
    - App.test.js        —— 自动化测试文件
    - index.css          —— 全局 css 文件
    - index.js           —— 所有代码的入口
    - logo.svg           —— 页面的动态图
    - serviceWorker.js   —— PWA。帮助开发手机 APP 应用，具有缓存作用
  - .gitignore ———————————— 配置文件。git 上传的时候忽略哪些文件
  - package-lock.json ————— 锁定安装包的版本号，保证其他人在 npm i 的时候使用一致的 node 包
  - package.json —————————— node 包文件，介绍项目以及说明一些依赖包等
  - README.md ————————————— 项目介绍文件
```

当然，一般我们都需要进行项目定制化，有些功能不需要的（例如 Service Worker），有些文件不需要的（例如 logo.svg），有些文件需要修改的（例如 index.html），就需要进行简化下：


```
- demo
  + node_modules —————————— 项目依赖的第三方的包
  - public ———————————————— 共用文件
    + mock               —— 本地 Mock 文件夹
    - favicon.ico        —— 网页标签左上角小图标
    - index.html         —— 网站首页模板
  - src ——————————————————— 重要的目录
    + api                —— 封装 API 接口文件
    - assets             —— 静态资源文件夹
      + img              —— 图片资源文件夹
    + components         —— 共用组件
    + pages              —— 路由页面
    + store              —— 全局配置 store
    - style              —— 全局配置样式
      - index.css        —— 全局样式
      - reset.css        —— 重置浏览器样式
      - common.css       —— 项目复用样式
      - icon.css         —— 图标样式
    - App.js             —— 主组件入口
    - index.js           —— 所有代码的入口
  - .gitignore ———————————— 配置文件。Git 上传的时候忽略哪些文件
  - package.json —————————— Node 包文件。介绍项目以及说明一些依赖包等
  - README.md ————————————— 项目介绍文件
```

## Reset CSS

> reset.css

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
    font: 16px/1.5 '黑体', Helvetica, sans-serif;
}
h1, h2, h3, h4, h5, h6, button, input, select, textarea { font-size: 100%; }

/** 重置列表元素 - reset the list element **/
ul, ol { list-style: none; }

/** 重置文本格式元素 - reset the text format element **/
a, a:hover { text-decoration: none; }

/** 重置表单元素 - reset the form element **/
button { cursor: pointer; }
input { font-size: 16px; outline: none; }

/** 重置表格元素 - reset the table element **/
table { border-collapse: collapse; border-spacing: 0; }

/*
  * 图片自适应 - image responsize 
  * 1. 清空浏览器对图片的设置
  * 2. <div>图片</div> 的情况下，图片会撑高 div，这么设置可以清除该影响
*/
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
input::-webkit-input-placeholder { color: #919191; font-size: .32rem } /* Webkit browsers */
input::-moz-placeholder { color: #919191; font-size: .32rem } /* Mozilla Firefox */
input::-ms-input-placeholder { color: #919191; font-size: .32rem } /* Internet Explorer */
```

## Npm Install

* 安装 Redux：`npm i redux -S`
* 安装 React-Redux：`npm i react-redux -S`
* 安装 Redux-Saga：`npm i redux-saga -S`
* 安装 React-Router：`npm i react-router-dom -S`
* 安装 Ant Design：`npm i antd -S`
* 安装 Axios：`npm i axios -S`

* 总：`cnpm i redux react-redux redux-saga react-router-dom antd axios -S`

## React Router DOM

> 案例

```js
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import TimeLine from './pages/TimeLine';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={TimeLine}></Route>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
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
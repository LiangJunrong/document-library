React Demo One - 仿简书项目
===

> Create by **jsliang** on **2019-3-18 08:37:10**  
> Recently revised in **2019-3-19 08:00:57**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/other-library/Interview/PersonalExperience/2019-InterviewPreparation.md)**

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 课程结构](#chapter-three) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

关于 React，**jsliang** 从 `2018-9-5` 就开始折腾了，中途因为工作调动，没有成功继续折腾下去。最近因为新公司工作需求，从头开始继续折腾 React，希望我的文章能对没学过 React 的小伙伴有所帮助。

本文参考来自慕课网的 [《React 16.4 开发简书项目
从零基础入门到实战》](https://coding.imooc.com/class/229.html) 教程，掺杂个人对编程的理解，如有错误，望多多指正。

## <a name="chapter-three" id="chapter-three">三 课程结构</a>

> [返回目录](#catalog-chapter-three)

* **课程结构**：

1. 基础内容 -> 环境搭建 -> 基础语法 -> 原理进阶 -> 动画
2. Redux -> Redux 进阶
3. 实战项目 -> 环境搭建 -> Header -> 首页 -> 详情页
4. 登录校验 -> 上线

* **前置知识**：

1. ES5/ES6
2. webpack
3. npm

* **知识点**：

1. create-react-app
2. 组件化思维
3. JSX
4. 开发调试工具
5. 虚拟 DOM
6. 生命周期
7. React-transition-group
8. Redux
9. Antd
10. UI、容器组件
11. 无状态组件
12. redux-thunk
13. redux-saga
14. styled-components
15. immutable.js
16. redux-immutable
17. axios

* **开始准备**：

1. 下载 Node.js
2. 安装 React 脚手架：
   1. `npm i create-react-app -g`
   2. `create-react-app todolist`
   3. `cd todolist`
   4. `npm start`
3. 查看 `localhost:3000`：

![图](../../public-repertory/img/js-react-demo-one-1.png)

4. 项目目录解析：

```shell
- todolist
  + node_modules —————————— 项目依赖的第三方的包
  - public ———————————————— 共用文件
    - favicon.ico        —— 网页标签左上角小图标
    - index.html         —— 网站首页模板
    - mainfest.json      —— 提供 meta 信息给项目，与 serviceWorker.js 相呼应，进行离线 APP 定义
  - src ——————————————————— 重要的目录
    - App.css            —— 主组件样式
    - App.js             —— 主组件入口
    - App.test.js        —— 自动化测试文件
    - index.css          —— 全局 css 文件
    - index.js           —— 所有代码的入口
    - logo.svg           —— 页面的动态图
    - serviceWorker.js   —— PWA。帮助开发手机 APP 应用，具有缓存作用
  - .gitignore ——————————— 配置文件。git 上传的时候忽略哪些文件
  - package-lock.json ———— 锁定安装包的版本号，保证其他人在 npm i 的时候使用一致的 node 包
  - package.json ————————— node 包文件，介绍项目以及说明一些依赖包等
  - README.md ———————————— 项目介绍文件
```

下面对其进行精简：

```shell
- todolist
  + node_modules —————————— 项目依赖的第三方的包
  - public ———————————————— 共用文件
    - favicon.ico        —— 网页标签左上角小图标
    - index.html         —— 网站首页模板
  - src ——————————————————— 重要的目录
    - App.js             —— 主组件入口
    - index.js           —— 所有代码的入口
  - .gitignore ——————————— 配置文件。git 上传的时候忽略哪些文件
  - package.json ————————— node 包文件，介绍项目以及说明一些依赖包等
  - README.md ———————————— 项目介绍文件
```

* **详情**

> index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Todolist</title>
  </head>
  <body>
    <noscript>你需要允许在 APP 中运行 JavaScript</noscript>
    <div id="root"></div>
  </body>
</html>
```

> App.js

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello React!
      </div>
    );
  }
}

export default App;
```

> index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

> .gitignore

```shell
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

> package.json

```json
{
  "name": "todolist",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.8.4",
    "react-dom": "^16.8.4",
    "react-scripts": "2.1.8"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

* **组件**

![图](../../public-repertory/img/js-react-demo-one-2.png)

组件，即将页面切成几个部分，从而有利于页面的拼装。

在 React 中，定义一个组件：

> App.js

```js
// import React, { Component } from 'react';
// 1. 引用 React
import React from 'react';

// 2. 定义一个 App 的类，继承于 React 的组件
class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello React!
      </div>
    );
  }
}

// 3. 将这个 App 导出去
export default App;
```

以上是 App.js 的一个定义，这样子表明一个组件的定义。下面我们看它如何被使用：

> index.js

```js
// 1. 引入 React、ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// 2. 将 App.js 导入进来
import App from './App';

// 3. 通过 ReactDOM 将 App.js 以虚拟 DOM 的形式渲染到 root 根节点，该节点在 index.html 中
ReactDOM.render(<App />, document.getElementById('root'));
```

最后我们查看下 `index.html`

> index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Todolist</title>
  </head>
  <body>
    <noscript>你需要允许在 APP 中运行 JavaScript</noscript>
    <div id="root"></div>
  </body>
</html>
```



---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)
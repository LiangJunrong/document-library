Create React App - React 脚手架
===

> create by **jsliang** on **2019-04-24 11:36:57**   
> Recently revised in **2019-04-25 10:44:54**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/CreateReactApp.md)**

* [React 系列文章代码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 安装及初始目录](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 默认支持特性](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 配合 VS Code 调试](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 分析包大小](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 模块引入 CSS](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 Sass 安装及使用](#chapter-eight) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 添加图片、背景、SVG](#chapter-night) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[十 public 文件夹](#chapter-ten) |
| &emsp;[10.1 引用静态资源](#chapter-ten-one) |
| &emsp;[10.2 Mock 数据](#chapter-ten-two) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[十一 代码打包分割](#chapter-eleven) |
| <a name="catalog-chapter-twelve" id="catalog-chapter-twelve"></a>[十二 引用 TypeScript](#chapter-twelve) |
| <a name="catalog-chapter-thirteen" id="catalog-chapter-thirteen"></a>[十三 React Router - 路由](#chapter-thirteen) |
| <a name="catalog-chapter-fourteen" id="catalog-chapter-fourteen"></a>[十四 自定义环境变量](#chapter-fourteen) |
| <a name="catalog-chapter-fifteen" id="catalog-chapter-fifteen"></a>[十五 测试](#chapter-fifteen) |
| <a name="catalog-chapter-sixteen" id="catalog-chapter-sixteen"></a>[十六 开发环境代理](#chapter-sixteen) |
| <a name="catalog-chapter-seventeen" id="catalog-chapter-seventeen"></a>[十七 使用 Ajax 请求获取数据](#chapter-seventeen) |
| <a name="catalog-chapter-eighteen" id="catalog-chapter-eighteen"></a>[十八 Title 和 Meta](#chapter-eighteen) |
| <a name="catalog-chapter-nighteen" id="catalog-chapter-nighteen"></a>[十九 总结](#chapter-nighteen) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

Create React App 是一个官方支持的创建 React 单页应用程序的方法。它提供了一个零配置的现代构建设置。

本文 **绝大多数**、**99%** 内容来自 Create React App 的文档，**1%** 来自个人的整理。

> 如果对此话有所误解，请跳至文：[十九 总结](#chapter-nighteen)

> 可加 QQ 群：`798961601`，跟随 **jsliang** 一起折腾

* 参考文献：

1. [Create React App - 英文文档](https://facebook.github.io/create-react-app/)
2. [Create React App - 中文文档](https://www.html.cn/create-react-app/)
3. [Create React App - GitHub](https://github.com/facebook/create-react-app)

## <a name="chapter-three" id="chapter-three">三 安装及初始目录</a>

> [返回目录](#chapter-one)

1. 下载 Node.js
2. 安装 Create React App：
   1. `npm i create-react-app -g`
3. 开启新项目：
   1. `create-react-app todolist`
   2. `cd todolist`
   3. `npm start`
4. 打包项目：`npm build`

* 项目目录：

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
  - .gitignore ——————————— 配置文件。git 上传的时候忽略哪些文件
  - package-lock.json ———— 锁定安装包的版本号，保证其他人在 npm i 的时候使用一致的 node 包
  - package.json ————————— node 包文件，介绍项目以及说明一些依赖包等
  - README.md ———————————— 项目介绍文件
```

* 参考文献：[入门 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/getting-started/)

## <a name="chapter-four" id="chapter-four">四 默认支持特性</a>

> [返回目录](#chapter-one)

* 支持所有现代浏览器（IE 9、10、11 除外，如果需要，请自行配置）
* 支持指数运算符 (ES2016)
* 支持 `async` / `await` (ES2017)
* 支持 `Object Rest`(剩余) / `Spread`(展开) 属性 (ES2018)
* 支持动态 `import()` (stage 3 proposal)
* 支持 `Class` 字段和静态属性 (part of stage 3 proposal)
* 支持 JSX, Flow 和 TypeScript
* 支持 PostCSS，无需手动添加 CSS 前缀，Create React App 会自动补全

* 参考文献：[支持的浏览器和特性 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/supported-browsers-features/)

## <a name="chapter-five" id="chapter-five">五 配合 VS Code 调试</a>

> [返回目录](#chapter-one)

可以通过 Visio Studio Code 的插件 Debugger for Chrome 调试 Create React App：

1. 安装 -> Debugger for Chrome
2. 调试 -> 添加配置：

> launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

3. 保存 -> 开始调试
4. 通过上述步骤即可开始调试

> 如有问题可以参考下面资料

* 参考资料：[使用 VSCode 调试 React 应用 - 知乎](https://zhuanlan.zhihu.com/p/30583784)

## <a name="chapter-six" id="chapter-six">六 分析包大小</a>

> [返回目录](#chapter-one)

使用 source maps 分析 JavaScript 包。

这有助于你了解代码膨胀的来源，从而配合其他插件来减少每个包的大小，优化项目。

1. 安装：`npm i source-map-explorer -S`
2. 修改 package.json：

> package.json

```json
"scripts": {
  "analyze": "source-map-explorer build/static/js/main.*",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
}
```

3. 分析：`npm run build`
4. 分析：`npm run analyze`

* 参考资料：[React App 中如何分析Bundle Size？ - 简书](https://www.jianshu.com/p/02259b9b52a5)

## <a name="chapter-seven" id="chapter-seven">七 模块引入 CSS</a>

> [返回目录](#chapter-one)

在 Create React App 中，如果你的 `react-scripts` 版本是 2.0 或者更高，你可以通过模块形式引入样式：

> Button.js

```js
import React, { Component } from 'react';
import styles from './Button.module.css'; // 将 css modules 文件导入为 styles
import './another-stylesheet.css'; // 导入常规 CSS 文件

class Button extends Component {
  render() {
    // 作为 js 对象引用
    return <button className={styles.error}>Error Button</button>;
  }
}
```

这样子不会导致样式的冲突，就好比你 import JS 进来一样。

* 参考资料：[添加 CSS Modules 样式表 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/adding-a-css-modules-stylesheet/)

## <a name="chapter-eight" id="chapter-eight">八 Sass 安装及使用</a>

> [返回目录](#chapter-one)

1. 安装 `node-sass`：`npm i node-sass -S`
2. 引入：`@import 'styles/_colors.scss'; // 假设 styles 目录 在 src/ 目录下`

* 参考文献：[添加 Sass 样式表 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/adding-a-sass-stylesheet/)

## <a name="chapter-night" id="chapter-night">九 添加图片、背景、SVG</a>

> [返回目录](#chapter-one)

1. 添加图片：通过 `import` 引入即可。

```js
import React from 'react';
import logo from './logo.png'; // 告诉 Webpack 这个 JS 文件使用了这个图片

console.log(logo); // /logo.84287d09.png

function Header() {
  // 导入结果是图片的 URL 
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

2. 引用背景：通过 `url` 引用即可。

```css
.logo {
  background-image: url(./logo.png);
}
```

3. 引用 SVG：

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
```

或者：

```js
import { ReactComponent as Logo } from './logo.svg';
const App = () => (
  <div>
    {/* ReactComponent 导入名称是特殊的 */}
    {/* Logo 是一个实际的 React 组件 */}
    <Logo />
  </div>
);
```

* 参考文献：[添加图片，字体和文件 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/adding-images-fonts-and-files/)

## <a name="chapter-ten" id="chapter-ten">十 public 文件夹</a>

> [返回目录](#chapter-one)

在 Create React App 创建的项目中，有个 public 文件夹，该文件夹下通常有：

* favicon.ico - 网页小标签
* index.html - 项目首页
* mainfest.json - 提供 meta 信息给项目，并与 serviceWorker.js 相呼应，进行离线 APP 定义

当然，它不仅可以拥有这些文件，还可以新增内容。

### <a name="chapter-ten-one" id="chapter-ten-one">10.1 引用静态资源</a>

> [返回目录](#chapter-one)

index.html 可以引用静态资源。

在 index.html 中引用的静态资源不会被 Webpack 打包，而是被复制到打包目录中，使用方法：

```html
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```

只需要加上 `%PUBLIC_URL%/` 表示引用 public 下的资源即可。

在 JavaScript 中：

```js
render() {
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

这样也会引用 public 中的资源，从而让图片 **不会被 Webpack 打包**。当然，需要牺牲的代价有：

* public 文件夹中的所有文件都不会进行后处理或压缩。
* 在编译时不会调用丢失的文件，并且会导致用户出现 404 错误。
* 结果文件名不包含内容哈希值，因此你需要添加查询参数或在每次更改时重命名它们（以便清除浏览器缓存）。

### <a name="chapter-ten-two" id="chapter-ten-two">10.2 Mock 数据</a>

> [返回目录](#chapter-one)

此外，由于它内含 Node.js，所以还可以利用这点进行数据模拟（Mock），做法是：

* 在 public 文件夹中新建 api 目录，然后创建文件 headerList.json，引用 axios 后，通过： `axios.get('/api/headerList.json').then()` 即可调用该文件进行 Mock。

> api 下可以存放多个 json 文件

* 参考文献：[使用 public 文件夹 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/using-the-public-folder/)

## <a name="chapter-eleven" id="chapter-eleven">十一 代码打包分割</a>

> [返回目录](#chapter-one)

在 Create React App 中，我们可以使用 React Loadable 来进行代码的分割。

使用方式：

```js
import Loadable from 'react-loadable';

const LoadableOtherComponent = Loadable({
  loader: () => import('./OtherComponent'),
  loading: () => <div>Loading...</div>,
});

const MyComponent = () => (
  <LoadableOtherComponent/>
);
```

* 参考文献：

1. [Code-Splitting - GitHub](https://www.reactjscn.com/docs/code-splitting.html)
2. [react-loadable - GitHub](https://github.com/jamiebuilds/react-loadable)
3. [Code Splitting in Create React App](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)

## <a name="chapter-twelve" id="chapter-twelve">十二 引用 TypeScript</a>

> [返回目录](#chapter-one)

1. 使用 TypeScript 启动新的 Create React App项目：`npx create-react-app my-app --typescript`
2. 往 Create React App 现有项目中添加 TypeScript：`npm i typescript @types/node @types/react @types/react-dom @types/jest -S`。（记得修改所有 JS 文件为 TS 文件，例如 `src/index.js` -> `src/index.tsx`）

* 参考文献：[添加 TypeScript - Create React App 中文文档](https://www.html.cn/create-react-app/docs/adding-typescript/)

## <a name="chapter-thirteen" id="chapter-thirteen">十三 React Router - 路由</a>

> [返回目录](#chapter-one)

由于 Create React App 并没有规定路由解决方案，然后市面上比较收欢迎的路由解决方案是 React Router，所以可以尝试使用：

* 安装：`npm i react-router-dom -S`
* 使用：[React Router](https://reacttraining.com/react-router/web/example/basic)

## <a name="chapter-fourteen" id="chapter-fourteen">十四 自定义环境变量</a>

> [返回目录](#chapter-one)

1. 定义环境变量：`process.env.REACT_APP_SECRET_CODE`
2. 获取特殊内置环境变量：`process.env.NODE_ENV`。值为：`test`、`development`、`production`。对应三种环境。

```js
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
      </form>
    </div>
  );
}
```

在开发环境，该页面渲染为：

```js
<div>
  <small>You are running this application in <b>development</b> mode.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
```

## <a name="chapter-fifteen" id="chapter-fifteen">十五 测试</a>

> [返回目录](#chapter-one)

Create React App 使用 Jest 作为其测试运行器。

但是很不幸的是，工作中并没有用上，估计以后的工作也可能不会用上，所以咱们只需要知道有这回事，等有机会再进行尝试。

* 参考文献：

1. [运行测试 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/running-tests/)
2. [调试测试 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/debugging-tests/)

## <a name="chapter-sixteen" id="chapter-sixteen">十六 开发环境代理</a>

> [返回目录](#chapter-one)

在开发项目的过程中，最担心的莫过于浏览器告诉你跨域了：*后端端口在 4000，或者主机在另一个 IP 地址……*

所以，我们需要在开发环境中配置代理。

> 嗯，你问为什么生产（部署）环境我们不做代理？因为那属于后端的活了，或许你是个 *全栈* 工程师，你可以自行解决下。

往 package.json 中添加字段：

> package.json

```json
  "proxy": "http://localhost:4000",
```

这样当你调用接口：`fetch('/api/todos')` 时，它会请求代理到 `http://localhost:4000/api/todos`。

---

当然，有可能 `proxy` 不够灵活，小伙伴们可以尝试通过直接访问 Express，并连接项目的代理中间件，详情看参考文献。

* 参考文献：

1. [在开发环境中代理 API 请求 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/proxying-api-requests-in-development/)
2. [手动配置代理 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/proxying-api-requests-in-development/#%E6%89%8B%E5%8A%A8%E9%85%8D%E7%BD%AE%E4%BB%A3%E7%90%86)

## <a name="chapter-seventeen" id="chapter-seventeen">十七 使用 Ajax 请求获取数据</a>

> [返回目录](#chapter-one)

在 Create React App 中，可以通过下面两种方法获取 Ajax 数据：

1. `fetch()` API
2. `axios` 库

当然，没有限制死必须使用这两种。

这两种调用 Ajax 请求获取数据的方式便捷在它返回 Promise 供链式调用数据。

* 参考文献：[使用AJAX请求获取数据- Create React App 中文文档](https://www.html.cn/create-react-app/docs/fetching-data-with-ajax-requests/)

## <a name="chapter-eighteen" id="chapter-eighteen">十八 Title 和 Meta</a>

> [返回目录](#chapter-one)

* 动态更新 Title：`document.title` API
* 根据 React 组件更改 Title：`React Helmet` 等第三方库
* 动态更新 Meta：

```html
<!doctype html>
<html lang="en">
  <head>
    <meta property="og:title" content="__OG_TITLE__">
    <meta property="og:description" content="__OG_DESCRIPTION__">
  </head>

  <body>
  
  </body>
</html>
```

然后读取 index.html 并将 `__OG_TITLE__` 和 `__OG_DESCRIPTION__` 替换掉即可。

* 参考文献：[Title(网页标题) 和 Meta 标签 - Create React App 中文文档](https://www.html.cn/create-react-app/docs/title-and-meta-tags/)

## <a name="chapter-nighteen" id="chapter-nighteen">十九 总结</a>

> [返回目录](#chapter-one)

* **关于照抄 Create React App**：

有必要吗？有必要，也没有必要。

有必要是因为 **好记性不如烂笔头**，自己敲一遍可以加深点点记忆，而且中文文档的翻译比较哆嗦，所以总结起来看着方便。

没必要是因为大部分都在 Create React App 的中文文档/英文文档中都有提示，所以一些小伙伴可能在下面 ** 了。

whatever, just record.

* **关于前端学习**：

1. 昨天微信群一位小伙伴询问有没有购买慕课网的 TS 重构 Axios 视频
2. 昨天票圈一位小伙伴推荐 Koa 源码剖析视频

只能说，各自有各自的安排。

**但是**，千万千万不要随大流，能用到工作的知识才是 **有用知识**。

如果这些知识对你目前的工作，或者甚至以后的工作毫无帮助，请忽视它，无论它在前端圈子有多热闹。

* **关于 `jsliang`**：

1. 将 React 及其周边技术的官方文档过一遍
2. 进行自己构思的项目实战
3. 跟随公司项目进行大量操练
4. 进一步剖析 React 源码
5. 学习算法和数据结构
6. 再说……

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
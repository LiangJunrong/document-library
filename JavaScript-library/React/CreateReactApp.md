Create React App - React 脚手架
===

> create by **jsliang** on **2019-04-24 11:36:57**   
> Recently revised in **2019-04-24 13:58:34**

**Hello 小伙伴们，如果觉得本文还不错，记得给个 **star** ， 小伙伴们的 **star** 是我持续更新的动力！[GitHub 地址](https://github.com/LiangJunrong/document-library/blob/master/JavaScript-library/React/CreateReactApp.md)**

* [React 系列文章代码地址](https://github.com/LiangJunrong/React)

## <a name="chapter-one" id="chapter-one">一 目录</a>

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 正文](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 默认支持特性](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[* 五 使用 VS Code 调试](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[* 六 分析 Bundle 包大小](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[* 七 CSS Modules](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[* 八 引用 Sass 样式表](#chapter-eight) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[* 九 添加图片、背景、SVG](#chapter-night) |
| <a name="catalog-chapter-ten" id="catalog-chapter-ten"></a>[* 十 public 文件夹](#chapter-ten) |
| &emsp;[* 10.1 引用静态资源](#chapter-ten-one) |
| &emsp;[* 10.2 Mock 数据](#chapter-ten-two) |
| <a name="catalog-chapter-eleven" id="catalog-chapter-eleven"></a>[* 十一 代码打包分割](#chapter-eleven) |
| <a name="catalog-chapter-twelve" id="catalog-chapter-twelve"></a>[十二 添加 TypeScript](#chapter-twelve) |
| <a name="catalog-chapter-thirteen" id="catalog-chapter-thirteen"></a>[十三 ](#chapter-thirteen) |

## <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#chapter-one)

Create React App 是一个官方支持的创建 React 单页应用程序的方法。它提供了一个零配置的现代构建设置。

* 参考文献：[Create React App 中文文档](https://www.html.cn/create-react-app/)

## <a name="chapter-three" id="chapter-three">三 正文</a>

> [返回目录](#chapter-one)

1. 下载 Node.js
2. 安装 React 脚手架：
   1. `npm i create-react-app -g`
3. 开启新项目：
   1. `create-react-app todolist`
   2. `cd todolist`
   3. `npm start`
4. 打包项目：`npm build`

## <a name="chapter-four" id="chapter-four">四 默认支持特性</a>

> [返回目录](#chapter-one)

* 支持所有现代浏览器（排除 IE 9、10、11，如果需要，需要自行配置）
* 支持指数运算符 (ES2016)
* 支持 Async/await (ES2017)
* 支持 Object Rest(剩余)/Spread(展开) 属性 (ES2018)
* 支持动态 import() (stage 3 proposal)
* 支持 Class 字段和静态属性 (part of stage 3 proposal)
* 支持 JSX, Flow 和 TypeScript
* PostCSS（后处理 CSS），无需手动添加 CSS 前缀，Create React App 会自动补全

## <a name="chapter-five" id="chapter-five">五 使用 VS Code 调试</a>

> [返回目录](#chapter-one)

可以通过 Visio Studio Code 的插件调试 Create React App：

1. 调试 -> 添加配置：

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

2. 保存 -> 开始调试
3. 通过上述步骤即可调试，如有问题查看：

* 参考资料：[使用 VSCode 调试 React 应用](https://zhuanlan.zhihu.com/p/30583784)

## <a name="chapter-six" id="chapter-six">六 分析 Bundle 包大小</a>

> [返回目录](#chapter-one)

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

* 参考资料：[React App 中如何分析Bundle Size？](https://www.jianshu.com/p/02259b9b52a5)

## <a name="chapter-seven" id="chapter-seven">七 CSS Modules</a>

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

这样子不会导致样式的冲突，就好比拥有专属类名一样。

* 参考资料：[添加 CSS Modules 样式表](https://www.html.cn/create-react-app/docs/adding-a-css-modules-stylesheet/)

## <a name="chapter-eight" id="chapter-eight">八 引用 Sass 样式表</a>

> [返回目录](#chapter-one)

1. 安装 `node-sass`：`npm i node-sass -S`
2. 引入：`@import 'styles/_colors.scss'; // 假设 styles 目录 在 src/ 目录下`

* 参考文献：[添加 Sass 样式表](https://www.html.cn/create-react-app/docs/adding-a-sass-stylesheet/)

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

## <a name="chapter-ten" id="chapter-ten">十 public 文件夹</a>

> [返回目录](#chapter-one)

在 Create React App 创建的项目中，有个 public 文件夹，该文件夹下通常有：

* favicon.ico
* index.html
* mainfest.json

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
2. [react-loadable](https://github.com/jamiebuilds/react-loadable)
3. [Code Splitting in Create React App](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)

## <a name="chapter-twelve" id="chapter-twelve">十二 添加 TypeScript</a>

> [返回目录](#chapter-one)

1. 使用 TypeScript 启动新的 Create React App项目：`npx create-react-app my-app --typescript`
2. 往 Create React App 现有项目中添加 TypeScript：`npm i typescript @types/node @types/react @types/react-dom @types/jest -S`。（记得修改所有 JS 文件为 TS 文件，例如 `src/index.js` -> `src/index.tsx`）

## <a name="chapter-thirteen" id="chapter-thirteen">十三 </a>

> [返回目录](#chapter-one)

目前看到；https://www.html.cn/create-react-app/docs/adding-a-router/

---

> **jsliang** 广告推送：  
> 也许小伙伴想了解下云服务器  
> 或者小伙伴想买一台云服务器  
> 或者小伙伴需要续费云服务器  
> 欢迎点击 **[云服务器推广](https://github.com/LiangJunrong/document-library/blob/master/other-library/Monologue/%E7%A8%B3%E9%A3%9F%E8%89%B0%E9%9A%BE.md)** 查看！

[![图](../../public-repertory/img/z-small-seek-ali-3.jpg)](https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=w7hismrh)
[![图](../../public-repertory/img/z-small-seek-tencent-2.jpg)](https://cloud.tencent.com/redirect.php?redirect=1014&cps_key=49f647c99fce1a9f0b4e1eeb1be484c9&from=console)

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
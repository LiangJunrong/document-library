仿简书项目 - 1 - 基础环境搭建
===

> create by **jsliang** on **2018-9-10 14:35:03**  
> Recently revised in **2018-9-10 14:41:12**

<br>

## 第一章 基础环境搭建

<br>

### 1.1 搭建 React 脚手架
* 安装 React 脚手架：`npm i create-react-app -g`
* 新建 React 项目：`create-react-app jianshu`
* 启动 React 项目：`npm start`

![图](../../public-repertory/img/js-react-jianshu-chapter1-1.png)

&emsp;如上，搭建起了一个新的 React 项目。

<br>

### 1.2 精支简干
&emsp;删除项目文件至如下图：

![图](../../public-repertory/img/js-react-jianshu-chapter1-2.png)

> **index.html**
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>React App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
  </body>
</html>
```

> **App.js**
```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

export default App;
```

> **index.css**
```
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
```

> **.gitignore**
```
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
/node_modules

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

> **package.json**
```
{
  "name": "jianshu",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.5.0",
    "react-dom": "^16.5.0",
    "react-scripts": "1.1.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

> **README.md**
```
# 仿简书项目

<br>

## 安装依赖：`npm i`
## 在线运行：`npm start`
## 打包部署：`npm build`
```

<br>

### 1.3 编写样式
* 安装 styled-components ：`npm i styled-components`
* 修改 `index.css` 变为 `style.js`
* 修改 `index.js` 的引用：
```
import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
* 修改 `style.js` 的内容，从：
```
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.jsliang {
  background: red;
}
```
&emsp;变为：
```
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  .jsliang {
    background: red;
  }
`
```

* 引入 `reset.css`：
```
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
      font: 18px/1.5 '楷体', Helvetica, sans-serif;
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
  img { border: 0; display: inline-block; width: 100%; max-width: 100%; height: auto; }

  /* 
      * 默认box-sizing是content-box，该属性导致padding会撑大div，使用border-box可以解决该问题
      * set border-box for box-sizing when you use div, it solve the problem when you add padding and don't want to make the div width bigger
  */
  div, input { box-sizing: border-box; }

  /** 清除浮动 - clear float **/
  .jsliang-clear:after, .clear:after {
      content: " ";
      display: block;
      height: 0;
      clear: both;
  }
  .jsliang-clear, .clear {
      *zoom: 1;
  }

  /** 设置input的placeholder - set input placeholder **/
  input::-webkit-input-placeholder { color: #727272; } /* Webkit browsers */
  input::-moz-placeholder { color: #727272; } /* Mozilla Firefox */
  input::-ms-input-placeholder { color: #727272; } /* Internet Explorer */
```

此时 `style.js` 内容为：
```
import { injectGlobal } from 'styled-components';

injectGlobal`
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
      font: 18px/1.5 '宋体', Helvetica, sans-serif;
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
  img { border: 0; display: inline-block; width: 100%; max-width: 100%; height: auto; }

  /* 
      * 默认box-sizing是content-box，该属性导致padding会撑大div，使用border-box可以解决该问题
      * set border-box for box-sizing when you use div, it solve the problem when you add padding and don't want to make the div width bigger
  */
  div, input { box-sizing: border-box; }

  /** 清除浮动 - clear float **/
  .jsliang-clear:after, .clear:after {
      content: " ";
      display: block;
      height: 0;
      clear: both;
  }
  .jsliang-clear, .clear {
      *zoom: 1;
  }

  /** 设置input的placeholder - set input placeholder **/
  input::-webkit-input-placeholder { color: #727272; } /* Webkit browsers */
  input::-moz-placeholder { color: #727272; } /* Mozilla Firefox */
  input::-ms-input-placeholder { color: #727272; } /* Internet Explorer */
`
```

&emsp;至此，基础环境搭建完毕。

> 注：引用了 styled-components 后，&.className 为同级样式，.className 为下级样式

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
# React - 1 - React 基础环境搭建
> create by **jsliang** on **2018年9月5日08:59:31** 

## 第一章 React 基础环境搭建
&emsp;工欲善其事，必先利其器。  
&emsp;在这里，我们将进行 React 的基础环境的搭建，从而大大增加我们的开发进度。

### 1.1 搭建 React 脚手架
1. 安装 React 脚手架：`npm i create-react-app -g`
2. 安装 React 项目：`create-react-app todolist`
3. 运行 React 项目：`npm run start`

> 步骤 1 结果：返回create-react-app 版本：1.5.2  
> 步骤 2 结果：返回：
```
+ react-dom@16.4.2
+ react@16.4.2
+ react-scripts@1.1.5
added 1326 packages from 810 contributors and audited 12601 packages in 74.682s
found 0 vulnerabilities


Success! Created todolist at E:\MyWeb\jsliang-study\Document-Library\JavaScript-library\React\code\todolist
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd todolist
  npm start

Happy hacking!
```
> 步骤 3 结果，返回界面（注意，需要 cd 到 todolist 目录）：

![目录](../../public-repertory/img/js-react-chapter1-1.png)

<br>

### 1.2 项目文件介绍
> 未展开

![目录](../../public-repertory/img/js-react-chapter1-2.png)

> 展开
 
![目录](../../public-repertory/img/js-react-chapter1-3.png)

&emsp;该项目目录介绍：
```
+ node_modules —— node 依赖安装包
    - ... —— 详细安装包文件目录
+ public —— 共用的文件夹
    - favicon.ico —— 网站标签页上的图标
    - index.html —— 网站首页的 html 模板
    - mainfest.json —— 定义缓存的文件，配合 registerServiceWorker.js 来使用
+ src —— 存放项目源代码
    - App.css —— 被嵌入到 App.js 中的 css 文件
    - App.js —— 网站的首页组件
    - App.test.js —— 做自动化测试的时候使用的文件
    - index.css —— 被嵌入到 index.js 中的 css 文件
    - index.js —— 项目的入口文件
    - logo.svg —— App.js 中引用的 svg 文件
    - registerServiceWorker.js —— 通过网页形式写手机应用，具有缓存效果
- .gitignore —— git 忽略提交配置
- package.json —— 定义项目所需要的各种模块，以及项目的配置信息
- README.md —— 类似于“公告”的文件，下载别人项目时首先需要了解该文件
```

<br>

### 1.3 简化项目目录
![目录](../../public-repertory/img/js-react-chapter1-4.png)

* React 运行顺序：
  
**1. 访问 index.js ：**
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
&emsp;在这里，index.js 引用了 `react`、`react-dom` ，其中 `react` 是 react 的核心代码， 而 react 的核心思想是虚拟 dom，所以在操作 dom 的方法上，还需要引用 `react-dom`，从而去打包解压 dom 节点。  
&emsp;然后，还引用了 App.js 文件，该文件在下面会有介绍。  
&emsp;最后，使用 `react-dom` 渲染从 App.js 中加载过来的 dom 节点，放到 id 为 root 的 节点上。  

**2. 访问 App.js ：**
```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h3>Hello React!</h3>
    );
  }
}

export default App;
```
&emsp;在这里，App.js 引用了 `react` 及其组件 react.Component。  
&emsp;然后，继承 react 的组件类，渲染了一个组件 \<h3\>  
&emsp;最后，将 App 这个类，导出给引用它的 index.js。  

**3. index.html 介绍：**
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
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
&emsp;在这里，提供了 SPA(single page web application) 的渲染界面，index.js 将把渲染的 dom 节点加载到该文件。

**4. favicon.ico 介绍：**[百度百科](https://baike.baidu.com/item/favicon.ico/8944811?fr=aladdin)


**5. .gitignore 文件介绍：**[jsliang见解](https://github.com/LiangJunrong/document-library/blob/master/other-library/git/git.md)

**6. package.json 文件介绍：** [阮一峰见解](http://javascript.ruanyifeng.com/nodejs/packagejson.html)

**7. README.md 文件介绍：** [jsliang见解](https://github.com/LiangJunrong/document-library/blob/master/other-library/markdown/markdown.md)

<br>

&emsp;最后的最后，通过
```
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test --env=jsdom",
"eject": "react-scripts eject"
```
&emsp;这四个命令，进行相关操作，我们使用 `npm run start`，看到改版后的界面变成：

![目录](../../public-repertory/img/js-react-chapter1-5.png)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

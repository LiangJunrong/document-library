# 仿简书项目 - 1 - 基础环境搭建
> create by **jsliang** on **2018-9-10 14:35:03**  
> Recently revised in **2018-9-10 14:41:12**

## 第一章 基础环境搭建

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

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
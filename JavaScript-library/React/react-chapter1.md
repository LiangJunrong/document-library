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

&emsp;如上，该项目有目录
```
+ node_modules —— node 依赖安装包
    - ... —— 详细安装包文件目录
+ public —— 共用的文件夹
    - favicon.ico —— 网站标签页上的图标
    - index.html —— 网站首页的 html 模板
    - mainfest.json —— 定义缓存的文件，配合 registerServiceWorker.js
+ src —— 存放项目源代码
    - App.css —— 被嵌入到 App.js 中的 css 文件
    - App.js —— 网站的首页组件
    - App.test.js —— 做自动化测试的时候使用的文件
    - index.css —— 被嵌入到 index.js 中的 css 文件
    - index.js —— 项目的入口文件
    - logo.svg —— App.js 中引用的 svg 文件
    - registerServiceWorker.js ——
- .gitignore —— git 忽略提交配置
- package.json —— 定义项目所需要的各种模块，以及项目的配置信息
- README.md —— 类似于“公告”的文件，下载别人项目时首先需要了解该文件
```

&emsp;值得注意的是：
* .gitignore 文件介绍：[jsliang见解](https://github.com/LiangJunrong/document-library/blob/master/other-library/git/git.md)
* package.json 文件介绍： [阮一峰见解](http://javascript.ruanyifeng.com/nodejs/packagejson.html)
* README .md 文件介绍： [jsliang见解](https://github.com/LiangJunrong/document-library/blob/master/other-library/markdown/markdown.md)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。

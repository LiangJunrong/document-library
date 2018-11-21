Node
===

> Create by **jsliang** on **2018-11-8 13:33:29**  
> Recently revised in **2018-11-8 13:33:35**

<br>

# Node 介绍

* 什么是 Node.js？

&emsp;Node.js 是一个 JavaScript 运行环境(runtime)。它让 JavaScript 可以开发后端程序，实现几乎其他后端语言实现的所有功能。传说中 **能与 PHP、JSP、Python、Ruby 等后端语言平起平坐**。但是，实际上 Node 一般用作中间件。例如：在浏览器端和 Java 端使用 Node 作为中间件，Node 调用 Java 后端发布的接口，同时 Node 可以发布 HTTP 接口给浏览器端调用。[浅谈前后端分离与实践之 nodejs 中间层服务(二) | 知乎](https://zhuanlan.zhihu.com/p/30384677)

<br>

# 编程环境

1. Node.js

&emsp;在开发学习中，我们需要安装配置 Node 的环境。  
&emsp;那么，我们需要先下载 Node 并安装到我们的电脑上。  
&emsp;然后，我们需要了解 Node 与 NPM 之间的关系。  
&emsp;最后，由于 npm 在国内有一定限制，所以，我们需要换成淘宝的 npm 镜像：cnpm。从而提高我们的 npm 包的下载安装速度。  
&emsp;个中繁杂，由于系统还要考虑 Win、Mac 等缘故，这里不一一累述，请小伙伴们按照下面的链接先行安装 Node，不明之处可去百度或者 Google。

* [Node 下载 | Node.js 中文网](http://nodejs.cn/download/)
* [Node 安装步骤 | 菜鸟教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)
* [Node 与 Npm | 廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143450141843488beddae2a1044cab5acb5125baf0882000)
* [cnpm | 淘宝 NPM 镜像](https://npm.taobao.org/)

&emsp;最后，**jsliang** 的 Node、Npm、Cnpm 版本如下。

![图](../../public-repertory/img/other-node-readme-1.png)

2. Visio Studio Code

&emsp;如果你是个前端开发，那么 Visio Studio Code（以下简称 VS Code）一定不能错过，因为这是一款轻量级的代码编辑器，支持语法高亮、智能代码补全、自定义热键、括号匹配、代码片段、代码对比 Diff、GIT 等特性。所以，下个 VS Code 愉快玩耍吧！

* [Visio Studio Code 安装 | 官网](https://code.visualstudio.com/)
* [Visio Studio Code 安装及使用技巧 | 博客园](https://www.cnblogs.com/huyong/p/4573041.html)

<br>

# 技术支撑

* [IT 营](https://www.itying.com)
* [IT 营大地老师 2018 年 4 月 Node.js Koa2 视频教程 avi 版本（课件+源码+视频）](https://pan.baidu.com/s/1O2C6TolDzYpMnKIfQaaqog?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid=#list/path=%2F&parentPath=%2F)

* [进击 Node.js 基础（一）](https://www.imooc.com/learn/348)
* [进击 Node.js 基础（二）](https://www.imooc.com/learn/637)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
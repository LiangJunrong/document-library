npm 学习
===

> Create by **jsliang** on **2018-10-28 11:14:22**  
> Recently revised in **2018-12-23 21:23:54**

<br>

&emsp;npm 是啥？  
&emsp;npm 是世界上最大的开放源代码的生态系统。我们可以通过 npm 下载各种各样的包。  
&emsp;在我们安装 Node 的时候，它默认会顺带给你安装 npm。

* `npm -v`：查看 npm 版本。
* `npm list`：查看当前目录下都安装了哪些 npm 包。
* `npm info 模块`：查看该模块的版本及内容。
* `npm i 模块@版本号`：安装该模块的指定版本。

&emsp;在平时使用 npm 安装包的过程中，你可能需要知道一些 npm 基本知识：

* `i`/`install`：安装。使用 `install` 或者它的简写 `i`，都表明你想要下载这个包。
* `uninstall`：卸载。如果你发现这个模块你已经不使用了，那么可以通过 `uninstall` 卸载它。
* `g`：全局安装。表明这个包将安装到你的计算机中，你可以在计算机任何一个位置使用它。
* `--save`/`-S`：通过该种方式安装的包的名称及版本号会出现在 `package.json` 中的 `dependencies` 中。`dependencies` 是需要发布在生成环境的。例如：`ElementUI` 是部署后还需要的，所以通过 `-S` 形式来安装。
* `--save-dev`/`-D`：通过该种方式安装的包的名称及版本号会出现在 `package.json` 中的 `devDependencies` 中。`devDependencies` 只在开发环境使用。例如：`gulp` 只是用来压缩代码、打包的工具，程序运行时并不需要，所以通过 `-D` 形式来安装。

&emsp;例子：

* `cnpm i webpack-cli -D`
* `npm install element-ui -S`

&emsp;那么，这么多的 npm 包，我们通过什么管理呢？  
&emsp;答案是 `package.json`。  
&emsp;如果我们需要创建 `package.json`，那么我们只需要在指定的包管理目录（例如 `node_modules`）中通过以下命名进行生成：

* `npm init`：按步骤创建 `package.json`。
* `npm init --yes`：快速创建 `package.json`

&emsp;当然，因为国内网络环境的原因，有些时候通过 npm 下载包，可能会很慢或者直接卡断，这时候就要安装淘宝的 npm 镜像：cnpm

* `npm install -g cnpm --registry=https://registry.npm.taobao.org`

<br>

# 常用模块

* 记录一些常用的 npm 包的简介

| npm         | 详细地址                                                                                                 | 介绍                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| http-server | [有关博客的说明](https://www.cnblogs.com/lucker/p/4108838.html) / [npmjs.com说明](https://www.npmjs.com/package/http-server) | http-server 是一个简单的零配置命令行 HTTP 服务器，基于 nodeJs 。 |
| live-server | [有关博客的说明](https://blog.csdn.net/shan1991fei/article/details/79007953) / [npmjs.com说明](https://www.npmjs.com/package/live-server) | 比http-server 更好用的 npm 包，能热更新（ Ctrl+S 即时刷新）。 |
| babel-core | [有关博客的说明](https://www.baidu.com/link?url=ODIMq0h7q29RvIIo7VXM9HULk0noouNVK0e66oYxdsGc9LM9UDOQCWuY6EZUk6GGpWQssnjxqKMvoNyZbEa2Fa&wd=&eqid=b68b207c000035f6000000065b874d94) / [npmjs.com说明](https://www.npmjs.com/package/babel-core) | 把es6中的新语法（箭头函数、rest参数等）解析成ast这种形式，然后配合各个插件分析语法进行相应的处理。 |
| babel-loader | [有关博客的说明](https://blog.csdn.net/boysky0015/article/details/71450603) / [npmjs.com说明](https://www.npmjs.com/package/babel-loader) | 一种loader解析器，配合Webpack解析ES6编写的js文件。 |
| babel-preset-\* | [有关博客的说明](https://www.cnblogs.com/ye-hcj/p/7070084.html) / [npmjs.com说明](https://www.npmjs.com/package/babel-preset-env) | babel-reset-2015包含了es6对应的新语法，如果配置了babel-reset-latest，则包含了es2015、es2016、es2017的插件（之后可能包括es2018等）。`注：在安装过程中jsliang发现，官方已不建议使用babel-preset-*系列了，而是推荐使用下面介绍的babel-preset-env包。` |
| babel-polyfill | [有关博客的说明](https://www.cnblogs.com/princesong/p/6728250.html) / [npmjs.com说明](https://www.npmjs.com/package/babel-polyfill) | 实现浏览器对不支持API的兼容（兼容旧环境、填补）。 |
| babel-preset-env | [有关博客的说明](https://segmentfault.com/a/1190000011639765) / [npmjs.com说明](https://www.npmjs.com/package/babel-preset-env) | 如果不做任何配置，该loader等同于bable-preset-latest，如果你需要根据不同浏览器或者node版本进行配置，推荐使用babel-preset-env进行配置使用 |
| babel-plugin-transform-decorators-legacy | [有关博客的说明](https://www.jb51.net/article/119230.htm) / [npmjs.com说明](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy) | 该插件能使ES7的装饰器能被解析成ES5语法并被使用。 |
| core-decorators | [Github](https://github.com/jayphelps/core-decorators) / [npmjs.com说明](https://www.npmjs.com/package/core-decorators) | 该插件能使ES7的装饰器能被解析成ES5语法并被使用。 |
| react-transition-group | [有关博客的说明](https://www.baidu.com/link?url=HBStwY6yxCqKnFhjdw0HynAkAeTyr55oXNl6S-z8HNbFQmPPJZAg4xT7CBcv0h_ULh2URgCLGCCcKeBJ3uC5VxBR3SlOB4EkF089xyTbAVW&wd=&eqid=ea31de7700002cf1000000065b972956) / [npmjs.com说明](https://www.npmjs.com/package/react-transition-group) | 该插件能使ES7的装饰器能被解析成ES5语法并被使用。 |

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
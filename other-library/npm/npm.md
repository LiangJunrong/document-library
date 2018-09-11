# npm
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

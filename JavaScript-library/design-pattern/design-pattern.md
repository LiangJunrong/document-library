# 设计模式手册 - 0 - 目录和简介
> create by **jsliang** on **2018年8月21日11:30:00** 

## 目录
1. [部署开发环境](./design-pattern-chapter1.md)
2. more...
3. more...

<br>

## 知识普及：  
1. Webpack
* **babel-core**：把es6中的新语法（箭头函数、rest参数等）解析成ast这种形式，然后配合各个插件分析语法进行相应的处理。
* **babel-loader**：一种loader解析器，配合Webpack解析ES6编写的js文件。
* **babel-preset-\***：babel-reset-2015包含了es6对应的新语法，如果配置了babel-reset-latest，则包含了es2015、es2016、es2017的插件（之后可能包括es2018等）。`注：在安装过程中jsliang发现，官方已不建议使用babel-preset-*系列了，而是推荐使用下面介绍的babel-preset-env包。`
* **babel-polyfill**：实现浏览器对不支持API的兼容（兼容旧环境、填补）。
* **babel-preset-env**：如果不做任何配置，该loader等同于bable-preset-latest，如果你需要根据不同浏览器或者node版本进行配置，推荐使用babel-preset-env进行配置使用 [详情介绍](https://segmentfault.com/a/1190000011639765)
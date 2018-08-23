# 设计模式手册 - 0 - 目录和简介
> create by **jsliang** on **2018年8月21日11:30:00** 

## 目录
1. [部署开发环境](./design-pattern-chapter1.md)
2. [面向对象与设计模式初探](./design-pattern-chapter2.md)
3. more...

<br>

## 知识普及：  
1. Webpack
* **babel-core**：把es6中的新语法（箭头函数、rest参数等）解析成ast这种形式，然后配合各个插件分析语法进行相应的处理。
* **babel-loader**：一种loader解析器，配合Webpack解析ES6编写的js文件。
* **babel-preset-\***：babel-reset-2015包含了es6对应的新语法，如果配置了babel-reset-latest，则包含了es2015、es2016、es2017的插件（之后可能包括es2018等）。`注：在安装过程中jsliang发现，官方已不建议使用babel-preset-*系列了，而是推荐使用下面介绍的babel-preset-env包。`
* **babel-polyfill**：实现浏览器对不支持API的兼容（兼容旧环境、填补）。
* **babel-preset-env**：如果不做任何配置，该loader等同于bable-preset-latest，如果你需要根据不同浏览器或者node版本进行配置，推荐使用babel-preset-env进行配置使用 [详情介绍](https://segmentfault.com/a/1190000011639765)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
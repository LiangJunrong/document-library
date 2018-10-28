Angular开发手册 - 1 - 环境搭建
===

> create by **jsliang** on **2018年9月5日12:28:37**   
> Recently revised in **2018-10-28 10:54:44**

## 第一章 环境搭建

**1. 安装 Angular：**  
`npm i @angular/cli -g`
```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 6.1.5
Node: 8.11.2
OS: win32 x64
Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.7.5
@angular-devkit/core         0.7.5
@angular-devkit/schematics   0.7.5
@schematics/angular          0.7.5
@schematics/update           0.7.5
rxjs                         6.3.2
typescript                   2.9.2
```

<br>

**2. 安装 VS Code 插件：**  
`Debugger for Chrome`、`Angular 6 Snippets`

<br>

**3. 安装开发插件：**  
安装 Chrome 关于 Angular 的开发插件：[点击前往](../../other-library/crx/readMe.md)

<br>

**4. 常用命令：**
```
npm i -S —— 软件开发依赖
npm i -D —— 软件生产依赖
ng new  —— 新建 Angular项目
ng build -prod —— 生产环境编译
ng server —— 启动开发服务器
```

<br>

**5. Mock Rest API**
* json-server: 用户快速搭建 REST API 的利器。
* 安装：`npm i json-server -g`，版本为 `0.14.0` 。 
* 启动：`json-server /json 文件位于的目录/*.json`。
* 支持 GET， POST， PUT， PATCH， DELETE 等 REST 命令。

<br>

**6. 测试 REST API：**  
* 几种常用的 API 测试工具：
1. 使用 Postman 测试常用的 API：[地址](https://www.getpostman.com/)
2. 使用 VS Code 的 REST Client 插件

<br>

> 此刻， **jsliang** 的 `node` 等版本为：  
> `node` : 8.11.2  
> `npm` : 6.3.0  
> `cnpm` : 6.0.0  

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
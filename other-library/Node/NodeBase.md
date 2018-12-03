Node 基础
===

> Create by **jsliang** on **2018-11-8 13:42:42**  
> Recently revised in **2018-12-3 22:36:15**

<br>

# <a name="chapter-one" id="chapter-one">一 目录</a>

&emsp;**不折腾的前端，和咸鱼有什么区别**

| 目录 |                                                                             
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 资料整合](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 基础学习](#chapter-three) |
| &emsp;<a name="catalog-chapter-three-one" id="catalog-chapter-three-one"></a>[3.1 HTTP - 开始 Node 之旅](#chapter-three-one) |
| &emsp;<a name="catalog-chapter-three-two" id="catalog-chapter-three-two"></a>[3.2 URL 模块](#chapter-three-two) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 工具整合](#chapter-four) |
| &emsp;<a name="catalog-chapter-four-one" id="catalog-chapter-four-one"></a>[4.1 supervisor - 监听 Node 改动](#chapter-four-one) |

<br>

# <a name="chapter-two" id="chapter-two">二 前言</a>

> [返回目录](#catalog-chapter-two)

<br>

&emsp;本文主要目的：

1. 整合 Node 基础，加深 **jsliang** 对 Node 的学习了解并且方便复习。纯属个人参考，如需学习还请在 QQ 群：`798961601` 中咨询。  
2. 整合 Node 工具，方便查找在 Node 开发中，有哪些工具比较有利于开发。

&emsp;参考资料：

<br>

# <a name="chapter-three" id="chapter-three">三 基础</a>

> [返回目录](#catalog-chapter-three)

<br>

# <a name="chapter-three-one" id="chapter-three-one">3.1 HTTP - 开始 Node 之旅</a>

> [返回目录](#catalog-chapter-three-one)

<br>

&emsp;话不多说，先上代码：

> 01_http.js

```
// 1. 引入 http 模块
var http = require("http");

// 2. 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {
  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  // 往页面打印值
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  // 结束响应
  res.end();

}).listen(3000); // 监听的端口
```

<br>

&emsp;那么，上面代码，我们要怎么用呢？

&emsp;**首先**，将上面的代码复制粘贴到 `01_http.js` 中。  
&emsp;**然后**，启动 VS Code 终端：`Ctrl + ~`。  
&emsp;**接着**，输入 `node 01_http.js` 并回车。  
&emsp;**最后**，打开 `localhost:3000`：

![图](../../public-repertory/img/other-node-NodeBase-1.png)

<br>

&emsp;OK，搞定完事，现在我们一一讲解上面代码：

1. 首先，我们需要先开启仙人模式，哦，不是，是 `HTTP` 模式。我们都知道，像 PHP 这类老牌子的后端语言，需要 Apache 或者 Nginx 开启 HTTP 服务。然而我们的 Node 不需要：

```
var http = require("http");
```

2. 然后，开启 HTTP 服务，并设置开启的端口：

```
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {
  // ... 步骤 3 代码
}).listen(3000); // 监听的端口
```

3. 接着，我们设置 HTTP 头部，并往页面打印值，最后结束响应：

```
// 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
res.writeHead(200, {
  "Content-Type": "text/html;charset=UTF-8"
});

// 往页面打印值
res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

// 结束响应 
res.end();
```

4. 最后，我们往浏览器输入 `http://localhost:3000/`，将访问到我们开启的 Node 服务，从而往页面渲染页面。

&emsp;至此，小伙伴们是不是也开启了自己的 Node 之旅？

<br>

# <a name="chapter-three-two" id="chapter-three-two">3.2 URL 模块</a>

> [返回目录](#catalog-chapter-three-two)

<br>

&emsp;URL 模块是什么呢？  
&emsp;我们在控制台（终端）开启 Node 模式，并打印出 `url` 来看一下：

![图](../../public-repertory/img/other-node-NodeBase-2.png)

&emsp;好家伙，它有 `Url`、`parse`、`resolve`、`resolveObject`、`format`、`URL`、`URLSearchParams`、`domainToASCII`、`domainToUnicode` 这几个模块。  
&emsp;那么，这些模块都有什么用呢？

&emsp;话不多说，先上代码：

> 02_url.js

```
// 1. 引入 url 模块
var url = require("url");

// 2. 引入 http 模块
var http = require("http");

// 3. 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {

  // 4. 获取服务器请求
  /**
   * 访问地址是：http://localhost:3000/?userName=jsliang&userAge=23
   * 如果你执行 console.log(req.url)，它将执行两次，分别返回下面的信息：
   * /  ?userName=jsliang&userAge=23
   * /  /favicon.ico
   * 这里为了防止重复执行，所以排除 req.url == /favicon.ico 的情况
   */
  if(req.url != "/favicon.ico") {
    
    // 5. 使用 url 的 parse 方法
    /**
     * parse 方法需要两个参数：
     * 第一个参数是地址
     * 第二个参数是 true 的话表示把 get 传值转换成对象
     */ 
    var result = url.parse(req.url, true);
    console.log(result);
    /**
     * Url {
     *   protocol: null,
     *   slashes: null,
     *   auth: null,
     *   host: null,
     *   port: null,
     *   hostname: null,
     *   hash: null,
     *   search: '?userName=jsliang&userAge=23',
     *   query: { userName: 'jsliang', userAge: '23' },
     *   pathname: '/',
     *   path: '/?userName=jsliang&userAge=23',
     *   href: '/?userName=jsliang&userAge=23' }
     */

    console.log(result.query.userName); // jsliang

    console.log(result.query.userAge); // 23
  }

  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  // 往页面打印值
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  // 结束响应
  res.end();

}).listen(3000);
```

<br>

&emsp;在上面的代码中：

&emsp;**首先**，我们引入该章节的主角 `url` 模块：

```
// 1. 引入 url 模块
var url = require("url");
```

&emsp;**然后**，我们引入 `http` 模块：

```
// 2. 引入 http 模块
var http = require("http");
```

&emsp;**接着**，我们创建 `http` 模块，因为 `url` 的监听，需要 `http` 模块的开启：

```
// 3. 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {
  // ... 第 4 步、第 5 步代码

  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  // 往页面打印值
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  // 结束响应
  res.end();
}).listen(3000);
```

&emsp;**最后**，我们访问我们给出的地址：`http://localhost:3000/?userName=jsliang&userAge=23`，并通过它查看 `url` 的 `parse` 模块怎么用，输出啥：

```
// 4. 获取服务器请求
/**
  * 访问地址是：http://localhost:3000/?userName=jsliang&userAge=23
  * 如果你执行 console.log(req.url)，它将执行两次，分别返回下面的信息：
  * /  ?userName=jsliang&userAge=23
  * /  /favicon.ico
  * 这里为了防止重复执行，所以排除 req.url == /favicon.ico 的情况
  */
if(req.url != "/favicon.ico") {
  
  // 5. 使用 url 的 parse 方法
  /**
    * parse 方法需要两个参数：
    * 第一个参数是地址
    * 第二个参数是 true 的话表示把 get 传值转换成对象
    */ 
  var result = url.parse(req.url, true);
  console.log(result);
  /**
    * Url {
    *   protocol: null,
    *   slashes: null,
    *   auth: null,
    *   host: null,
    *   port: null,
    *   hostname: null,
    *   hash: null,
    *   search: '?userName=jsliang&userAge=23',
    *   query: { userName: 'jsliang', userAge: '23' },
    *   pathname: '/',
    *   path: '/?userName=jsliang&userAge=23',
    *   href: '/?userName=jsliang&userAge=23' }
    */

  console.log(result.query.userName); // jsliang

  console.log(result.query.userAge); // 23
}
```

&emsp;从中，我们可以看出，我们可以通过 `query`，获取到我们想要的路径字段。

<br>

&emsp;当然，上面只讲解了 `parse` 的用法，我们可以将上面代码中 `if` 语句里面的代码全部清空。然后，输入下面的内容，去学习 `url` 模块更多的内容：

1. url 模块所有内容：

```
console.log(url);

/**
 * Console：
 { 
   Url: [Function: Url],
    parse: [Function: urlParse], // 获取地址信息
    resolve: [Function: urlResolve], // 追加或者替换地址
    resolveObject: [Function: urlResolveObject],
    format: [Function: urlFormat], // 逆向 parse，根据地址信息获取原 url 信息
    URL: [Function: URL],
    URLSearchParams: [Function: URLSearchParams],
    domainToASCII: [Function: domainToASCII],
    domainToUnicode: [Function: domainToUnicode] 
  }
 */
```

<br>

2. parse 如何使用

```
console.log(url.parse("http://www.baidu.com"));

/**
 * Console：
  Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: null,
    query: null,
    pathname: '/',
    path: '/',
    href: 'http://www.baidu.com/' 
  }
 */
```

<br>

3. parse 带参数：

```
console.log(url.parse("http://www.baidu.com/new?name=zhangsan"));

/**
 * Console：
  Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?name=zhangsan',
    query: 'name=zhangsan',
    pathname: '/new',
    path: '/new?name=zhangsan',
    href: 'http://www.baidu.com/new?name=zhangsan' 
  }
 */
```

<br>

4. `format` 怎么用：

```
console.log(url.format({
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?name=zhangsan',
  query: 'name=zhangsan',
  pathname: '/new',
  path: '/new?name=zhangsan',
  href: 'http://www.baidu.com/new?name=zhangsan' 
}))

// Console：
// http://www.baidu.com/new?name=zhangsan
```

<br>

5. `resolve` 怎么用：

```
console.log(url.resolve("http://www.baidu.com/jsliang", "梁峻荣"));

// Console：
// http://www.baidu.com/梁峻荣
```

&emsp;当然，`url` 在这里我们只讲解了个入门，更多的还请看官网 API：[url | Node.js v10.14.1 文档](http://nodejs.cn/api/url.html#url_class_url)

<br>

# <a name="chapter-four" id="chapter-four">四 工具整合</a>

> [返回目录](#catalog-chapter-four)

<br>

&emsp;工欲善其事，必先利其器。  
&emsp;掌控好了工具，可以方便你更快地进行开发。

<br>

# <a name="chapter-four-one" id="chapter-four-one">4.1 supervisor - 监听 Node 改动</a>

> [返回目录](#catalog-chapter-four-one)

<br>

* [supervisor 官网](http://www.supervisord.org/)

&emsp;正如其官网所说，它是一个进行控制系统：

1. 安装插件：`npm i supervisor -g`
2. 运行文件：`supervisor app.js`
3. 查看运行：`localhost:3000`

&emsp;平时，我们 `node app.js` 后，当我们修改了 `app.js` 的内容，就需要关闭 node 命令行再执行 `node app.js`。  
&emsp;而我们使用 `supervisor` 后，我们修改了 `app.js` 中的内容，只要点击保存，即可生效保存后的代码，实现实时监听 node 代码的变动。  

&emsp;关于这个工具，网上更详细的攻略有：

* [详细版：用Supervisor守护你的Node.js进程 | 简书 - Mike的读书季](https://www.jianshu.com/p/6d84e5efe99d)

<br>

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><a xmlns:dct="http://purl.org/dc/terms/" property="dct:title">**jsliang** 的文档库</a> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.om/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
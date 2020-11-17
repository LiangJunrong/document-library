从输入 URL 到页面呈现
===

> Create by **jsliang** on **2020-09-21 23:29:10**  
> Recently revised in **2020-11-17 21:09:15**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 整体过程](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 DNS 解析](#chapter-four) |
| <a name="catalog-chapter-five" id="catalog-chapter-five"></a>[五 TCP 连接](#chapter-five) |
| <a name="catalog-chapter-six" id="catalog-chapter-six"></a>[六 发送 HTTP 请求](#chapter-six) |
| <a name="catalog-chapter-seven" id="catalog-chapter-seven"></a>[七 服务器响应](#chapter-seven) |
| <a name="catalog-chapter-eight" id="catalog-chapter-eight"></a>[八 浏览器解析渲染页面](#chapter-eight) |
| <a name="catalog-chapter-night" id="catalog-chapter-night"></a>[九 其他问题及优化](#chapter-night) |
| &emsp;[9.1 渲染过程碰到 JS 文件怎么处理？](#chapter-night-one) |
| &emsp;[9.2 为什么操作 DOM 慢](#chapter-night-two) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

这是一道经典面试题：

* 从输入 `URL` 到页面呈现发生了什么？

如果你还不懂，那么可以来看看。

## <a name="chapter-three" id="chapter-three"></a>三 整体过程

> [返回目录](#chapter-one)

在用户输入 URL，按下回车之后，走过的步骤：

1. `DNS` 解析
2. `TCP` 连接
3. 发送 `HTTP` 请求
4. 服务器响应
5. 浏览器解析渲染页面

当然，这是整体过程，实际面试过程中会进一步详细问，后面会逐步完善，让小伙伴们对这个系列的问题不在纠结。

## <a name="chapter-four" id="chapter-four"></a>四 DNS 解析

> [返回目录](#chapter-one)

`DNS` 解析过程就是通过网络查找哪台机器有你需要的资源的过程。

浏览器输入 `github.com` 并不是真正意义上的去查找这个，而是查找这个域名解析到的 `IP` 地址。

互联网上每一台计算机的唯一标识是它的 `IP` 地址，但是 `IP` 地址并不方便记忆，所以互联网设计者为了方便，才会搞出 `github.com` 这样的域名。

* **DNS 解析过程**：

1. 查询 `www.baidu.com`
2. 访问客户端 DNS 缓存：**浏览器缓存** -> **系统缓存（host）** -> **路由器缓存**
3. 访问 **ISP DNS 服务器**（ISP，互联网服务提供商，有联通电信移动等。如果你是电信网络，则进入电信的 DNS 缓存服务器，以下简称本地），如果本地服务器有，则直接返回；如果没有，让本地 DNS 服务器去咨询查找。
4. 本地去咨询 **DNS 根服务器**，DNS 根服务器发现是 `.com 区域` 管理的，告诉本地去咨询它。
5. 本地去咨询 **.com 顶级域名服务器**，.com 顶级域名服务器不太清楚，告诉本地去咨询 `baidu.com 主区域` 的服务器。
6. 本地去咨询 **baidu.com 主域名服务器**，baidu.com 域服务器查找到对应的 IP 地址，返回给本地。
7. 本地服务器通知用户，`baidu.com` 对应的 IP 地址，同时缓存这个 IP 地址，下次就直接访问了。

这个过程可以看看，详细的就不一一讲解了，不懂的去看 **jsliang** 的文章：

* [浏览器 - 浏览器缓存](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98.md)
* [计算机网络 - DNS](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/DNS.md)

当然，这两篇文章后续也会发布，可以先忽略。

## <a name="chapter-five" id="chapter-five"></a>五 TCP 连接

> [返回目录](#chapter-one)

* 建立连接阶段：3 次握手。建立客户端和服务器之间的连接。
* 传输数据阶段
* 断开连接阶段：4 次挥手。断开客户端和服务器之间的连接。

如果 3 次握手和 4 次挥手你不懂过程，详细可以看 **jsliang** 的文章：

* [计算机网络 - TCP](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP.md)

这里也可以先忽略，后续进一步跟进理解。

## <a name="chapter-six" id="chapter-six"></a>六 发送 HTTP 请求

> [返回目录](#chapter-one)

发送 `HTTP` 请求的过程就是构建 `HTTP` 请求报文，并通过 `TCP` 协议发送到服务器指定端口（`HTTP` 协议默认端口 `80/8080`，`HTTPS` 协议默认端口 `443`）。

`HTTP` 请求报文由 3 部分组成：**请求行**、**请求报文** 和 **请求正文**。

* **请求行**：常用方法有：GET、POST、PUT、DELETE、OPTIONS、HEAD。
* **请求报头**：允许客户端向服务器传递请求的附加信息和客户端自身的信息。
* **请求正文**：通过 POST、PUT 等方法时，通常需要客户端向服务器传递数据，这些数据就储存在请求正文中。

当然，`HTTP` 请求需要注意是否跨域，如何解决跨域问题：

* [浏览器 - 跨域](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/%E8%B7%A8%E5%9F%9F.md)

## <a name="chapter-seven" id="chapter-seven"></a>七 服务器响应

> [返回目录](#chapter-one)

服务器处理请求完毕后，会返回 `HTTP` 报文。

`HTTP` 响应报文也是由 3 部分组成：**状态码**、**响应报头** 和 **响应报文**。

* **状态码**：`1xx` 指示信息-表示请求已接收；`2xx` 请求成功-表示请求成功接收并解析；`3xx` 重定向-表示要完成请求需要更进一步操作；`4xx` 客户端错误-请求有语法错误或者请求无法实现；`5xx`：服务端错误-服务端未能实现合法的请求。**常见状态码**：200（成功）、304（请求内容有缓存，不需要更新）、404（网页或者文件找不到）、500（服务器-后端处理错误）。
* **响应报头**：常见的响应报头字段 `Server`、`Connection` 等。
* **响应报文**：服务器返回给浏览器的文本信息，通常 HTML、CSS、JS、图片等文件就放在这一部分。

综上，`URL` 解析过程的步骤 3 和步骤 4 是 `HTTP` 请求和服务器响应，所以这一块会问到 `HTTP` 状态码、`HTTPS` 等知识点，后续我们会进一步跟进学习，这里先做概念性理解。

## <a name="chapter-eight" id="chapter-eight"></a>八 浏览器解析渲染页面

> [返回目录](#chapter-one)

![图](./img/other-page-parse.png)

如上图，浏览器的渲染过程为：

1. 解析 HTML，生成 `DOM` 树
2. 解析 CSS，生成 `CSS 规则树（CSS Rule Tree）`
3. 将 `DOM Tree` 和 `CSS Rule Tree` 相结合，生成 **渲染树**（`Render Tree`）
4. 从根节点开始，计算每一个元素的大小、位置，给出每个节点所应该出现的屏幕精确坐标，从而得到基于渲染树的 **布局渲染树**（`Layout of the render tree`）。
5. 遍历渲染树，将每个节点用 UI 渲染引擎来绘制，从而将整棵树绘制到页面上，这个步骤叫 **绘制渲染树**（`Painting the render tree`）

> 这个渲染过程需要重点记忆，出场概率非常大

在解析渲染过程中，可能会产生 **回流** 和 **重绘**：

* **重绘(repaint)**：当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要 UI 层面的重新像素绘制，因此**损耗较少**。
* **回流(reflow)**：又叫重排（`layout`）。当元素的尺寸、结构或者触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。

那么：

1. 什么操作会重绘和回流？
2. 如何优化？

详细可看：

* [浏览器 - 回流和重绘](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/%E9%87%8D%E6%8E%92%E5%92%8C%E9%87%8D%E7%BB%98.md)

后续跟进文章学习也是可以的，这里先贴链接。

## <a name="chapter-night" id="chapter-night"></a>九 其他问题及优化

> [返回目录](#chapter-one)

在上面步骤中，其实可以发掘很多优化点：

* DNS 缓存
* 浏览器缓存
* 减少回流和重绘
* ……

如果你过程都了解了，那么优化基本不是问题。

当然，为了加深印象，可以看 **jsliang** 整理的文章：

* [浏览器 - 性能优化](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md)

### <a name="chapter-night-one" id="chapter-night-one"></a>9.1 渲染过程碰到 JS 文件怎么处理？

> [返回目录](#chapter-one)

JavaScript 的加载、解析和执行会阻塞 DOM 的构建。

也就是说：在构建 `DOM` 的时候，HTML 解析器如果碰到 JavaScript，那么就会停止构建 `DOM`，将控制权交给 JavaScript 引擎，等 JavaScript 运行完毕，浏览器再从中断的地方恢复 `DOM` 构建。

也就是说：首屏渲染越快，就越不应该在首屏的时候加载 JS 文件，这也就是建议将 `script` 标签放到 `body` 标签底部，或者给 `script` 标签添加 `defer/async` 属性的原因。

### <a name="chapter-night-two" id="chapter-night-two"></a>9.2 为什么操作 DOM 慢

> [返回目录](#chapter-one)

1. 涉及 JS 引擎和渲染引擎两个线程间的通信，损耗性能。
2. 操作 DOM 可能会重复回流，加剧性能损耗。

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

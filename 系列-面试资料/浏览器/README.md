浏览器
===

> Create by **jsliang** on **2020-09-02 14:48:58**  
> Recently revised in **2020-11-25 07:35:50**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |
| &emsp;[3.1 付费网络书籍](#chapter-three-one) |
| &emsp;[3.2 浏览器](#chapter-three-two) |
| &emsp;[3.3 浏览器缓存](#chapter-three-three) |
| &emsp;[3.4 浏览器垃圾回收](#chapter-three-four) |
| &emsp;[3.5 回流与重绘](#chapter-three-five) |
| &emsp;[3.6 跨域](#chapter-three-six) |
| &emsp;[3.7 性能优化](#chapter-three-seven) |
| &emsp;&emsp;[3.7.1 Webpack 优化](#chapter-three-seven-one) |
| &emsp;&emsp;[3.7.2 其他优化](#chapter-three-seven-two) |
| &emsp;[3.8 本地存储](#chapter-three-eight) |
| &emsp;[3.9 其他](#chapter-three-night) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

在整理 **浏览器** 相关题型的面试点中，产出了下面的 8 篇文章：

* [x] [从输入 URL 到页面呈现](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/%E4%BB%8E%E8%BE%93%E5%85%A5%20URL%20%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%91%88%E7%8E%B0.md)
  * [x] **整体过程**：DNS 解析 -> TCP 连接 -> 发送 HTTP 请求 -> 服务器响应 -> 浏览器解析渲染页面
  * [x] **DNS 解析过程**：浏览器缓存 -> 系统缓存（host） -> 路由器缓存 -> ISP DNS 服务器 -> 递归查询
  * [x] **TCP 连接**：建立连接阶段 -> 数据传输阶段 -> 断开连接阶段，3 次握手和 4 次挥手
  * [x] **发送 HTTP 请求**：请求行、请求报文和请求正文，GET 和 POST 区别，HTTP 状态码
  * [x] **服务器响应**：状态码、响应报头和响应报文
  * [x] **浏览器解析渲染页面**：DOM 树 -> CSS 规则树 -> 渲染树（Render Tree） -> 布局渲染树（Layout tree） -> 绘制渲染树（Painting tree），回流和重绘
  * [x] **性能优化**：……
* [x] [本地存储](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8.md)
  * [x] **Cookie**
  * [x] **Local Storage**
  * [x] **Session Storage**
  * [x] **IndexedDB**
* [x] [浏览器缓存](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98.md)
  * [x] **缓存位置**：Service Worker、Memory Cache、Disk Cache、Push Cache
  * [x] **缓存过程**
  * [x] **缓存机制**：强缓存、协商缓存
  * [x] **缓存实例**：频繁变动的缓存、不常变化的资源
* [x] [回流和重绘](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/%E9%87%8D%E6%8E%92%E5%92%8C%E9%87%8D%E7%BB%98.md)
  * [x] **浏览器渲染过程**
  * [x] **重绘**：修改背景色/颜色、设置可见度、设置背景图……
  * [x] **回流**：添加/删除 DOM 元素、改变边框/边距/宽高、改变窗口大小……
  * [x] **优化**：避免频繁操作 DOM，集中操作；避免 `table` 布局
* [x] [跨域](https://github.com/LiangJunrong/document-library/blob/master/other-library/interview/%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86/%E6%B5%8F%E8%A7%88%E5%99%A8/%E8%B7%A8%E5%9F%9F.md)
  * [x] **同源策略**：什么是同源？为什么要设置跨域？
  * [x] **解决跨域的方式**：JSONP、CORS、postMessage、WebSocket、Node、Nginx、其他
* [x] [垃圾回收](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.md)
  * [x] **栈垃圾回收**：ESP 销毁
  * [x] **堆垃圾回收**：新生代和老生代
  * [x] **新生代**：`Scavenge` 算法，对象区域和空闲区域的转换，两次回收后还存在的进入老生区
  * [x] **老生代**：标记-清除、标记-整理
  * [x] **全停顿**：JavaScript 线程中垃圾回收和其他脚本交替执行
* [x] [LRU 缓存淘汰策略](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/LRU%20%E7%BC%93%E5%AD%98%E6%B7%98%E6%B1%B0%E7%AD%96%E7%95%A5.md)
  * [x] **常见淘汰策略**：先进先出（FIFO）、最少使用（LFU）、最近最少使用（LRU）
  * [x] **最近最少使用**：如果数据最近被访问过，那么接下来被访问的概率也越高
  * [x] **实现原理**：新数据插入到链表表头；链表中有数据被访问，也提升到表头；链表满后，链表尾部数据被淘汰
* [x] [性能优化](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E6%B5%8F%E8%A7%88%E5%99%A8/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md)
  * [x] **从 URL 输入到页面解析过程查看性能优化点**：DNS 解析、TCP 连接、发送 HTTP 请求、服务器响应、浏览器解析渲染页面
  * [x] **发送 HTTP 请求**：浏览器缓存、Cookie 和 Web Storage、CDN 的使用、负载均衡
  * [x] **服务器响应**：Webpack 优化、图片优化、Gzip 压缩、服务端渲染（SSR）
  * [x] **浏览器渲染解析页面**：渲染过程、渲染过程优化、回流和重绘优化
  * [x] **其他**：Chrome 插件可视化、长列表、`preload` 预加载页面

当然，还延伸到了 **计算机网络** 部分，例如：

* [x] [计算机网络 - DNS](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/DNS.md)
* [x] [计算机网络 - TCP](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/TCP.md)

后面还会持续更新的吧！加油！

## <a name="chapter-three" id="chapter-three"></a>三 参考文献

> [返回目录](#chapter-one)

参考文献共 68 篇文章，感谢前辈们的贡献。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 付费网络书籍

> [返回目录](#chapter-one)

* [x] [极客时间 - 浏览器工作原理与实践](https://time.geekbang.org/column/intro/100033601)【阅读建议：11.5h】
* [x] [掘金小册 - 前端性能优化原理与实践](https://juejin.im/book/6844733750048210957/section/6844733750031417352)【阅读建议：4h】

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 浏览器

> [返回目录](#chapter-one)

* [x] [(1.6w字)浏览器灵魂之问，请问你能接得住几个？](https://juejin.im/post/6844904021308735502)【阅读建议：4h】
* [x] [前端经典面试题: 从输入URL到页面加载发生了什么？](https://segmentfault.com/a/1190000006879700)【阅读建议：50min】
* [x] [浏览器层合成与页面渲染优化](https://juejin.im/post/6844903966573068301)【阅读建议：20min】
* [x] [浏览器页面资源加载过程与优化](https://juejin.im/post/6844903545016156174)【阅读建议：无】
* [x] [深入浅出浏览器渲染原理](https://zhuanlan.zhihu.com/p/53913989)【阅读建议：30min】
* [x] [浏览器的渲染原理简介](https://coolshell.cn/articles/9666.html)【阅读建议：10min】
* [x] [浏览器的渲染：过程与原理](https://juejin.im/entry/6844903503609987080)【阅读建议：10min】
* [x] [经典面试题：从 URL 输入到页面展现到底发生什么](https://zhuanlan.zhihu.com/p/57895541)【阅读建议：30min】

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 浏览器缓存

> [返回目录](#chapter-one)

* [x] [深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)【阅读建议：1h】
* [x] [浏览器缓存](https://github.com/xiangxingchen/blog/issues/9)【阅读建议：30min】
* [x] [前端必须要懂的浏览器缓存机制](https://juejin.im/entry/6844903599537930253)【阅读建议：10min】
* [x] [关于浏览器缓存你知道多少](https://mp.weixin.qq.com/s/Wvc0lkLpgyEW_u7bbMdvpQ)【阅读建议：10min】
* [x] [设计一个无懈可击的浏览器缓存方案：关于思路，细节，ServiceWorker，以及HTTP/2](https://zhuanlan.zhihu.com/p/28113197)【阅读建议：20min】
* [x] [前端缓存最佳实践](https://juejin.im/post/6844903737538920462)【阅读建议：20min】

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 浏览器垃圾回收

> [返回目录](#chapter-one)

* [x] [JavaScript进阶-内存机制(表情包初探)](https://juejin.im/post/6844904033317027854)【阅读建议：20min】

### <a name="chapter-three-five" id="chapter-three-five"></a>3.5 回流与重绘

> [返回目录](#chapter-one)

* [x] [浏览器的回流与重绘 (Reflow & Repaint)](https://juejin.im/post/6844903569087266823)【阅读建议：10min】
* [x] [你真的了解回流和重绘吗](https://segmentfault.com/a/1190000017329980)【阅读建议：10min】
* [x] [页面重绘和回流以及优化](https://www.html.cn/archives/4996)【阅读建议：5min】
* [x] [浏览器重绘(repaint)重排(reflow)与优化[浏览器机制]](https://juejin.im/post/6844903745914929165)【阅读建议：10min】
* [x] [回流与重绘：CSS性能让JavaScript变慢？](https://www.zhangxinxu.com/wordpress/2010/01/%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98%EF%BC%9Acss%E6%80%A7%E8%83%BD%E8%AE%A9javascript%E5%8F%98%E6%85%A2%EF%BC%9F/)【阅读建议：10min】

### <a name="chapter-three-six" id="chapter-three-six"></a>3.6 跨域

> [返回目录](#chapter-one)

* [x] [浏览器同源策略与ajax跨域方法汇总](https://www.jianshu.com/p/438183ddcea8)【阅读建议：15min】
* [x] [九种跨域方式实现原理（完整版）](https://juejin.im/post/5c23993de51d457b8c1f4ee1)【阅读建议：15min】
* [x] [前端开发如何独立解决跨域问题](https://segmentfault.com/a/1190000010719058)【阅读建议：5min】
* [x] [CORS 原理及实现](https://www.jianshu.com/p/b2bdf55e1bf5)【阅读建议：30min】
* [x] [JSONP 原理及实现](https://www.jianshu.com/p/88bb82718517)【阅读建议：30min】
* [x] [面试题：nginx 有配置过吗?反向代理知道吗?](https://juejin.im/post/6844904148022870023)【阅读建议：10min】
* [x] [10 种跨域解决方案（附终极大招）](https://juejin.im/post/6844904126246027278)【阅读建议：1h】
* [x] [CORS跨域请求[简单请求与复杂请求]](https://www.cnblogs.com/qunxiadexiaoxiangjiao/p/9446956.html)【阅读建议：20min】

### <a name="chapter-three-seven" id="chapter-three-seven"></a>3.7 性能优化

> [返回目录](#chapter-one)

#### <a name="chapter-three-seven-one" id="chapter-three-seven-one"></a>3.7.1 Webpack 优化

> [返回目录](#chapter-one)

**2019 年文章**：

* [x] [Webpack优化——将你的构建效率提速翻倍](https://juejin.im/post/5d614dc96fb9a06ae3726b3e)【阅读建议：10min】
* [x] [性能优化篇---Webpack构建速度优化](https://segmentfault.com/a/1190000018493260)【阅读建议：10min】
* [x] [使用webpack4提升180%编译速度](http://louiszhai.github.io/2019/01/04/webpack4/)【阅读建议：10min】
* [x] [多进程并行压缩代码](https://jkfhto.github.io/2019-10-17/webpack/%E5%A4%9A%E8%BF%9B%E7%A8%8B%E5%B9%B6%E8%A1%8C%E5%8E%8B%E7%BC%A9%E4%BB%A3%E7%A0%81/)【阅读建议：5min】
* [x] [webpack 的 scope hoisting 是什么？](https://ssshooter.com/2019-02-20-webpack-scope-hoisting/)【阅读建议：5min】
* [x] [webpack 4: Code Splitting和chunks切分优化](https://juejin.im/post/5d53f49bf265da03dc0766e2)【阅读建议：5min】

**2018 年文章**：

* [x] [Tree-Shaking性能优化实践 - 原理篇](https://juejin.im/post/5a4dc842518825698e7279a9)【阅读建议：10min】
* [x] [体积减少80%！释放webpack tree-shaking的真正潜力](https://juejin.im/post/5b8ce49df265da438151b468)【阅读建议：10min】
* [x] [你的Tree-Shaking并没什么卵用](https://zhuanlan.zhihu.com/p/32831172)【阅读建议：5min】
* [x] [webpack 如何通过作用域分析消除无用代码](https://diverse.space/2018/05/better-tree-shaking-with-scope-analysis)【阅读建议：5min】
* [x] [让你的Webpack起飞—考拉会员后台Webpack优化实战](https://zhuanlan.zhihu.com/p/42465502)【阅读建议：5min】
* [x] [webpack dllPlugin打包体积和速度优化](https://zhuanlan.zhihu.com/p/39727247)【阅读建议：5min】
* [x] [webpack优化之code splitting](https://segmentfault.com/a/1190000013000463)【阅读建议：5min】

**2017 年文章**：

* [x] [Webpack 打包优化之速度篇](https://www.jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/)【阅读建议：5min】
* [x] [加速Webpack-缩小文件搜索范围](https://imweb.io/topic/5a40551ea192c3b460fce335)【阅读建议：5min】
* [x] [通过Scope Hoisting优化Webpack输出](https://imweb.io/topic/5a43064fa192c3b460fce360)【阅读建议：5min】
* [x] [Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831)【阅读建议：5min】

#### <a name="chapter-three-seven-two" id="chapter-three-seven-two"></a>3.7.2 其他优化

> [返回目录](#chapter-one)

* [x] [网站性能优化实战——从12.67s到1.06s的故事](https://juejin.im/post/5b6fa8c86fb9a0099910ac91)【阅读建议：30min】
* [x] [聊聊前端开发中的长列表](https://zhuanlan.zhihu.com/p/26022258)【阅读建议：30min】
* [x] [再谈前端虚拟列表的实现](https://zhuanlan.zhihu.com/p/34585166)【阅读建议：30min】
* [x] [浅说虚拟列表的实现原理](https://github.com/dwqs/blog/issues/70)【阅读建议：30min】
* [x] [用 preload 预加载页面资源](https://juejin.im/post/5a7fb09bf265da4e8e785c38)【阅读建议：20min】
* [x] [（译）2019年前端性能优化清单 — 上篇](https://juejin.im/post/5c46cbaee51d453f45612a2c)【阅读建议：20min】
* [x] [（译）2019年前端性能优化清单 — 中篇](https://juejin.im/post/6844903765741404168)【阅读建议：20min】
* [x] [（译）2019年前端性能优化清单 — 下篇](https://juejin.im/post/6844903765749792782)【阅读建议：20min】
* [x] [App内网页启动加速实践：静态资源预加载视角](https://mp.weixin.qq.com/s/tXABGOV4Lp2YiGnzq3gxbA)【阅读建议：20min】
* [x] [腾讯HTTPS性能优化实践](https://mp.weixin.qq.com/s/V62VYS8KFNKxJxfzMYefrw)【阅读建议：30min】
* [x] [5 分钟撸一个前端性能监控工具](https://juejin.im/post/6844903662020460552)【阅读建议：20min】
* [x] [现代化懒加载的方式](https://juejin.im/post/6844903559599751175)【阅读建议：5min】
* [x] [懒加载和预加载](https://juejin.im/post/6844903614138286094)【阅读建议：10min】

### <a name="chapter-three-eight" id="chapter-three-eight"></a>3.8 本地存储

> [返回目录](#chapter-one)

* [x] [cookie、Session、Token、sessionStorage、localStorage简介](https://blog.csdn.net/qq_36632174/article/details/102402203)【阅读建议：5min】
* [x] [session,cookie,sessionStorage,localStorage,token的区别？](https://blog.csdn.net/yinge0508/article/details/95761173)【阅读建议：5min】
* [x] [什么是Http无状态？Session、Cookie、Token三者之间的区别](https://www.cnblogs.com/lingyejun/p/9282169.html)【阅读建议：5min】
* [x] [Session是怎么实现的？存储在哪里？](https://blog.csdn.net/qq_15096707/article/details/74012116)【阅读建议：5min】
* [x] [用户登录，前后端如何交互判断是否登录超时！](https://blog.csdn.net/qq_27610601/article/details/81353027)【阅读建议：5min】
* [x] [前后端分离模式下，如何跟踪用户状态？](https://blog.csdn.net/hwhsong/article/details/82020526)【阅读建议：5min】

### <a name="chapter-three-night" id="chapter-three-night"></a>3.9 其他

> [返回目录](#chapter-one)

* [x] [抛弃console.log()，拥抱浏览器Debugger](https://zhuanlan.zhihu.com/p/52077620)【阅读建议：10min】
* [x] [浏览器IMG图片原生懒加载loading=”lazy”实践指南](https://www.zhangxinxu.com/wordpress/2019/09/native-img-loading-lazy/)【阅读建议：10min】
* [x] [浏览器页面资源加载过程与优化](https://juejin.im/post/5a4ed917f265da3e317df515)【阅读建议：无】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

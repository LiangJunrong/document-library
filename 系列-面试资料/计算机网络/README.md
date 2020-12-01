计算机网络
===

> Create by **jsliang** on **2020-09-01 21:06:05**  
> Recently revised in **2020-12-02 07:35:45**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |
| &emsp;[3.1 系统](#chapter-three-one) |
| &emsp;[3.2 网络安全](#chapter-three-two) |
| &emsp;[3.3 HTTP](#chapter-three-three) |
| &emsp;[3.4 MD5](#chapter-three-four) |
| &emsp;[3.5 DNS](#chapter-three-five) |
| &emsp;[3.6 TCP](#chapter-three-six) |
| &emsp;[3.7 CDN](#chapter-three-seven) |
| &emsp;[3.8 WebSocket](#chapter-three-eight) |
| &emsp;[3.9 其他](#chapter-three-night) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

**jsliang** 自己整理，用来复习计算机网络系列的文章和知识点。

本系列整理了 `5` 篇文章。

* [x] [计算机网络 - 网络安全](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8.md)
  * [x] **同源策略**：什么是同源，为什么需要同源？
  * [x] **XSS**：XSS 攻击是什么，XSS 攻击手段，XSS 防御方法？
  * [x] **CSRF**：CSRF 攻击是什么，CSRF 攻击手段，CSRF 防御方法？
  * [x] **SQL 注入**：什么是 SQL 注入？
  * [x] **流量劫持**：什么是 DNS 劫持，什么是 HTTP 劫持？
  * [x] **浏览器网络安全**
  * [x] **浏览器系统安全**
* [x] [计算机网络 - HTTP](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/HTTP.md)
  * [x] **HTTP 发展史**：HTTP/0.9 -> HTTP/1.0 -> HTTP/1.1 -> HTTP/2.0 -> HTTP/3.0
  * [x] **HTTP**：请求方法、优缺点、GET 和 POST 区别
  * [x] **HTTP 状态码**：1XX、2XX、3XX、4XX、5XX 各列举 3 个
  * [x] **解决通讯安全问题**：对称加密、非对称加密、对称加密 + 非对称加密、第三方认证
  * [x] **HTTPS**：工作原理、优缺点、HTTP 和 HTTPS 对比
  * [x] **HTTP/2.0**：头部压缩、多路复用、设置请求优先级、服务器推送
* [x] [计算机网络 - DNS](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/DNS.md)
  * [x] 浏览器 DNS 缓存
  * [x] 系统缓存
  * [x] 路由器缓存
  * [x] ISP DNS 服务器
  * [x] 递归查询：DNS 根服务器 -> `.com` 顶级域名服务器 -> `baidu.com` 主域名服务器
* [x] [计算机网络 - TCP](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/DNS.md)
  * [x] **UDP**：容易丢包，传输速度可，用于在线视频、互动游戏等应用
  * [x] **TCP**：面向连接的、可靠的、基于字节流的传输层通信协议
  * [x] **TCP 连接 3 过程**：建立连接阶段、传输数据阶段、断开连接阶段
  * [x] **三次握手**：三次握手过程，为什么不可以两次握手
  * [x] **四次挥手**：四次挥手过程，为什么需要四次挥手
  * [x] **TCP 和 UDP 的区别**
* [x] [计算机网络 - 基础](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80.md)
  * [x] 计算机网络体系结构
  * [x] 正向代理和反向代理
  * [x] CDN
* [x] [计算机网络 - WebSocket](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/WebSocket.md)
  * [x] HTTP 和 WebSocket
  * [x] WebSocket 和 Socket.io

## <a name="chapter-three" id="chapter-three"></a>三 参考文献

> [返回目录](#chapter-one)

本系列有 `62` 篇参考文献。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 系统

> [返回目录](#chapter-one)

* [x] [(建议收藏)TCP协议灵魂之问，巩固你的网路底层基础](https://juejin.im/post/6844904021308735502)【阅读建议：4hour】
* [x] [(建议精读)HTTP灵魂之问，巩固你的 HTTP 知识体系](https://juejin.im/post/6844904100035821575)【阅读建议：1hour】

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 网络安全

> [返回目录](#chapter-one)

* [x] [常见 Web 安全攻防总结](https://zoumiaojiang.com/article/common-web-security/)【阅读建议：1hour】
* [x] [前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)【阅读建议：20min】
* [x] [前端安全系列（二）：如何防止CSRF攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)【阅读建议：20min】
* [x] [前端也需要了解的 JSONP 安全](https://juejin.im/post/5b75b497e51d45666276251d)【阅读建议：10min】
* [x] [【面试篇】寒冬求职之你必须要懂的Web安全](https://juejin.im/post/5cd6ad7a51882568d3670a8e)【阅读建议：20min】
* [x] [谈谈对 Web 安全的理解](https://zhuanlan.zhihu.com/p/25486768?group_id=820705780520079360)【阅读建议：10min】
* [x] [程序员必须要了解的web安全](https://juejin.im/post/5b4e0c936fb9a04fcf59cb79)【阅读建议：10min】
* [x] [可信前端之路：代码保护](https://www.freebuf.com/articles/web/102269.html)【阅读建议：10min】
* [x] [前端如何给 JavaScript 加密（不是混淆）？](https://www.zhihu.com/question/47047191)【阅读建议：10min】

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 HTTP

> [返回目录](#chapter-one)

* [x] [面试带你飞：这是一份全面的 计算机网络基础 总结攻略](https://juejin.im/post/6844903592965439501)【阅读建议：1h】
* [x] [看图学HTTPS](https://juejin.im/post/6844903608421449742)【阅读建议：30min】
* [x] [你知道，HTTPS用的是对称加密还是非对称加密？](https://zhuanlan.zhihu.com/p/96494976)【阅读建议：30min】
* [x] [HTTP 响应代码 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)【阅读建议：20min】
* [x] [http的基础结构](http://47.98.159.95/my_blog/http/001.html#%E8%B5%B7%E5%A7%8B%E8%A1%8C)【阅读建议：5min】
* [x] [http状态码](http://47.98.159.95/my_blog/http/004.html#_1xx)【阅读建议：5min】
* [x] [前端基础篇之HTTP协议](https://juejin.im/post/5cd0438c6fb9a031ec6d3ab2)【阅读建议：30min】
* [x] [都9102年了，还问GET和POST的区别](https://segmentfault.com/a/1190000018129846)【阅读建议：20min】
* [x] [如何理解HTTP响应的状态码？](https://harttle.land/2015/08/15/http-status-code.html)【阅读建议：20min】
* [x] [你所知道的3xx状态码](https://aotu.io/notes/2016/01/28/3xx-of-http-status/index.html)【阅读建议：10min】
* [x] [HTTP协议头部与Keep-Alive模式详解](https://www.byvoid.com/zhs/blog/http-keep-alive-header)【阅读建议：10min】
* [x] [HTTP keep-alive 二三事](https://lotabout.me/2019/Things-about-keepalive/)【阅读建议：10min】
* [x] [你应该知道的前端——缓存](https://juejin.im/post/6844903598556446733)【阅读建议：10min】
* [x] [HTTP 缓存机制一二三](https://zhuanlan.zhihu.com/p/29750583)【阅读建议：10min】
* [x] [通过HTTP的HEADER完成各种骚操作](https://juejin.im/post/6844903661596835854)【阅读建议：10min】
* [x] [九个问题从入门到熟悉HTTPS](https://juejin.im/post/6844903521272201223)【阅读建议：20min】
* [x] [谈谈 HTTPS](https://juejin.im/post/6844903504046211079)【阅读建议：20min】
* [x] [小哥哥,小姐姐,我有一份tcp、http面试指南你要吗？](https://juejin.im/post/6844903592164343821)【阅读建议：20min】
* [x] [分分钟让你理解HTTPS](https://juejin.im/post/6844903599303032845)【阅读建议：10min】
* [x] [HTTP2基本概念学习笔记](https://juejin.im/post/6844903589635162120)【阅读建议：10min】
* [x] [深入理解HTTPS工作原理](https://juejin.im/post/5ca6a109e51d4544e27e3048)【阅读建议：20min】
* [x] [解密HTTP/2与HTTP/3 的新特性](https://segmentfault.com/a/1190000020714686)【阅读建议：10min】
* [x] [浅谈 HTTP/2 Server Push](https://zhuanlan.zhihu.com/p/26757514)【阅读建议：10min】
* [x] [简述HTTPS（二）：混合加密机制](https://www.jianshu.com/p/add499400d95)【阅读建议：10min】
* [x] [简述HTTPS（三）：数字证书](https://www.jianshu.com/p/448e8382c24c)【阅读建议：10min】
* [x] [彻底搞懂HTTPS的加密机制](https://zhuanlan.zhihu.com/p/43789231)【阅读建议：20min】
* [x] [听说『99% 的人都理解错了 HTTP 中 GET 与 POST 的区别』？？](https://zhuanlan.zhihu.com/p/25028045)【阅读建议：争议文】
* [x] [你敢在post和get上刁难我，就别怪我装逼了](https://juejin.im/post/6844903508370538503)【阅读建议：争议文】

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 MD5

> [返回目录](#chapter-one)

* [x] [md5加密与解密](https://zhuanlan.zhihu.com/p/58888121)【阅读建议：30min】
* [x] [C#：使用MD5对用户密码加密与解密](https://www.cnblogs.com/healer007/p/5062189.html)【阅读建议：10min】
* [x] [md5会有重复的可能吗？](https://www.zhihu.com/question/23189202)

### <a name="chapter-three-five" id="chapter-three-five"></a>3.5 DNS

> [返回目录](#chapter-one)

* [x] [DNS 解析顺序](https://blog.csdn.net/Yooneep/article/details/89882123)【阅读建议：5min】
* [x] [写给前端工程师的DNS基础知识](http://www.sunhao.win/articles/netwrok-dns.html)【阅读建议：10min】
* [x] [前端优化: DNS预解析提升页面速度](https://www.jianshu.com/p/95a0c0636d28)【阅读建议：5min】
* [x] [DNS解析](https://imweb.io/topic/55e3ba46771670e207a16bc8)【阅读建议：10min】

### <a name="chapter-three-six" id="chapter-three-six"></a>3.6 TCP

> [返回目录](#chapter-one)

* [x] [面试官，不要再问我三次握手和四次挥手](https://zhuanlan.zhihu.com/p/86426969)【阅读建议：1hour】
* [x] [关于三次握手与四次挥手面试官想考我们什么](https://juejin.im/post/6844903834708344840)【阅读建议：20min】
* [x] [通俗大白话来理解TCP协议的三次握手和四次分手](https://github.com/jawil/blog/issues/14)【阅读建议：20min】
* [x] [TCP协议详解](https://juejin.im/post/5ba895a06fb9a05ce95c5dac)【阅读建议：40min】
* [x] [面试时，你被问到过 TCP/IP 协议吗?](https://juejin.im/post/58e36d35b123db15eb748856)【阅读建议：20min】
* [x] [“三次握手，四次挥手”你真的懂吗？](https://zhuanlan.zhihu.com/p/53374516)【阅读建议：20min】

### <a name="chapter-three-seven" id="chapter-three-seven"></a>3.7 CDN

> [返回目录](#chapter-one)

* [x] [五分钟了解CDN](https://juejin.im/post/5afa449c51882542ba07e70e)【阅读建议：10min】
* [x] [漫话：如何给女朋友解释什么是CDN？](https://juejin.im/post/5d478c48e51d453c135c5a5c)【阅读建议：20min】
* [x] [关于 cdn、回源等问题一网打尽](https://juejin.im/post/5af46498f265da0b8d41f6a3)【阅读建议：10min】
* [x] [CDN是什么？使用CDN有什么优势？](https://www.zhihu.com/question/36514327?rf=37353035)【阅读建议：10min】

### <a name="chapter-three-eight" id="chapter-three-eight"></a>3.8 WebSocket

> [返回目录](#chapter-one)

* [x] [websocket 与Socket.IO介绍](https://www.cnblogs.com/mazg/p/5467960.html)【阅读建议：10min】
* [x] [WebSocket 与 Socket.IO](https://zhuanlan.zhihu.com/p/23467317)【阅读建议：10min】
* [x] [Websocket和Socket.io的区别及应用](https://www.jianshu.com/p/970dcfd174dc)【阅读建议：20min】

### <a name="chapter-three-night" id="chapter-three-night"></a>3.9 其他

> [返回目录](#chapter-one)

* [x] [正向代理与反向代理【总结】](https://www.cnblogs.com/Anker/p/6056540.html)【阅读建议：10min】
* [x] [你真的了解 Cookie 和 Session 吗](https://juejin.im/post/6844903842773991431)【阅读建议：10min】

---

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。

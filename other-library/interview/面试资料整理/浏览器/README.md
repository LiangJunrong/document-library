浏览器
===

> Create by **jsliang** on **2020-09-02 14:48:58**  
> Recently revised in **2020-09-19 21:11:52**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* [ ] [(1.6w字)浏览器灵魂之问，请问你能接得住几个？](https://juejin.im/post/6844904021308735502)
* [ ] [浏览器页面资源加载过程与优化](https://juejin.im/post/6844903545016156174)
* [ ] [深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)
* [ ] [前端必须要懂的浏览器缓存机制](https://juejin.im/entry/6844903599537930253)
* [ ] [浏览器的回流与重绘 (Reflow & Repaint)](https://juejin.im/post/6844903569087266823)
* [ ] [深入浅出浏览器渲染原理](https://zhuanlan.zhihu.com/p/53913989)
* [ ] [抛弃console.log()，拥抱浏览器Debugger](https://zhuanlan.zhihu.com/p/52077620)
* [ ] [细说浏览器输入URL后发生了什么](https://juejin.im/post/5e32449d6fb9a02fe4581907)
* [ ] [JavaScript进阶-内存机制(表情包初探)](https://juejin.im/post/6844904033317027854)
* [ ] [关于浏览器缓存你知道多少](https://mp.weixin.qq.com/s/Wvc0lkLpgyEW_u7bbMdvpQ)
* [ ] [浏览器缓存](https://github.com/xiangxingchen/blog/issues/9)
* [ ] [设计一个无懈可击的浏览器缓存方案：关于思路，细节，ServiceWorker，以及HTTP/2](https://zhuanlan.zhihu.com/p/28113197)
* [ ] [浏览器页面资源加载过程与优化](https://juejin.im/post/5a4ed917f265da3e317df515)
* [ ] [浏览器IMG图片原生懒加载loading=”lazy”实践指南](https://www.zhangxinxu.com/wordpress/2019/09/native-img-loading-lazy/)
* [ ] [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
* [ ] [浏览器同源策略与ajax跨域方法汇总](https://www.jianshu.com/p/438183ddcea8)
* [ ] [深入浅出浏览器渲染原理](https://zhuanlan.zhihu.com/p/53913989)
* [ ] [浏览器与Node的事件循环(Event Loop)有何区别?](https://zhuanlan.zhihu.com/p/54882306)
* [ ] [从event loop规范探究javaScript异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)

### 默认端口

* http：80
* https：443

### DNS 解析

* [x] [DNS 解析顺序](https://blog.csdn.net/Yooneep/article/details/89882123)【阅读建议：5min】
* [ ] []

1. 查询 `www.baidu.com`
2. 访问客户端 DNS 缓存：**浏览器缓存** -> **系统缓存（host）** -> **路由器缓存**
3. 访问 **ISP DNS 服务器**（ISP，互联网服务提供商，有联通电信移动等。如果你是电信网络，则进入电信的 DNS 缓存服务器，以下简称本地），如果本地服务器有，则直接返回；如果没有，让本地 DNS 服务器去咨询查找。
4. 本地去咨询 **DNS 根服务器**，DNS 根服务器发现是 `.com 区域` 管理的，告诉本地去咨询它。
5. 本地去咨询 **.com 顶级域服务器**，.com 域服务器告诉本地去咨询 `baidu.com 主区域` 的服务器。
6. 本地去咨询 **baidu.com 主域名服务器**，baidu.com 域服务器查找到对应的 IP 地址，返回给本地。
7. 本地 DNS 云服务器通知用户对方 IP 地址，同时缓存这个 IP 地址，下次就直接访问了。

## 从输入 URL 到页面呈现

* 网络请求
  * 构建请求
  * 查找强缓存
  * DNS 解析
  * 建立 TCP 连接
  * 发送 HTTP 请求
* 网络响应

这时候，如果响应头中 `Content-Type` 的值是 `text/html`，那么接下来就是 **浏览器的解析和渲染** 工作。

解析过程：

* 构建 DOM 树
  * 标记化
  * 建树算法
* 样式计算
  * 格式化
  * 标准化
  * 计算规则：继承、层叠
* 生成布局树（`Layout Tree`）

渲染过程：

* 建立图层树（`Layer Tree`）
* 生成绘制列表
* 生成图块并栅格化
* 显示器显示内容

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
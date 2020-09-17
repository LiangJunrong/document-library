异步系列
===

> Create by **jsliang** on **2020-09-17 18:32:23**  
> Recently revised in **2020-09-17 21:32:25**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* [x] [你好，JavaScript异步编程---- 理解JavaScript异步的美妙](https://juejin.im/post/5b56c3586fb9a04faa79a8e0)【阅读建议：5min】
* [x] [理解异步之美：Promise与async await（一）](https://juejin.im/post/6844903655565426696)【5min】
* [x] [理解异步之美：Promise 与 async await（二）](https://juejin.im/post/6844903661789773831)【20min】
* [x] [[完结篇] - 理解异步之美 --- promise与async await （三）](https://juejin.im/post/6844903664209887246)【20min】

JavaScript 是一个单线程的语言。

单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。

* 为什么不设计成多线程

假设有个 DOM 节点，现在有线程 A 操作它，删除了这个 DOM；然后线程 B 又操作它，修改了某部分。那么现在问题来了，咱听谁的？

所以干脆设计成一个单线程，哪怕后期 HTML5 出了个 web worker 也是不允许操作 DOM 结构的，可以完成一些分布式的计算。

* 为什么需要异步？

这时候又有问题了，如果调用某个接口（Ajax），或者加载某张图片的时候，我们卡住了，这样页面是不是就一直不能渲染？

然后因为单线程只能先让前面的程序走完，即便这个接口或者图片缓过来了，我下面还有其他任务没做呢，这不就卡死了么？

所以这时候异步来了：

在涉及某些需要等待的操作的时候，我们就选择让程序继续运行。

等待接口或者图片返回过来后，就通知程序我做好了，你可以继续调用了。

* 为什么会有 Event Loop？

前面 **jsliang** 讲到： JavaScript 一样一次只能做一件事。

如果碰到一些需要等待的程序，例如 `setTimeout` 等，那就歇菜了，所以 JavaScript 为了协调事件、用户交互、脚本、渲染、网络等，就搞出来一个 **事件循环（Event Loop）**。

* 什么是 Event Loop？

JavaScript 从 `script` 开始读取，然后不断循环，从 “任务队列” 中读取执行事件的过程，就是 **事件循环（Event Loop）**。

* Event Loop 的执行机制？



---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
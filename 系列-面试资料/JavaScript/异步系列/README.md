异步系列
===

> Create by **jsliang** on **2020-09-17 18:32:23**  
> Recently revised in **2020-10-12 10:42:16**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 异步](#chapter-three) |
| <a name="catalog-chapter-four" id="catalog-chapter-four"></a>[四 参考文献](#chapter-four) |
| &emsp;[4.1 异步参考文献](#chapter-four-one) |
| &emsp;[4.2 Event Loop 参考文献](#chapter-four-two) |
| &emsp;[4.3 Promise 参考文献](#chapter-four-three) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

本系列将整理：

* [x] [JavaScript 异步](#chapter-three)
  * [x] JavaScript 是单线程的
  * [x] 为什么不设计成多线程
  * [x] 为什么需要异步
  * [x] 如何实现异步
* [x] [Event Loop](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97/Event%20Loop.md)
  * [x] 单线程和多线程
  * [x] 浏览器 Event Loop
  * [x] Node 和浏览器 Event Loop 区别
  * [x] 训练题目
* [x] [Promise](https://github.com/LiangJunrong/document-library/blob/master/%E7%B3%BB%E5%88%97-%E9%9D%A2%E8%AF%95%E8%B5%84%E6%96%99/JavaScript/%E5%BC%82%E6%AD%A5%E7%B3%BB%E5%88%97/Promise.md)
  * [x] Promise 初探：是什么、为什么、怎么用
  * [x] Promise 基础：`new Promise` 和 `Promise` 状态
  * [x] 题库：基础题
  * [x] 题库：结合 `setTimeout`
  * [x] `.then()` 链式操作：两个参数、链式调用
  * [x] `.catch()` 捕获问题
  * [x] `.finally()` 强制执行
  * [x] 题库：`.then()、.catch()、.finally()`
  * [x] `.all()` 接力赛
  * [x] `.race()` 个人赛
  * [x] 题库：`.all()、.race()`
  * [x] Promise 源码
  * [x] 题库：结合 `async/await`
  * [x] 综合题
  * [x] 大厂题
  * [x] 总结

## <a name="chapter-three" id="chapter-three"></a>三 异步

> [返回目录](#chapter-one)

**JavaScript 是一个单线程的语言。**

单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。

这种模式的好处是实现起来比较简单，执行环境相对单纯。

坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。

常见的浏览器无响应（假死），往往就是因为某一段 JavaScript 代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。

所以，JavaScript 将任务的执行模式分为两种：同步和异步。

* **为什么不设计成多线程？**

假设有个 DOM 节点，现在有线程 A 操作它，删除了这个 DOM；然后线程 B 又操作它，修改了某部分。那么现在问题来了，咱听谁的？

所以干脆设计成一个单线程，哪怕后期 HTML5 出了个 Web Worker 也是不允许操作 DOM 结构的，可以完成一些分布式的计算。

* **为什么需要异步？**

这时候又有问题了，如果调用某个接口（Ajax），或者加载某张图片的时候，我们卡住了，这样页面是不是就一直不能渲染？

然后因为单线程只能先让前面的程序走完，即便这个接口或者图片缓过来了，我下面还有其他任务没做呢，这不就卡死了么？

所以这时候异步来了：

在涉及某些需要等待的操作的时候，我们就选择让程序继续运行。

等待接口或者图片返回过来后，就通知程序我做好了，你可以继续调用了。

* **如何实现异步？**

1. **回调**。假设有 `fn1` 和 `fn2`，在 `fn1` 中设置的 `setTimeout` 内部执行 `fn2`。
2. **事件监听**。采用事件驱动模式，可以等某个事件执行完毕再设置其他内容。
3. **发布/订阅**。我们假定，存在一个 “信号中心”，某个任务执行完成，就向信号中心 “发布” 一个信号，其他任务可以向信号中心 “订阅” 这个信号，从而知道什么时候自己可以开始执行。
4. **Promise**。
5. **async/await**。

## <a name="chapter-four" id="chapter-four"></a>四 参考文献

> [返回目录](#chapter-one)

本系列有 34 篇参考文献。

### <a name="chapter-four-one" id="chapter-four-one"></a>4.1 异步参考文献

> [返回目录](#chapter-one)

* [x] [Javascript异步编程的 4 种方法](http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)【阅读建议：5min】
* [x] [你好，JavaScript异步编程---- 理解JavaScript异步的美妙](https://juejin.im/post/5b56c3586fb9a04faa79a8e0)【阅读建议：5min】
* [x] [理解异步之美：Promise 与 async await（一）](https://juejin.im/post/6844903655565426696)【5min】
* [x] [理解异步之美：Promise 与 async await（二）](https://juejin.im/post/6844903661789773831)【20min】
* [x] [[完结篇] - 理解异步之美 --- promise与async await （三）](https://juejin.im/post/6844903664209887246)【20min】

### <a name="chapter-four-two" id="chapter-four-two"></a>4.2 Event Loop 参考文献

> [返回目录](#chapter-one)

* [x] [浏览器与Node的事件循环(Event Loop)有何区别?](https://zhuanlan.zhihu.com/p/54882306)【阅读建议：20min】
* [x] [一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.im/post/5c3d8956e51d4511dc72c200)【阅读建议：20min】
* [x] [事件循环机制的那些事](https://mp.weixin.qq.com/s/PBX_YHw0-f3bbSDH5ZbbJQ?)【阅读建议：10min】
* [x] [深入理解js事件循环机制（Node.js篇）](http://lynnelv.github.io/js-event-loop-nodejs)【阅读建议：无】
* [x] [详解 JavaScript 中的 Event Loop（事件循环）机制](https://zhuanlan.zhihu.com/p/33058983)【阅读建议：5min】
* [x] [深入理解 JavaScript Event Loop](https://zhuanlan.zhihu.com/p/34229323)【阅读建议：20min】
* [x] [【THE LAST TIME】彻底吃透 JavaScript 执行机制](https://juejin.im/post/5d901418518825539312f587)【阅读建议：20min】
* [x] [JavaScript：彻底理解同步、异步和事件循环(Event Loop)](https://segmentfault.com/a/1190000004322358)【阅读建议：10min】
* [x] [从event loop规范探究javaScript异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)【阅读建议：20min】
* [x] [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)【阅读建议：无】
* [x] [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)【阅读建议：无】
* [x] [再谈谈 Promise, setTimeout, rAF, rIC](https://segmentfault.com/a/1190000019154514)【阅读建议：10min】
* [x] [window.requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)【阅读建议：10min】
* [x] [JavaScript 中的多线程 -- Web Worker](https://zhuanlan.zhihu.com/p/25184390)【阅读建议：30min】
* [x] [浅谈HTML5 Web Worker](https://juejin.im/post/6844903496550989837)【阅读建议：10min】
* [x] [JavaScript 性能利器 —— Web Worker](https://juejin.im/post/5c10e5a9f265da611c26d634)【阅读建议：10min】
* [x] [浏览器进程？线程？傻傻分不清楚！](https://imweb.io/topic/58e3bfa845e5c13468f567d5)【阅读建议：5min】

### <a name="chapter-four-three" id="chapter-four-three"></a>4.3 Promise 参考文献

> [返回目录](#chapter-one)

* [x] [ES6 入门 - Promise 对象](https://es6.ruanyifeng.com/#docs/promise)【阅读建议：2h】
* [x] [要就来 45 道 Promise 面试题一次爽到底](https://juejin.im/post/6844904077537574919)【阅读建议：8h】
* [x] [面试精选之 Promise](https://juejin.im/post/6844903625609707534)【阅读建议：20min】
* [x] [最简实现 Promise，支持异步链式调用（20行）](https://juejin.im/post/5e6f4579f265da576429a907)【建议阅读：20min】
* [x] [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.im/post/6844903625769091079)【阅读建议：30min】
* [x] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)【阅读建议：30min】
* [x] [一起学习造轮子（一）：从零开始写一个符合Promises/A+规范的promise](https://juejin.im/post/6844903617619558408)【阅读建议：略读】
* [x] [Promise实现原理（附源码）](https://juejin.im/post/5b83cb5ae51d4538cc3ec354)【阅读建议：略读】
* [x] [剖析Promise内部结构，一步一步实现一个完整的、能通过所有Test case的Promise类](https://github.com/xieranmaya/blog/issues/3)【建议阅读：略读】
* [x] [小邵教你玩转promise源码](https://juejin.im/post/6844903655418626061)【建议阅读：略读】
* [x] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/6844903607968481287)【建议阅读：略读】
* [x] [Promises/A+ 规范（中文版](https://segmentfault.com/a/1190000002452115)【阅读建议：无】
* [x] [Promises/A+ 规范（英文版）](https://promisesaplus.com/)【阅读建议：无】
* [x] [Promises/A+ 测试仓库](https://github.com/promises-aplus/promises-tests/tree/master/lib/tests)【阅读建议：无】
* [x] [ES6 之 Promise 常见面试题](https://blog.csdn.net/weixin_37719279/article/details/80950713)【阅读建议：10min】
* [x] [Promise 必知必会（十道题）](https://juejin.im/post/6844903509934997511)【阅读建议：10min】
* [x] [大白话讲解 Promise（一）](https://www.cnblogs.com/lvdabao/p/es6-promise-1.html)【阅读建议：30min】
* [x] [再谈谈 Promise, setTimeout, rAF, rIC](https://segmentfault.com/a/1190000019154514)【阅读建议：10min】
* [x] [window.requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)【阅读建议：10min】

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。
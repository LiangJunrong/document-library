JavaScript 资料整理
===

> Create by **jsliang** on **2020-09-01 20:50:29**  
> Recently revised in **2020-09-02 15:23:32**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

复习知识点：

* [ ] 执行上下文/作用域链/闭包
* [ ] this/call/apply/bind
* [ ] 原型/继承
* [ ] Promise
* [ ] 深浅拷贝
* [ ] 事件机制/Event Loop
* [ ] 函数式编程
* [ ] service worker/web worker
* [ ] 常用方法
* [ ] ...

### 系统

* [ ] [(建议收藏)原生JS灵魂之问, 请问你能接得住几个？(上)](https://juejin.im/post/6844903974378668039)
* [ ] [(建议精读)原生JS灵魂之问(中)，检验自己是否真的熟悉JavaScript？](https://juejin.im/post/6844903986479251464)
* [ ] [(2.4w字)原生JS灵魂之问(下), 冲刺🚀进阶最后一公里(附个人成长经验分享)](https://juejin.im/post/6844904004007247880)

### 执行上下文/作用域链/闭包

* [ ] [理解 JavaScript 中的执行上下文和执行栈](https://juejin.im/post/5ba32171f265da0ab719a6d7)
* [ ] [JavaScript深入之执行上下文栈](https://github.com/mqyqingfeng/Blog/issues/4)
* [ ] [一道js面试题引发的思考](https://github.com/kuitos/kuitos.github.io/issues/18)
* [ ] [JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)
* [ ] [JavaScript深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)
* [ ] [发现 JavaScript 中闭包的强大威力](https://juejin.im/post/5c4e6a90e51d4552266576d2)
* [ ] [JavaScript闭包的底层运行机制](http://blog.leapoahead.com/2015/09/15/js-closure/)
* [ ] [我从来不理解JavaScript闭包，直到有人这样向我解释它...](https://zhuanlan.zhihu.com/p/56490498)
* [ ] [破解前端面试（80% 应聘者不及格系列）：从闭包说起](https://juejin.im/post/58f1fa6a44d904006cf25d22#heading-0)

### this/call/apply/bind

* [ ] [JavaScript基础心法——this](https://github.com/axuebin/articles/issues/6)
* [ ] [JavaScript深入之从ECMAScript规范解读this](https://github.com/mqyqingfeng/Blog/issues/7)
* [ ] [前端基础进阶（七）：全方位解读this](https://www.jianshu.com/p/d647aa6d1ae6)
* [ ] [面试官问：JS的this指向](https://juejin.im/post/5c0c87b35188252e8966c78a)
* [ ] [JavaScript深入之call和apply的模拟实现](https://juejin.im/post/5907eb99570c3500582ca23c)
* [ ] [JavaScript基础心法—— call apply bind](https://github.com/axuebin/articles/issues/7)
* [ ] [面试官问：能否模拟实现JS的call和apply方法](https://juejin.im/post/5bf6c79bf265da6142738b29)
* [ ] [回味JS基础:call apply 与 bind](https://juejin.im/post/57dc97f35bbb50005e5b39bd)
* [ ] [面试官问：能否模拟实现JS的bind方法](https://juejin.im/post/5bec4183f265da616b1044d7)
* [ ] [不用call和apply方法模拟实现ES5的bind方法](https://github.com/jawil/blog/issues/16)

### 原型/继承

* [ ] [深入理解 JavaScript 原型](https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg)
* [ ] [【THE LAST TIME】一文吃透所有JS原型相关知识点](https://juejin.im/post/5dba456d518825721048bce9)
* [ ] [重新认识构造函数、原型和原型链](https://juejin.im/post/5c6a9c10f265da2db87b98f3)
* [ ] [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/blog/issues/2)
* [ ] [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（一）](https://www.jianshu.com/p/dee9f8b14771)
* [ ] [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（二）](https://www.jianshu.com/p/652991a67186)
* [ ] [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（三）](https://www.jianshu.com/p/a4e1e7b6f4f8)
* [ ] [JavaScript 引擎基础：原型优化](https://hijiangtao.github.io/2018/08/21/Prototypes/)
* [ ] [Prototypes in JavaScript](https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b)
* [ ] [JavaScript深入之创建对象的多种方式以及优缺点](https://github.com/mqyqingfeng/Blog/issues/15)
* [ ] [详解JS原型链与继承](http://louiszhai.github.io/2015/12/15/prototypeChain/)
* [ ] [从proto和prototype来深入理解JS对象和原型链](https://github.com/creeperyang/blog/issues/9)
* [ ] [代码复用模式](https://github.com/jayli/javascript-patterns/blob/master/chapter6.markdown)
* [ ] [JavaScript 中的继承：ES3、ES5 和 ES6](http://tianfangye.com/2017/12/31/inheritance-in-javascript-es3-es5-and-es6/)

### Promise

* [ ] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)
* [ ] [你好，JavaScript异步编程---- 理解JavaScript异步的美妙](https://juejin.im/post/5b56c3586fb9a04faa79a8e0)
* [ ] [Promise不会？？看这里！！！史上最通俗易懂的Promise！！！](https://juejin.im/post/5afe6d3bf265da0b9e654c4b)
* [ ] [一起学习造轮子（一）：从零开始写一个符合Promises/A+规范的promise](https://juejin.im/post/5b16800fe51d4506ae719bae#heading-34)
* [ ] [Promise实现原理（附源码）](https://juejin.im/post/5b83cb5ae51d4538cc3ec354)
* [ ] [当 async/await 遇上 forEach](https://objcer.com/2017/10/12/async-await-with-forEach/)
* [ ] [Promise 必知必会（十道题）](https://juejin.im/post/5a04066351882517c416715d)
* [ ] [BAT前端经典面试问题：史上最最最详细的手写Promise教程](https://juejin.im/post/5b2f02cd5188252b937548ab#heading-9)

### 深浅拷贝

* [ ] [JavaScript基础心法——深浅拷贝](https://github.com/axuebin/articles/issues/20)
* [ ] [深拷贝的终极探索（90%的人都不知道）](https://juejin.im/post/5bc1ae9be51d450e8b140b0c)
* [ ] [JavaScript专题之深浅拷贝](https://github.com/mqyqingfeng/Blog/issues/32)
* [ ] [javaScript中浅拷贝和深拷贝的实现](https://github.com/wengjq/Blog/issues/3)
* [ ] [深入剖析 JavaScript 的深复制](https://jerryzou.com/posts/dive-into-deep-clone-in-javascript/)
* [ ] [「JavaScript」带你彻底搞清楚深拷贝、浅拷贝和循环引用](https://segmentfault.com/a/1190000015042902)
* [ ] [面试题之如何实现一个深拷贝](https://github.com/yygmind/blog/issues/29)

### 事件机制/Event Loop

* [ ] [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
* [ ] [How JavaScript works](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
* [ ] [从event loop规范探究javaScript异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)
* [ ] [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)
* [ ] [【THE LAST TIME】彻底吃透 JavaScript 执行机制](https://juejin.im/post/5d901418518825539312f587)
* [ ] [一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.im/post/5c3d8956e51d4511dc72c200)
* [ ] [浏览器与Node的事件循环(Event Loop)有何区别?](https://zhuanlan.zhihu.com/p/54882306)
* [ ] [深入理解 JavaScript Event Loop](https://zhuanlan.zhihu.com/p/34229323)
* [ ] [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

### 函数式编程

* [ ] [函数式编程指北](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
* [ ] [JavaScript专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)
* [ ] [Understanding Functional Programming in Javascript](https://levelup.gitconnected.com/understanding-functional-programming-in-javascript-a-complete-guide-e85ed13b42c8)
* [ ] [What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
* [ ] [简明 JavaScript 函数式编程——入门篇](https://juejin.im/post/5d70e25de51d453c11684cc4)
* [ ] [You Should Learn Functional Programming](https://dev.to/allanmacgregor/you-should-learn-functional-programming-in-2018-4nff)
* [ ] [JavaScript 函数式编程到底是个啥](https://segmentfault.com/a/1190000009864459)
* [ ] [JavaScript-函数式编程](https://github.com/ecmadao/Coding-Guide/blob/master/Notes/JavaScript/JavaScript%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.md)

### Service Worker / PWA

* [ ] [Service Worker：简介](https://developers.google.com/web/fundamentals/primers/service-workers)
* [ ] [JavaScript 是如何工作的：Service Worker 的生命周期及使用场景](https://github.com/qq449245884/xiaozhi/issues/8)
* [ ] [借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)
* [ ] [PWA Lavas 文档](https://lavas.baidu.com/pwa/README)
* [ ] [PWA 学习手册](https://pwa.alienzhou.com/)
* [ ] [面试官：请你实现一个PWA](https://juejin.im/post/5e26aa785188254c257c462d#heading-24)

### Web Worker

* [ ] [浅谈HTML5 Web Worker](https://juejin.im/post/59c1b3645188250ea1502e46)
* [ ] [JavaScript 中的多线程 -- Web Worker](https://zhuanlan.zhihu.com/p/25184390)
* [ ] [JavaScript 性能利器 —— Web Worker](https://juejin.im/post/5c10e5a9f265da611c26d634)
* [ ] [A Simple Introduction to Web Workers in JavaScript](https://medium.com/young-coder/a-simple-introduction-to-web-workers-in-javascript-b3504f9d9d1c)
* [ ] [Speedy Introduction to Web Workers](https://auth0.com/blog/speedy-introduction-to-web-workers/)

### 常用方法

* [ ] [近一万字的ES6语法知识点补充](https://juejin.im/post/5c6234f16fb9a049a81fcca5)
* [ ] [ES6、ES7、ES8特性一锅炖(ES6、ES7、ES8学习指南)](https://juejin.im/post/5b9cb3336fb9a05d290ee47e)
* [ ] [解锁多种JavaScript数组去重姿势](https://juejin.im/post/5b0284ac51882542ad774c45)
* [ ] [Here’s how you can make better use of JavaScript arrays](https://www.freecodecamp.org/news/heres-how-you-can-make-better-use-of-javascript-arrays-3efd6395af3c/)
* [ ] [一个合格的中级前端工程师需要掌握的 28 个 JavaScript 技巧](https://juejin.im/post/5cef46226fb9a07eaf2b7516)
* [ ] [1.5万字概括ES6全部特性(已更新ES2020)](https://juejin.im/post/5d9bf530518825427b27639d)


* [ ] []()

---

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。